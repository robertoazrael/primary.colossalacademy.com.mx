import { createServerClient, type CookieOptions } from '@supabase/ssr';

type AstroCookiesLike = {
  get: (name: string) => { value: string } | undefined;
  set: (name: string, value: string, options?: CookieOptions) => void;
  delete: (name: string, options?: CookieOptions) => void;
};

export function createSupabaseServerClient(cookies: AstroCookiesLike) {
  return createServerClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookies.set(name, value, options);
        },
        remove(name: string, options: CookieOptions) {
          cookies.delete(name, options);
        },
      },
    }
  );
}