// Données des 23 cibles de la campagne de prospection.
// Chaque cible : nom, type, slug (clé de suivi des visites), URL publique, code d'accès, téléphone.
var BASE_URL = "https://msdw.github.io/demos-prospection/";

var CIBLES = [
  // --- Menus (restaurants) ---
  { nom: "L'Amour des mets",        type: "Menu",         slug: "menus/amour-des-mets",        code: "AMOUR2026",               tel: "+33 9 83 72 94 00" },
  { nom: "Le Raffiné",              type: "Menu",         slug: "menus/le-raffine",            code: "RAFFINE2026",             tel: "+33 9 87 31 29 30" },
  { nom: "L'Arvigate",              type: "Menu",         slug: "menus/arvigate",              code: "ARVIGATE2026",            tel: "+33 2 40 94 94 94" },
  { nom: "Le Chantilly",            type: "Menu",         slug: "menus/le-chantilly",          code: "CHANTILLY2026",           tel: "+33 2 40 94 84 11" },

  // --- Artisans ---
  { nom: "AP Electricité",          type: "Artisan",      slug: "artisans/ap-electricite",     code: "APELECTRICITE26",         tel: "+33 6 75 65 07 91" },
  { nom: "K Thermique & Sanitaire", type: "Artisan",      slug: "artisans/k-thermique",        code: "KTHERMIQUE26",            tel: "+33 6 24 52 12 59" },
  { nom: "Teamelec",                type: "Artisan",      slug: "artisans/teamelec",           code: "TEAMELEC26",              tel: "+33 2 28 01 35 34" },
  { nom: "LPC Plombier Chauffagiste", type: "Artisan",    slug: "artisans/lpc-plombier",       code: "LPCPLOMBIER26",           tel: "+33 6 99 36 84 16" },
  { nom: "RÉNO COULEURS",           type: "Artisan",      slug: "artisans/reno-couleurs",      code: "RENOCOULEURS26",          tel: "+33 7 67 92 39 48" },
  { nom: "Fernandes Electricité",   type: "Artisan",      slug: "artisans/fernandes-electricite", code: "FERNANDESELECTRICITE26", tel: "+33 7 61 14 02 99" },
  { nom: "Contraste Électricité",   type: "Artisan",      slug: "artisans/contraste-electricite", code: "CONTRASTEELECTRICITE26", tel: "+33 6 27 87 18 97" },
  { nom: "Jonathan Viaud Plomberie", type: "Artisan",     slug: "artisans/jonathan-viaud",     code: "JONATHANVIAUD26",         tel: "+33 6 09 23 82 99" },
  { nom: "MAD Entreprise",          type: "Artisan",      slug: "artisans/mad-entreprise",     code: "MADENTREPRISE26",         tel: "+33 7 61 51 45 72" },
  { nom: "TUNILEC",                 type: "Artisan",      slug: "artisans/tunilec",            code: "TUNILEC26",               tel: "+33 6 10 18 12 58" },
  { nom: "L'EFFET DECO",            type: "Artisan",      slug: "artisans/effet-deco",         code: "EFFETDECO26",             tel: "+33 6 43 26 82 98" },
  { nom: "Société Rénove 44",       type: "Artisan",      slug: "artisans/renove-44",          code: "RENOVE4426",              tel: "+33 6 61 95 75 13" },
  { nom: "Mainard Lionel",          type: "Artisan",      slug: "artisans/mainard-lionel",     code: "MAINARDLIONEL26",         tel: "+33 6 62 30 92 76" },
  { nom: "Jousseaume Ludovic",      type: "Artisan",      slug: "artisans/jousseaume-ludovic", code: "JOUSSEAUMELUDOVIC26",     tel: "+33 2 40 59 89 48" },
  { nom: "SAS LAIR",                type: "Artisan",      slug: "artisans/sas-lair",           code: "SASLAIR26",               tel: "+33 7 49 39 31 51" },
  { nom: "Plomb'ouest",             type: "Artisan",      slug: "artisans/plomb-ouest",        code: "PLOMBOUEST26",            tel: "+33 6 31 91 44 89" },
  { nom: "Arpec",                   type: "Artisan",      slug: "artisans/arpec",              code: "ARPEC26",                 tel: "+33 6 82 06 48 08" },

  // --- Pages publiques ---
  { nom: "Home staging virtuel",    type: "Home staging", slug: "home-staging",                code: "",                        tel: "" },
  { nom: "Réactivation clients",    type: "Réactivation", slug: "reactivation",                code: "",                        tel: "" }
];

// Pour les tests en environnement Node (sans navigateur).
if (typeof module !== "undefined" && module.exports) {
  module.exports = { BASE_URL: BASE_URL, CIBLES: CIBLES };
}
