export const prerender = false;

import type { APIRoute } from 'astro';
import { createSupabaseServerClient } from '../../lib/supabase/server';
import { createClient } from '@supabase/supabase-js';
import { panelConfig } from '../../config/panel';

const adminSupabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_SERVICE_ROLE_KEY
);

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    let email = '';
    let password = '';

    if (contentType.includes('application/json')) {
      const body = await request.json();
      email = String(body.email || '').trim().toLowerCase();
      password = String(body.password || '');
    } else {
      const form = await request.formData();
      email = String(form.get('email') || '').trim().toLowerCase();
      password = String(form.get('password') || '');
    }

    if (!email || !password) {
      return new Response(
        JSON.stringify({ ok: false, message: 'Email y password son obligatorios' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createSupabaseServerClient(cookies);

    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError || !authData.user) {
      return new Response(
        JSON.stringify({ ok: false, message: 'Credenciales inválidas' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const userId = authData.user.id;

    const { data: membership, error: membershipError } = await adminSupabase
      .from('site_memberships')
      .select('*')
      .eq('user_id', userId)
      .eq('site_slug', panelConfig.siteSlug)
      .eq('is_active', true)
      .maybeSingle();

    if (membershipError) {
      return new Response(
        JSON.stringify({ ok: false, message: 'Error validando membresía' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!membership) {
      await supabase.auth.signOut();

      return new Response(
        JSON.stringify({ ok: false, message: 'Sin acceso a este sitio' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        ok: true,
        message: 'Login correcto',
        user: {
          id: authData.user.id,
          email: authData.user.email,
        },
        membership: {
          site_slug: membership.site_slug,
          role: membership.role,
        },
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('login error:', error);

    return new Response(
      JSON.stringify({ ok: false, message: 'Error interno en login' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};