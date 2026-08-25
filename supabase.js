// Guarda los envíos de formularios en Supabase (tabla "leads"), en paralelo al correo vía FormSubmit.
const SUPABASE_URL = "https://feyuhevjtdwoxxvihcgt.supabase.co";
const SUPABASE_KEY = "sb_publishable_-UK08OzUrfR5wSvP5kdHbQ_YGTE0ACr";

function saveLead(data) {
  fetch(SUPABASE_URL + "/rest/v1/leads", {
    method: "POST",
    keepalive: true,
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY,
      "Prefer": "return=minimal"
    },
    body: JSON.stringify(data)
  }).catch(function (err) {
    console.error("No se pudo guardar el lead en Supabase:", err);
  });
}
