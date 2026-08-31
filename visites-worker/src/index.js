const ALLOWED_ORIGIN = "https://msdw.github.io";
const MAX_EVENTS = 2000;

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store",
  };
}

function response(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...corsHeaders() },
  });
}

export default {
  fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders() });
    if (request.method !== "GET" || !["/track", "/stats"].includes(url.pathname)) {
      return response({ error: "not_found" }, 404);
    }
    return env.VISITS.get(env.VISITS.idFromName("campaign")).fetch(request);
  },
};

export class Visits {
  constructor(state) {
    this.state = state;
  }

  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/track") {
      const slug = url.searchParams.get("slug") || "";
      if (!/^[a-z0-9][a-z0-9/-]{0,119}$/.test(slug)) return response({ error: "invalid_slug" }, 400);
      const events = (await this.state.storage.get("events")) || [];
      events.push({ slug, ts: Date.now() });
      await this.state.storage.put("events", events.slice(-MAX_EVENTS));
      return response({ ok: true });
    }

    const events = ((await this.state.storage.get("events")) || []).sort((a, b) => b.ts - a.ts);
    const compteurs = {};
    events.forEach((event) => { compteurs[event.slug] = (compteurs[event.slug] || 0) + 1; });
    return response({ compteurs, journal: events.slice(0, 20) });
  }
}
