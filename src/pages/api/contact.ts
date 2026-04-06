export const prerender = false;

import type { APIRoute } from 'astro';
import { panelConfig } from '../../config/panel';

export const POST: APIRoute = async ({ request }) => {
  try {
    const baseUrl = import.meta.env.N8N_BASE_URL;
    const apiKey = import.meta.env.N8N_API_MASTER_KEY;

    if (!baseUrl) {
      return new Response(
        JSON.stringify({ ok: false, message: 'N8N_BASE_URL no configurado' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!apiKey) {
      return new Response(
        JSON.stringify({ ok: false, message: 'N8N_API_MASTER_KEY no configurado' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const webhookUrl = `${baseUrl}/webhook/${panelConfig.siteSlug}-contact`;

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-mente-key': apiKey,
      },
      body: JSON.stringify(body),
    });

    const rawText = await res.text();

    return new Response(rawText || JSON.stringify({ ok: res.ok }), {
      status: res.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('contact error:', error);

    return new Response(
      JSON.stringify({ ok: false, message: 'Error interno enviando contacto' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};