import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function getPanelMessages(params: {
  tableWeb: string;
  tableWhats: string;
}) {
  const { tableWeb, tableWhats } = params;

  const [resWeb, resWhats] = await Promise.all([
    supabaseAdmin
      .from(tableWeb)
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50),

    supabaseAdmin
      .from(tableWhats)
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50)
  ]);

  return {
    webMessages: resWeb.data || [],
    whatsMessages: resWhats.data || [],
    webError: resWeb.error || null,
    whatsError: resWhats.error || null,
  };
}