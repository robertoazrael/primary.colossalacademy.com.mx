export const prerender = false;

import { panelConfig } from '../../config/panel';

import type { APIRoute } from 'astro';
import { createSupabaseServerClient } from '../../lib/supabase/server';

export const POST: APIRoute = async ({ cookies }) => {
  try {
    const supabase = createSupabaseServerClient(cookies);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return new Response(
        JSON.stringify({ ok: false, message: 'No autenticado' }),
        { status: 401 }
      );
    }

    const baseUrl = import.meta.env.N8N_BASE_URL;
    if (!baseUrl) {
      return new Response(JSON.stringify({
        ok: false,
        message: 'N8N_BASE_URL no configurado'
        }), { status: 500 });
      }
    
    const apiKey = import.meta.env.N8N_API_MASTER_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({
        ok: false,
        message: 'N8N_API_MASTER_KEY no configurado'
      }), { status: 500 });
    }      

    const webhookUrl = `${baseUrl}/webhook/${panelConfig.siteSlug}-${panelConfig.reportWebhookSuffix}`;

      // 🔒 aquí va la llamada real a n8n, ya segura
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-mente-key': apiKey
      },
    body: JSON.stringify({
      source: `panel-metricas-${panelConfig.siteSlug}`,
      requested_at: new Date().toISOString()
      })
    });

    const rawText = await res.text();

    if (!res.ok) {
    console.error('send-report webhook status:', res.status);
    console.error('send-report webhook body:', rawText);

    return new Response(
        JSON.stringify({
        ok: false,
        message: 'Error al enviar reporte',
        webhook_status: res.status,
        webhook_body: rawText
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
    }


return new Response(
  JSON.stringify({
    ok: true,
    message: 'Reporte enviado',
    webhook_status: res.status
  }),
  { status: 200, headers: { 'Content-Type': 'application/json' } }
);


  } catch (error) {
    console.error('send-report error:', error);

    return new Response(
      JSON.stringify({ ok: false, message: 'Error interno' }),
      { status: 500 }
    );
  }
};