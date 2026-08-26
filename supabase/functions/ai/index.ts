import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "content-type": "application/json" } });

const DEFAULT_MODEL = "claude-sonnet-4-5-20250929";

async function anthropicKey(): Promise<string> {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
  const { data, error } = await supabase.rpc("get_anthropic_key");
  if (error || !data) throw new Error("AI key not configured");
  return data as string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "POST only" }, 405);

  let payload: any;
  try { payload = await req.json(); } catch { return json({ error: "invalid JSON" }, 400); }

  let key: string;
  try { key = await anthropicKey(); } catch { return json({ error: "AI key not configured" }, 500); }

  if (payload.action === "models") {
    const r = await fetch("https://api.anthropic.com/v1/models", {
      headers: { "x-api-key": key, "anthropic-version": "2023-06-01" },
    });
    return json(await r.json(), r.status);
  }

  const body: any = {
    model: payload.model || DEFAULT_MODEL,
    max_tokens: payload.max_tokens || 1500,
    messages: payload.messages || [{ role: "user", content: payload.prompt || "Hello" }],
  };
  if (payload.system) body.system = payload.system;

  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await r.json();
  if (!r.ok) return json({ error: data }, r.status);
  const text = (data.content || []).filter((b: any) => b.type === "text").map((b: any) => b.text).join("");
  return json({ text, model: data.model, usage: data.usage });
});
