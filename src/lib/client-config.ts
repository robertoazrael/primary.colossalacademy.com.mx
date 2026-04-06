export type ClientConfig = {
  client_slug: string;
  is_active?: boolean;
  memory_web: string;
  memory_whats: string;
};

export async function getClientConfig(siteSlug: string): Promise<ClientConfig | null> {
  try {
    const baseUrl = import.meta.env.N8N_BASE_URL;
    const apiKey = import.meta.env.N8N_API_MASTER_KEY;

    if (!baseUrl || !apiKey) {
      console.error('Faltan N8N_BASE_URL o N8N_API_MASTER_KEY');
      return null;
    }

    const url = `${baseUrl}/webhook/client-config`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-mente-key': apiKey,
      },
      body: JSON.stringify({
        site_slug: siteSlug,
      }),
    });

    if (!res.ok) {
      const rawText = await res.text();
      console.error('getClientConfig status:', res.status);
      console.error('getClientConfig body:', rawText);
      return null;
    }

    const data = await res.json();

    if (!data?.ok) {
      console.error('getClientConfig invalid payload:', data);
      return null;
    }

    return {
      client_slug: data.client_slug,
      is_active: data.is_active,
      memory_web: data.memory_web,
      memory_whats: data.memory_whats,
    };
  } catch (error) {
    console.error('getClientConfig error:', error);
    return null;
  }
}