export const prerender = false;

import type { APIRoute } from 'astro';
import { createSupabaseServerClient } from '../../lib/supabase/server';

export const POST: APIRoute = async ({ cookies }) => {
  try {
    const supabase = createSupabaseServerClient(cookies);
    await supabase.auth.signOut();

    return new Response(
      JSON.stringify({ ok: true, message: 'Logout correcto' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('logout error:', error);

    return new Response(
      JSON.stringify({ ok: false, message: 'Error interno en logout' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};