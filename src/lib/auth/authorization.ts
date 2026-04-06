import { createClient } from '@supabase/supabase-js';

const adminSupabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function getActiveMembership(params: {
  userId: string;
  siteSlug: string;
}) {
  const { userId, siteSlug } = params;

  const { data, error } = await adminSupabase
    .from('site_memberships')
    .select('*')
    .eq('user_id', userId)
    .eq('site_slug', siteSlug)
    .eq('is_active', true)
    .maybeSingle();

  if (error) {
    console.error('getActiveMembership error:', error);
    return null;
  }

  return data;
}