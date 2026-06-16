// Vercel Serverless Function entry — proxies all /api/* requests to the
// bundled Express app produced by `@workspace/api-server` (esbuild → app.mjs).
// Express 5 instances are valid (req, res) handlers, so we can export it directly.
import app from "../artifacts/api-server/dist/app.mjs";

export const config = {
  runtime: "nodejs",
};

export default app;
