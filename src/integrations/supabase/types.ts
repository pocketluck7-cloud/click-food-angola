export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      ai_jobs_log: {
        Row: {
          affected_rows: number | null
          details: Json | null
          id: string
          job_name: string
          ran_at: string
          status: string
        }
        Insert: {
          affected_rows?: number | null
          details?: Json | null
          id?: string
          job_name: string
          ran_at?: string
          status: string
        }
        Update: {
          affected_rows?: number | null
          details?: Json | null
          id?: string
          job_name?: string
          ran_at?: string
          status?: string
        }
        Relationships: []
      }
      banners: {
        Row: {
          created_at: string
          id: string
          image_url: string
          is_active: boolean
          link: string | null
          sort_order: number
          title: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          image_url: string
          is_active?: boolean
          link?: string | null
          sort_order?: number
          title?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          image_url?: string
          is_active?: boolean
          link?: string | null
          sort_order?: number
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      commission_audit_log: {
        Row: {
          changed_by: string | null
          changed_by_name: string | null
          created_at: string
          id: string
          is_global: boolean
          new_pct: number
          notes: string | null
          old_pct: number | null
          restaurant_id: string | null
          restaurant_name: string | null
        }
        Insert: {
          changed_by?: string | null
          changed_by_name?: string | null
          created_at?: string
          id?: string
          is_global?: boolean
          new_pct: number
          notes?: string | null
          old_pct?: number | null
          restaurant_id?: string | null
          restaurant_name?: string | null
        }
        Update: {
          changed_by?: string | null
          changed_by_name?: string | null
          created_at?: string
          id?: string
          is_global?: boolean
          new_pct?: number
          notes?: string | null
          old_pct?: number | null
          restaurant_id?: string | null
          restaurant_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "commission_audit_log_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      commission_settings: {
        Row: {
          commission_pct: number
          created_at: string
          id: string
          restaurant_id: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          commission_pct?: number
          created_at?: string
          id?: string
          restaurant_id: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          commission_pct?: number
          created_at?: string
          id?: string
          restaurant_id?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "commission_settings_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: true
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      commissions: {
        Row: {
          admin_amount: number
          commission_pct: number
          created_at: string
          delivery_fee_pct: number
          id: string
          order_id: string
          total_amount: number
          vendor_amount: number
          vendor_id: string
        }
        Insert: {
          admin_amount: number
          commission_pct?: number
          created_at?: string
          delivery_fee_pct?: number
          id?: string
          order_id: string
          total_amount: number
          vendor_amount: number
          vendor_id: string
        }
        Update: {
          admin_amount?: number
          commission_pct?: number
          created_at?: string
          delivery_fee_pct?: number
          id?: string
          order_id?: string
          total_amount?: number
          vendor_amount?: number
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "commissions_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      complaints: {
        Row: {
          admin_response: string | null
          created_at: string | null
          description: string
          id: string
          order_id: string | null
          status: Database["public"]["Enums"]["complaint_status"]
          subject: string
          type: Database["public"]["Enums"]["complaint_type"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          admin_response?: string | null
          created_at?: string | null
          description: string
          id?: string
          order_id?: string | null
          status?: Database["public"]["Enums"]["complaint_status"]
          subject: string
          type: Database["public"]["Enums"]["complaint_type"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          admin_response?: string | null
          created_at?: string | null
          description?: string
          id?: string
          order_id?: string | null
          status?: Database["public"]["Enums"]["complaint_status"]
          subject?: string
          type?: Database["public"]["Enums"]["complaint_type"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "complaints_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "complaints_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      coupon_redemptions: {
        Row: {
          coupon_id: string
          created_at: string | null
          id: string
          order_id: string | null
          user_id: string
        }
        Insert: {
          coupon_id: string
          created_at?: string | null
          id?: string
          order_id?: string | null
          user_id: string
        }
        Update: {
          coupon_id?: string
          created_at?: string | null
          id?: string
          order_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "coupon_redemptions_coupon_id_fkey"
            columns: ["coupon_id"]
            isOneToOne: false
            referencedRelation: "coupons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "coupon_redemptions_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "coupon_redemptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      coupons: {
        Row: {
          code: string
          created_at: string | null
          description: string | null
          discount_type: Database["public"]["Enums"]["promo_type"]
          discount_value: number
          expires_at: string | null
          id: string
          is_active: boolean
          max_uses: number | null
          min_order: number | null
          owner_id: string | null
          used_count: number
        }
        Insert: {
          code: string
          created_at?: string | null
          description?: string | null
          discount_type?: Database["public"]["Enums"]["promo_type"]
          discount_value: number
          expires_at?: string | null
          id?: string
          is_active?: boolean
          max_uses?: number | null
          min_order?: number | null
          owner_id?: string | null
          used_count?: number
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string | null
          discount_type?: Database["public"]["Enums"]["promo_type"]
          discount_value?: number
          expires_at?: string | null
          id?: string
          is_active?: boolean
          max_uses?: number | null
          min_order?: number | null
          owner_id?: string | null
          used_count?: number
        }
        Relationships: []
      }
      debt_payment_audit_log: {
        Row: {
          action: string
          admin_id: string | null
          amount: number
          created_at: string
          id: string
          payment_id: string
          reason: string | null
          vendor_id: string
        }
        Insert: {
          action: string
          admin_id?: string | null
          amount: number
          created_at?: string
          id?: string
          payment_id: string
          reason?: string | null
          vendor_id: string
        }
        Update: {
          action?: string
          admin_id?: string | null
          amount?: number
          created_at?: string
          id?: string
          payment_id?: string
          reason?: string | null
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "debt_payment_audit_log_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "vendor_debt_payments"
            referencedColumns: ["id"]
          },
        ]
      }
      delivery_code_attempts: {
        Row: {
          attempts: number
          last_attempt_at: string
          order_id: string
        }
        Insert: {
          attempts?: number
          last_attempt_at?: string
          order_id: string
        }
        Update: {
          attempts?: number
          last_attempt_at?: string
          order_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "delivery_code_attempts_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: true
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      email_send_log: {
        Row: {
          created_at: string
          error_message: string | null
          id: string
          message_id: string | null
          metadata: Json | null
          recipient_email: string
          status: string
          template_name: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          recipient_email: string
          status: string
          template_name: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          recipient_email?: string
          status?: string
          template_name?: string
        }
        Relationships: []
      }
      email_send_state: {
        Row: {
          auth_email_ttl_minutes: number
          batch_size: number
          id: number
          retry_after_until: string | null
          send_delay_ms: number
          transactional_email_ttl_minutes: number
          updated_at: string
        }
        Insert: {
          auth_email_ttl_minutes?: number
          batch_size?: number
          id?: number
          retry_after_until?: string | null
          send_delay_ms?: number
          transactional_email_ttl_minutes?: number
          updated_at?: string
        }
        Update: {
          auth_email_ttl_minutes?: number
          batch_size?: number
          id?: number
          retry_after_until?: string | null
          send_delay_ms?: number
          transactional_email_ttl_minutes?: number
          updated_at?: string
        }
        Relationships: []
      }
      email_unsubscribe_tokens: {
        Row: {
          created_at: string
          email: string
          id: string
          token: string
          used_at: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          token: string
          used_at?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          token?: string
          used_at?: string | null
        }
        Relationships: []
      }
      favorites: {
        Row: {
          created_at: string | null
          id: string
          restaurant_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          restaurant_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          restaurant_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "favorites_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      fcm_tokens: {
        Row: {
          created_at: string
          device_info: string | null
          id: string
          token: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          device_info?: string | null
          id?: string
          token: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          device_info?: string | null
          id?: string
          token?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      fraud_flags: {
        Row: {
          created_at: string
          id: string
          metadata: Json | null
          order_id: string | null
          reason: string
          resolved: boolean
          severity: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          metadata?: Json | null
          order_id?: string | null
          reason: string
          resolved?: boolean
          severity?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          metadata?: Json | null
          order_id?: string | null
          reason?: string
          resolved?: boolean
          severity?: string
          user_id?: string | null
        }
        Relationships: []
      }
      loyalty_points: {
        Row: {
          created_at: string | null
          id: string
          order_id: string | null
          points: number
          reason: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          order_id?: string | null
          points?: number
          reason?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          order_id?: string | null
          points?: number
          reason?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "loyalty_points_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "loyalty_points_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      menu_items: {
        Row: {
          category: string | null
          combo_items: Json | null
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          is_available: boolean | null
          is_combo: boolean | null
          is_popular: boolean | null
          name: string
          original_price: number | null
          price: number
          restaurant_id: string
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          combo_items?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          is_available?: boolean | null
          is_combo?: boolean | null
          is_popular?: boolean | null
          name: string
          original_price?: number | null
          price: number
          restaurant_id: string
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          combo_items?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          is_available?: boolean | null
          is_combo?: boolean | null
          is_popular?: boolean | null
          name?: string
          original_price?: number | null
          price?: number
          restaurant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "menu_items_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          attachment_url: string | null
          body: string
          created_at: string | null
          id: string
          order_id: string
          sender_id: string
        }
        Insert: {
          attachment_url?: string | null
          body: string
          created_at?: string | null
          id?: string
          order_id: string
          sender_id: string
        }
        Update: {
          attachment_url?: string | null
          body?: string
          created_at?: string | null
          id?: string
          order_id?: string
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          body: string | null
          created_at: string | null
          id: string
          is_read: boolean
          link: string | null
          title: string
          type: Database["public"]["Enums"]["notification_type"]
          user_id: string
        }
        Insert: {
          body?: string | null
          created_at?: string | null
          id?: string
          is_read?: boolean
          link?: string | null
          title: string
          type?: Database["public"]["Enums"]["notification_type"]
          user_id: string
        }
        Update: {
          body?: string | null
          created_at?: string | null
          id?: string
          is_read?: boolean
          link?: string | null
          title?: string
          type?: Database["public"]["Enums"]["notification_type"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          created_at: string | null
          id: string
          menu_item_id: string | null
          name: string
          order_id: string
          price: number
          quantity: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          menu_item_id?: string | null
          name: string
          order_id: string
          price: number
          quantity?: number
        }
        Update: {
          created_at?: string | null
          id?: string
          menu_item_id?: string | null
          name?: string
          order_id?: string
          price?: number
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_menu_item_id_fkey"
            columns: ["menu_item_id"]
            isOneToOne: false
            referencedRelation: "menu_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          accepted_deadline: string | null
          auto_cancelled: boolean
          coupon_id: string | null
          created_at: string | null
          customer_id: string
          delivery_address: string
          delivery_attempts: number
          delivery_bairro: string | null
          delivery_city: string | null
          delivery_code: string | null
          delivery_confirmed_by: string | null
          delivery_fee: number
          delivery_phone: string | null
          discount: number
          id: string
          notes: string | null
          payment_method: Database["public"]["Enums"]["payment_method"]
          payment_proof_url: string | null
          payment_status: Database["public"]["Enums"]["payment_status"]
          restaurant_id: string
          status: Database["public"]["Enums"]["order_status"]
          subtotal: number
          total: number
          updated_at: string | null
        }
        Insert: {
          accepted_deadline?: string | null
          auto_cancelled?: boolean
          coupon_id?: string | null
          created_at?: string | null
          customer_id: string
          delivery_address: string
          delivery_attempts?: number
          delivery_bairro?: string | null
          delivery_city?: string | null
          delivery_code?: string | null
          delivery_confirmed_by?: string | null
          delivery_fee?: number
          delivery_phone?: string | null
          discount?: number
          id?: string
          notes?: string | null
          payment_method?: Database["public"]["Enums"]["payment_method"]
          payment_proof_url?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"]
          restaurant_id: string
          status?: Database["public"]["Enums"]["order_status"]
          subtotal: number
          total: number
          updated_at?: string | null
        }
        Update: {
          accepted_deadline?: string | null
          auto_cancelled?: boolean
          coupon_id?: string | null
          created_at?: string | null
          customer_id?: string
          delivery_address?: string
          delivery_attempts?: number
          delivery_bairro?: string | null
          delivery_city?: string | null
          delivery_code?: string | null
          delivery_confirmed_by?: string | null
          delivery_fee?: number
          delivery_phone?: string | null
          discount?: number
          id?: string
          notes?: string | null
          payment_method?: Database["public"]["Enums"]["payment_method"]
          payment_proof_url?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"]
          restaurant_id?: string
          status?: Database["public"]["Enums"]["order_status"]
          subtotal?: number
          total?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_coupon_id_fkey"
            columns: ["coupon_id"]
            isOneToOne: false
            referencedRelation: "coupons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_accounts: {
        Row: {
          account_holder: string | null
          account_number: string | null
          bank_name: string | null
          created_at: string
          iban: string | null
          id: string
          is_active: boolean
          label: string
          notes: string | null
          reference_hint: string | null
          sort_order: number
          updated_at: string
        }
        Insert: {
          account_holder?: string | null
          account_number?: string | null
          bank_name?: string | null
          created_at?: string
          iban?: string | null
          id?: string
          is_active?: boolean
          label: string
          notes?: string | null
          reference_hint?: string | null
          sort_order?: number
          updated_at?: string
        }
        Update: {
          account_holder?: string | null
          account_number?: string | null
          bank_name?: string | null
          created_at?: string
          iban?: string | null
          id?: string
          is_active?: boolean
          label?: string
          notes?: string | null
          reference_hint?: string | null
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          method: Database["public"]["Enums"]["payment_method"]
          order_id: string
          proof_url: string | null
          status: Database["public"]["Enums"]["payment_status"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          method: Database["public"]["Enums"]["payment_method"]
          order_id: string
          proof_url?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          method?: Database["public"]["Enums"]["payment_method"]
          order_id?: string
          proof_url?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_settings: {
        Row: {
          comissao_plataforma: number | null
          created_at: string | null
          grace_days: number
          id: string
          max_lojas: number | null
          max_pedidos_dia: number | null
          max_produtos_por_loja: number | null
          payment_due_day: number
          taxa_entrega_default: number
          updated_at: string | null
        }
        Insert: {
          comissao_plataforma?: number | null
          created_at?: string | null
          grace_days?: number
          id?: string
          max_lojas?: number | null
          max_pedidos_dia?: number | null
          max_produtos_por_loja?: number | null
          payment_due_day?: number
          taxa_entrega_default?: number
          updated_at?: string | null
        }
        Update: {
          comissao_plataforma?: number | null
          created_at?: string | null
          grace_days?: number
          id?: string
          max_lojas?: number | null
          max_pedidos_dia?: number | null
          max_produtos_por_loja?: number | null
          payment_due_day?: number
          taxa_entrega_default?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          address: string | null
          avatar_url: string | null
          bairro: string | null
          city: string | null
          created_at: string
          email: string | null
          id: string
          is_online: boolean
          is_suspended: boolean
          name: string | null
          phone: string | null
          suspended_at: string | null
          suspended_reason: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          bairro?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          id: string
          is_online?: boolean
          is_suspended?: boolean
          name?: string | null
          phone?: string | null
          suspended_at?: string | null
          suspended_reason?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          bairro?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_online?: boolean
          is_suspended?: boolean
          name?: string | null
          phone?: string | null
          suspended_at?: string | null
          suspended_reason?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      promotions: {
        Row: {
          created_at: string | null
          description: string | null
          discount_type: Database["public"]["Enums"]["promo_type"]
          discount_value: number | null
          ends_at: string | null
          id: string
          image_url: string | null
          is_active: boolean
          restaurant_id: string | null
          starts_at: string | null
          title: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          discount_type?: Database["public"]["Enums"]["promo_type"]
          discount_value?: number | null
          ends_at?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          restaurant_id?: string | null
          starts_at?: string | null
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          discount_type?: Database["public"]["Enums"]["promo_type"]
          discount_value?: number | null
          ends_at?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          restaurant_id?: string | null
          starts_at?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "promotions_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      push_subscriptions: {
        Row: {
          auth: string
          created_at: string
          endpoint: string
          id: string
          last_used_at: string
          p256dh: string
          user_agent: string | null
          user_id: string
        }
        Insert: {
          auth: string
          created_at?: string
          endpoint: string
          id?: string
          last_used_at?: string
          p256dh: string
          user_agent?: string | null
          user_id: string
        }
        Update: {
          auth?: string
          created_at?: string
          endpoint?: string
          id?: string
          last_used_at?: string
          p256dh?: string
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      referral_codes: {
        Row: {
          code: string
          created_at: string
          user_id: string
        }
        Insert: {
          code: string
          created_at?: string
          user_id: string
        }
        Update: {
          code?: string
          created_at?: string
          user_id?: string
        }
        Relationships: []
      }
      referrals: {
        Row: {
          code: string
          coupon_code: string | null
          created_at: string
          id: string
          referred_id: string
          referrer_id: string
          rewarded_at: string | null
          status: string
        }
        Insert: {
          code: string
          coupon_code?: string | null
          created_at?: string
          id?: string
          referred_id: string
          referrer_id: string
          rewarded_at?: string | null
          status?: string
        }
        Update: {
          code?: string
          coupon_code?: string | null
          created_at?: string
          id?: string
          referred_id?: string
          referrer_id?: string
          rewarded_at?: string | null
          status?: string
        }
        Relationships: []
      }
      restaurant_followers: {
        Row: {
          created_at: string
          id: string
          restaurant_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          restaurant_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          restaurant_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "restaurant_followers_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      restaurant_videos: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          restaurant_id: string
          sort_order: number
          thumbnail_url: string | null
          title: string | null
          updated_at: string
          video_url: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          restaurant_id: string
          sort_order?: number
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string
          video_url: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          restaurant_id?: string
          sort_order?: number
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string
          video_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "restaurant_videos_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      restaurants: {
        Row: {
          accepts_transfer: boolean
          address: string | null
          auto_cancelled_count: number
          auto_closed: boolean
          bairro: string | null
          business_hours: Json | null
          cash_on_delivery: boolean
          category: string | null
          city: string | null
          cover_url: string | null
          created_at: string | null
          delivery_fee: number | null
          delivery_mode: string
          delivery_time_min: number | null
          description: string | null
          facebook: string | null
          flagged: boolean | null
          id: string
          ignored_orders_count: number
          image_url: string | null
          instagram: string | null
          is_active: boolean | null
          is_new: boolean | null
          is_open: boolean | null
          is_suspended: boolean
          last_ranked_at: string | null
          min_order: number | null
          name: string
          notice: string | null
          notification_prefs: Json | null
          owner_id: string
          phone: string | null
          prep_time: string | null
          promo_label: string | null
          ranking_score: number | null
          rating: number | null
          reviews: number | null
          slug: string | null
          suspended_at: string | null
          suspended_reason: string | null
          updated_at: string | null
          vacation_until: string | null
          whatsapp: string | null
        }
        Insert: {
          accepts_transfer?: boolean
          address?: string | null
          auto_cancelled_count?: number
          auto_closed?: boolean
          bairro?: string | null
          business_hours?: Json | null
          cash_on_delivery?: boolean
          category?: string | null
          city?: string | null
          cover_url?: string | null
          created_at?: string | null
          delivery_fee?: number | null
          delivery_mode?: string
          delivery_time_min?: number | null
          description?: string | null
          facebook?: string | null
          flagged?: boolean | null
          id?: string
          ignored_orders_count?: number
          image_url?: string | null
          instagram?: string | null
          is_active?: boolean | null
          is_new?: boolean | null
          is_open?: boolean | null
          is_suspended?: boolean
          last_ranked_at?: string | null
          min_order?: number | null
          name: string
          notice?: string | null
          notification_prefs?: Json | null
          owner_id: string
          phone?: string | null
          prep_time?: string | null
          promo_label?: string | null
          ranking_score?: number | null
          rating?: number | null
          reviews?: number | null
          slug?: string | null
          suspended_at?: string | null
          suspended_reason?: string | null
          updated_at?: string | null
          vacation_until?: string | null
          whatsapp?: string | null
        }
        Update: {
          accepts_transfer?: boolean
          address?: string | null
          auto_cancelled_count?: number
          auto_closed?: boolean
          bairro?: string | null
          business_hours?: Json | null
          cash_on_delivery?: boolean
          category?: string | null
          city?: string | null
          cover_url?: string | null
          created_at?: string | null
          delivery_fee?: number | null
          delivery_mode?: string
          delivery_time_min?: number | null
          description?: string | null
          facebook?: string | null
          flagged?: boolean | null
          id?: string
          ignored_orders_count?: number
          image_url?: string | null
          instagram?: string | null
          is_active?: boolean | null
          is_new?: boolean | null
          is_open?: boolean | null
          is_suspended?: boolean
          last_ranked_at?: string | null
          min_order?: number | null
          name?: string
          notice?: string | null
          notification_prefs?: Json | null
          owner_id?: string
          phone?: string | null
          prep_time?: string | null
          promo_label?: string | null
          ranking_score?: number | null
          rating?: number | null
          reviews?: number | null
          slug?: string | null
          suspended_at?: string | null
          suspended_reason?: string | null
          updated_at?: string | null
          vacation_until?: string | null
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "restaurants_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          comment: string | null
          created_at: string
          id: string
          order_id: string | null
          rating: number
          restaurant_id: string | null
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          comment?: string | null
          created_at?: string
          id?: string
          order_id?: string | null
          rating: number
          restaurant_id?: string | null
          type?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          comment?: string | null
          created_at?: string
          id?: string
          order_id?: string | null
          rating?: number
          restaurant_id?: string | null
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      seller_applications: {
        Row: {
          accepted_terms: boolean
          address: string | null
          admin_notes: string | null
          bairro: string
          business_category: string
          business_name: string
          city: string
          created_at: string
          email: string | null
          full_name: string
          id: string
          id_back_url: string
          id_front_url: string
          phone: string
          seller_type: Database["public"]["Enums"]["seller_type"]
          status: Database["public"]["Enums"]["application_status"]
          storefront_url: string
          updated_at: string
          user_id: string
        }
        Insert: {
          accepted_terms?: boolean
          address?: string | null
          admin_notes?: string | null
          bairro: string
          business_category: string
          business_name: string
          city: string
          created_at?: string
          email?: string | null
          full_name: string
          id?: string
          id_back_url: string
          id_front_url: string
          phone: string
          seller_type: Database["public"]["Enums"]["seller_type"]
          status?: Database["public"]["Enums"]["application_status"]
          storefront_url: string
          updated_at?: string
          user_id: string
        }
        Update: {
          accepted_terms?: boolean
          address?: string | null
          admin_notes?: string | null
          bairro?: string
          business_category?: string
          business_name?: string
          city?: string
          created_at?: string
          email?: string | null
          full_name?: string
          id?: string
          id_back_url?: string
          id_front_url?: string
          phone?: string
          seller_type?: Database["public"]["Enums"]["seller_type"]
          status?: Database["public"]["Enums"]["application_status"]
          storefront_url?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      store_penalties: {
        Row: {
          acknowledged_at: string | null
          created_at: string
          id: string
          reason: string
          restaurant_id: string
        }
        Insert: {
          acknowledged_at?: string | null
          created_at?: string
          id?: string
          reason?: string
          restaurant_id: string
        }
        Update: {
          acknowledged_at?: string | null
          created_at?: string
          id?: string
          reason?: string
          restaurant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "store_penalties_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      store_views: {
        Row: {
          id: string
          restaurant_id: string
          session_id: string | null
          user_id: string | null
          viewed_at: string
        }
        Insert: {
          id?: string
          restaurant_id: string
          session_id?: string | null
          user_id?: string | null
          viewed_at?: string
        }
        Update: {
          id?: string
          restaurant_id?: string
          session_id?: string | null
          user_id?: string | null
          viewed_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "store_views_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_plans: {
        Row: {
          audience: string
          created_at: string
          features: Json
          id: string
          is_active: boolean
          name: string
          plan: Database["public"]["Enums"]["subscription_plan"]
          price_monthly: number
          sort_order: number
        }
        Insert: {
          audience: string
          created_at?: string
          features?: Json
          id?: string
          is_active?: boolean
          name: string
          plan: Database["public"]["Enums"]["subscription_plan"]
          price_monthly?: number
          sort_order?: number
        }
        Update: {
          audience?: string
          created_at?: string
          features?: Json
          id?: string
          is_active?: boolean
          name?: string
          plan?: Database["public"]["Enums"]["subscription_plan"]
          price_monthly?: number
          sort_order?: number
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          audience: string
          cancelled_at: string | null
          created_at: string
          current_period_end: string | null
          id: string
          payment_proof_url: string | null
          plan: Database["public"]["Enums"]["subscription_plan"]
          started_at: string
          status: Database["public"]["Enums"]["subscription_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          audience: string
          cancelled_at?: string | null
          created_at?: string
          current_period_end?: string | null
          id?: string
          payment_proof_url?: string | null
          plan: Database["public"]["Enums"]["subscription_plan"]
          started_at?: string
          status?: Database["public"]["Enums"]["subscription_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          audience?: string
          cancelled_at?: string | null
          created_at?: string
          current_period_end?: string | null
          id?: string
          payment_proof_url?: string | null
          plan?: Database["public"]["Enums"]["subscription_plan"]
          started_at?: string
          status?: Database["public"]["Enums"]["subscription_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      support_messages: {
        Row: {
          body: string
          created_at: string | null
          id: string
          is_admin: boolean | null
          sender_id: string | null
          thread_id: string
        }
        Insert: {
          body: string
          created_at?: string | null
          id?: string
          is_admin?: boolean | null
          sender_id?: string | null
          thread_id: string
        }
        Update: {
          body?: string
          created_at?: string | null
          id?: string
          is_admin?: boolean | null
          sender_id?: string | null
          thread_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "support_messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "support_messages_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "support_threads"
            referencedColumns: ["id"]
          },
        ]
      }
      support_threads: {
        Row: {
          created_at: string | null
          id: string
          status: string
          subject: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          status?: string
          subject?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          status?: string
          subject?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "support_threads_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      suppressed_emails: {
        Row: {
          created_at: string
          email: string
          id: string
          metadata: Json | null
          reason: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          metadata?: Json | null
          reason: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          metadata?: Json | null
          reason?: string
        }
        Relationships: []
      }
      suspension_audit: {
        Row: {
          action: string
          admin_id: string | null
          created_at: string
          id: string
          reason: string | null
          target_id: string
          target_type: string
        }
        Insert: {
          action: string
          admin_id?: string | null
          created_at?: string
          id?: string
          reason?: string | null
          target_id: string
          target_type: string
        }
        Update: {
          action?: string
          admin_id?: string | null
          created_at?: string
          id?: string
          reason?: string | null
          target_id?: string
          target_type?: string
        }
        Relationships: []
      }
      system_audit_log: {
        Row: {
          category: string
          context: Json | null
          created_at: string
          error_code: string | null
          id: string
          message: string | null
          order_id: string | null
          rpc_name: string | null
          user_id: string | null
        }
        Insert: {
          category: string
          context?: Json | null
          created_at?: string
          error_code?: string | null
          id?: string
          message?: string | null
          order_id?: string | null
          rpc_name?: string | null
          user_id?: string | null
        }
        Update: {
          category?: string
          context?: Json | null
          created_at?: string
          error_code?: string | null
          id?: string
          message?: string | null
          order_id?: string | null
          rpc_name?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_behavior: {
        Row: {
          created_at: string
          event_type: string
          id: string
          menu_item_id: string | null
          metadata: Json | null
          query: string | null
          restaurant_id: string | null
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          event_type: string
          id?: string
          menu_item_id?: string | null
          metadata?: Json | null
          query?: string | null
          restaurant_id?: string | null
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          event_type?: string
          id?: string
          menu_item_id?: string | null
          metadata?: Json | null
          query?: string | null
          restaurant_id?: string | null
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      vendor_cash_debt: {
        Row: {
          commission_amt: number
          commission_pct: number
          created_at: string
          due_date: string | null
          id: string
          in_review_payment_id: string | null
          order_id: string
          order_total: number
          paid: boolean
          paid_at: string | null
          status: string
          vendor_id: string
        }
        Insert: {
          commission_amt: number
          commission_pct?: number
          created_at?: string
          due_date?: string | null
          id?: string
          in_review_payment_id?: string | null
          order_id: string
          order_total: number
          paid?: boolean
          paid_at?: string | null
          status?: string
          vendor_id: string
        }
        Update: {
          commission_amt?: number
          commission_pct?: number
          created_at?: string
          due_date?: string | null
          id?: string
          in_review_payment_id?: string | null
          order_id?: string
          order_total?: number
          paid?: boolean
          paid_at?: string | null
          status?: string
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_cash_debt_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: true
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_debt_payment_links: {
        Row: {
          created_at: string
          debt_id: string
          id: string
          payment_id: string
        }
        Insert: {
          created_at?: string
          debt_id: string
          id?: string
          payment_id: string
        }
        Update: {
          created_at?: string
          debt_id?: string
          id?: string
          payment_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_debt_payment_links_debt_id_fkey"
            columns: ["debt_id"]
            isOneToOne: true
            referencedRelation: "vendor_cash_debt"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendor_debt_payment_links_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "vendor_debt_payments"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_debt_payments: {
        Row: {
          amount: number
          created_at: string
          id: string
          note: string | null
          proof_url: string | null
          rejection_reason: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: string
          vendor_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          note?: string | null
          proof_url?: string | null
          rejection_reason?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          vendor_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          note?: string | null
          proof_url?: string | null
          rejection_reason?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          vendor_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      _cancel_order_timeout_impl: {
        Args: { p_order_id: string }
        Returns: Json
      }
      accept_order: { Args: { p_order_id: string }; Returns: Json }
      admin_get_profiles: {
        Args: never
        Returns: {
          address: string | null
          avatar_url: string | null
          bairro: string | null
          city: string | null
          created_at: string
          email: string | null
          id: string
          is_online: boolean
          is_suspended: boolean
          name: string | null
          phone: string | null
          suspended_at: string | null
          suspended_reason: string | null
          updated_at: string
        }[]
        SetofOptions: {
          from: "*"
          to: "profiles"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      admin_set_restaurant_suspension: {
        Args: { p_reason?: string; p_restaurant_id: string; p_suspend: boolean }
        Returns: Json
      }
      admin_set_user_suspension: {
        Args: { p_reason?: string; p_suspend: boolean; p_user_id: string }
        Returns: Json
      }
      admin_stats_overview: { Args: never; Returns: Json }
      admin_wipe_financials: { Args: { p_scope?: string }; Returns: Json }
      auto_update_store_open_status: { Args: never; Returns: undefined }
      cancel_order_timeout: { Args: { p_order_id: string }; Returns: Json }
      confirm_delivery_with_code: {
        Args: { p_code: string; p_order_id: string }
        Returns: Json
      }
      delete_email: {
        Args: { message_id: number; queue_name: string }
        Returns: boolean
      }
      detect_fraud: { Args: never; Returns: number }
      detect_inactive_users: { Args: never; Returns: number }
      enqueue_email: {
        Args: { payload: Json; queue_name: string }
        Returns: number
      }
      find_active_coupon: {
        Args: { p_code: string }
        Returns: {
          code: string
          created_at: string | null
          description: string | null
          discount_type: Database["public"]["Enums"]["promo_type"]
          discount_value: number
          expires_at: string | null
          id: string
          is_active: boolean
          max_uses: number | null
          min_order: number | null
          owner_id: string | null
          used_count: number
        }
        SetofOptions: {
          from: "*"
          to: "coupons"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      generate_restaurant_slug: {
        Args: { p_id: string; p_name: string }
        Returns: string
      }
      get_my_delivery_code: { Args: { p_order_id: string }; Returns: string }
      get_or_create_referral_code: {
        Args: { p_user_id?: string }
        Returns: string
      }
      get_vendor_debt_summary: { Args: { p_vendor_id?: string }; Returns: Json }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_super_admin: { Args: never; Returns: boolean }
      log_system_event: {
        Args: {
          p_category: string
          p_context?: Json
          p_error_code?: string
          p_message?: string
          p_order_id?: string
          p_rpc_name?: string
        }
        Returns: string
      }
      mark_overdue_debts: { Args: never; Returns: number }
      move_to_dlq: {
        Args: {
          dlq_name: string
          message_id: number
          payload: Json
          source_queue: string
        }
        Returns: number
      }
      place_order: { Args: { p_payload: Json }; Returns: string }
      process_expired_orders: { Args: never; Returns: undefined }
      process_referral_reward: {
        Args: { p_referred_id: string }
        Returns: boolean
      }
      read_email_batch: {
        Args: { batch_size: number; queue_name: string; vt: number }
        Returns: {
          message: Json
          msg_id: number
          read_ct: number
        }[]
      }
      redeem_loyalty_reward: {
        Args: { p_points: number; p_reason: string }
        Returns: string
      }
      refresh_restaurant_rankings: { Args: never; Returns: number }
      register_referral: { Args: { p_code: string }; Returns: boolean }
      reopen_restaurant: { Args: { p_restaurant_id: string }; Returns: Json }
      send_smart_coupons: { Args: never; Returns: number }
      subscribe: {
        Args: {
          p_plan: Database["public"]["Enums"]["subscription_plan"]
          p_proof_url?: string
        }
        Returns: string
      }
    }
    Enums: {
      app_role: "customer" | "seller" | "courier" | "admin"
      application_status: "pending" | "approved" | "rejected"
      complaint_status: "pending" | "investigating" | "resolved" | "rejected"
      complaint_type: "food" | "courier" | "app" | "store"
      notification_type: "promo" | "order" | "system" | "news" | "follow"
      order_status:
        | "pending"
        | "accepted"
        | "preparing"
        | "ready"
        | "delivering"
        | "delivered"
        | "cancelled"
        | "confirmed"
        | "awaiting_delivery"
        | "awaiting_code"
      payment_method: "cash" | "transfer" | "multicaixa"
      payment_status: "pending" | "pending_review" | "completed" | "refunded"
      promo_type: "percentage" | "fixed" | "free_delivery" | "combo"
      seller_type:
        | "loja_formal"
        | "vendedor_rua"
        | "cozinha_caseira"
        | "pequeno_comercio"
      subscription_plan: "free" | "pro" | "premium" | "client_premium"
      subscription_status:
        | "active"
        | "pending_payment"
        | "cancelled"
        | "expired"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["customer", "seller", "courier", "admin"],
      application_status: ["pending", "approved", "rejected"],
      complaint_status: ["pending", "investigating", "resolved", "rejected"],
      complaint_type: ["food", "courier", "app", "store"],
      notification_type: ["promo", "order", "system", "news", "follow"],
      order_status: [
        "pending",
        "accepted",
        "preparing",
        "ready",
        "delivering",
        "delivered",
        "cancelled",
        "confirmed",
        "awaiting_delivery",
        "awaiting_code",
      ],
      payment_method: ["cash", "transfer", "multicaixa"],
      payment_status: ["pending", "pending_review", "completed", "refunded"],
      promo_type: ["percentage", "fixed", "free_delivery", "combo"],
      seller_type: [
        "loja_formal",
        "vendedor_rua",
        "cozinha_caseira",
        "pequeno_comercio",
      ],
      subscription_plan: ["free", "pro", "premium", "client_premium"],
      subscription_status: [
        "active",
        "pending_payment",
        "cancelled",
        "expired",
      ],
    },
  },
} as const
