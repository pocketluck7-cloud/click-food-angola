// Adaptador Node → Web Fetch API para correr o build TanStack Start (Nitro)
// no runtime de Funções Serverless do Vercel.
import handler from "../dist/server/server.js";

export const config = {
  runtime: "nodejs",
};

function nodeRequestToFetchRequest(req) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const url = `${protocol}://${host}${req.url}`;

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const v of value) headers.append(key, v);
    } else {
      headers.set(key, value);
    }
  }

  const hasBody = req.method !== "GET" && req.method !== "HEAD";

  return new Request(url, {
    method: req.method,
    headers,
    body: hasBody ? req : undefined,
    duplex: hasBody ? "half" : undefined,
  });
}

async function sendFetchResponse(fetchResponse, res) {
  res.statusCode = fetchResponse.status;
  fetchResponse.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  if (!fetchResponse.body) {
    res.end();
    return;
  }

  const reader = fetchResponse.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    res.write(value);
  }
  res.end();
}

export default async function (req, res) {
  try {
    const request = nodeRequestToFetchRequest(req);
    const response = await handler.fetch(request, process.env, {});
    await sendFetchResponse(response, res);
  } catch (error) {
    console.error("[vercel-adapter]", error);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("Internal Server Error");
  }
}
