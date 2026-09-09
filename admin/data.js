// Cibles de la campagne de prospection.
// pageSlug permet à plusieurs agences de partager la même démo de home staging.
var BASE_URL = "https://msdw.github.io/demos-prospection/";

var CIBLES = [
  // --- Menus (restaurants) ---
  { nom: "L'Amour des mets",        type: "Menu",         slug: "menus/amour-des-mets",        code: "AMOUR2026",               tel: "+33 9 83 72 94 00" },
  { nom: "Le Raffiné",              type: "Menu",         slug: "menus/le-raffine",            code: "RAFFINE2026",             tel: "+33 9 87 31 29 30" },
  { nom: "L'Arvigate",              type: "Menu",         slug: "menus/arvigate",              code: "ARVIGATE2026",            tel: "+33 2 40 94 94 94" },
  { nom: "Le Chantilly",            type: "Menu",         slug: "menus/le-chantilly",          code: "CHANTILLY2026",           tel: "+33 2 40 94 84 11", statut0: "Mail envoyé", evenement0: { libelle: "Mise à jour envoyée", ts: "2026-08-31T10:51:16+02:00" } },

  // --- Artisans ---
  { nom: "AP Electricité",          type: "Artisan",      slug: "artisans/ap-electricite",     code: "APELECTRICITE26",         tel: "+33 6 75 65 07 91" },
  { nom: "K Thermique & Sanitaire", type: "Artisan",      slug: "artisans/k-thermique",        code: "KTHERMIQUE26",            tel: "+33 6 24 52 12 59", statut0: "Mail envoyé", evenement0: { libelle: "Mise à jour envoyée", ts: "2026-08-31T10:51:16+02:00" } },
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


  // --- Élargi communes voisines (2026-09) ---
  { nom: "Albert et Lulu", type: "Menu", slug: "menus/albert-et-lulu", code: "ALBERTLULU26", tel: "+33 7 66 69 38 06" },
  { nom: "Le Relais du Bac", type: "Menu", slug: "menus/relais-du-bac", code: "RELAISBAC26", tel: "+33 2 40 86 15 63" },
  { nom: "Crêperie Moulin Chaugenets", type: "Menu", slug: "menus/moulin-chaugenets", code: "MOULINCHAU26", tel: "+33 2 40 85 23 49" },
  { nom: "Le Chalet", type: "Menu", slug: "menus/le-chalet", code: "CHALET26", tel: "+33 7 82 17 31 62" },
  { nom: "MJ Energy Électricité", type: "Artisan", slug: "artisans/mj-energy", code: "MJENERGY26", tel: "+33 7 49 20 54 24" },
  { nom: "AN Plomberie 44", type: "Artisan", slug: "artisans/an-plomberie-44", code: "ANPLOMBERIE4426", tel: "+33 6 64 71 72 23" },
  { nom: "ACF Confort", type: "Artisan", slug: "artisans/acf-confort", code: "ACFCONFORT26", tel: "+33 7 87 32 36 99" },
  { nom: "Tis Thermique", type: "Artisan", slug: "artisans/tis-thermique", code: "TISTHERMIQUE26", tel: "+33 6 38 87 07 68" },
  { nom: "Chauvet Plomberie", type: "Artisan", slug: "artisans/chauvet-plomberie", code: "CHAUVETPLOMBERIE26", tel: "+33 6 50 95 19 41" },
  { nom: "V'la le Plombier", type: "Artisan", slug: "artisans/vla-le-plombier", code: "VLALEPLOMBIER26", tel: "+33 6 69 18 01 98" },
  { nom: "BPC Renov'", type: "Artisan", slug: "artisans/bpc-renov", code: "BPCRENOV26", tel: "+33 6 11 23 46 85" },
  { nom: "Poilane Rincon Électricité", type: "Artisan", slug: "artisans/poilane-rincon", code: "POILANERINCON26", tel: "+33 6 63 24 33 21" },
  { nom: "TESSELEC", type: "Artisan", slug: "artisans/tesselec", code: "TESSELEC26", tel: "+33 6 66 38 76 60" },
  { nom: "ACT'YVES Plomberie Chauffage", type: "Artisan", slug: "artisans/actyves-plomberie", code: "ACTYVESPLOMBERIE26", tel: "+33 6 98 46 10 76" },
  { nom: "Placolors", type: "Artisan", slug: "artisans/placolors", code: "PLACOLORS26", tel: "+33 6 48 79 40 53" },
  { nom: "Irène de la Chapotière", type: "Artisan", slug: "artisans/irene-chapotiere", code: "IRENECHAPOTIERE26", tel: "+33 6 63 36 03 06" },
  { nom: "Artisan Glain Yoann", type: "Artisan", slug: "artisans/glain-yoann", code: "GLAINYOANN26", tel: "+33 6 32 98 90 74" },
  { nom: "Cyril Couëdel", type: "Artisan", slug: "artisans/cyril-couedel", code: "CYRILCOUEDEL26", tel: "+33 6 50 82 57 78" },
  { nom: "A2PC Plomberie Chauffage", type: "Artisan", slug: "artisans/a2pc-plomberie", code: "A2PCPLOMBERIE26", tel: "+33 6 84 47 39 08" },
  { nom: "EI Guérin Julien", type: "Artisan", slug: "artisans/guerin-julien", code: "GUERINJULIEN26", tel: "+33 6 72 21 19 84" },
  { nom: "Bihan M", type: "Artisan", slug: "artisans/bihan-m", code: "BIHANM26", tel: "+33 2 40 94 81 87" },
  { nom: "Pictora Verde", type: "Artisan", slug: "artisans/pictora-verde", code: "PICTORAVERDE26", tel: "+33 6 78 84 76 86" },
  { nom: "Arnaud Devin", type: "Artisan", slug: "artisans/arnaud-devin", code: "ARNAUDDEVIN26", tel: "+33 6 30 48 03 04" },
  { nom: "A.H Plomberie", type: "Artisan", slug: "artisans/ah-plomberie", code: "AHPLOMBERIE26", tel: "+33 6 65 75 11 87" },
  { nom: "Berthomé Erwan", type: "Artisan", slug: "artisans/berthome-erwan", code: "BERTHOMEERWAN26", tel: "+33 6 52 87 20 32" },
  { nom: "François Dillies", type: "Artisan", slug: "artisans/francois-dillies", code: "FRANCOISDILLIES26", tel: "+33 2 40 57 19 56" },
  { nom: "SARL Smart'Elec", type: "Artisan", slug: "artisans/smart-elec", code: "SMARTELEC26", tel: "+33 6 95 44 40 82" },
  { nom: "Nicolas Delahaye Peinture", type: "Artisan", slug: "artisans/nicolas-delahaye", code: "NICOLASDELAHAYE26", tel: "+33 6 31 50 86 87" },
  { nom: "Caillat Julien (hors zone 37)", type: "Artisan", slug: "artisans/caillat-julien", code: "CAILLATJULIEN26", tel: "+33 6 95 56 58 94" },
  { nom: "Grégory Foucher SAS", type: "Artisan", slug: "artisans/gregory-foucher", code: "GREGORYFOUCHER26", tel: "+33 6 84 13 81 45" },
  { nom: "Pierre'eau", type: "Artisan", slug: "artisans/pierre-eau", code: "PIERREEAU26", tel: "+33 6 49 80 60 94" },
  { nom: "AGITHERM Plomberie", type: "Artisan", slug: "artisans/agitherm", code: "AGITHERM26", tel: "+33 2 85 52 15 74" },
  { nom: "La Déco d'Olivier", type: "Artisan", slug: "artisans/la-deco-d-olivier", code: "LADECODOLIVIER26", tel: "+33 6 69 18 83 25" },

  // --- Agences immobilières (home staging, page publique partagée) ---
  { nom: "Nestenn Orvault (N. Ardouin)", type: "Home staging", slug: "agence-nestenn-orvault", pageSlug: "home-staging", code: "", tel: "+33 2 40 40 18 17", statut0: "Mail envoyé", evenement0: { libelle: "Mise à jour envoyée", ts: "2026-08-31T10:51:16+02:00" } },
  { nom: "Nestenn RP de Vannes (S. Vedrenne)", type: "Home staging", slug: "agence-nestenn-rpvannes", pageSlug: "home-staging", code: "", tel: "+33 2 40 46 60 60", statut0: "Mail envoyé", evenement0: { libelle: "Mise à jour envoyée", ts: "2026-08-31T10:51:16+02:00" } },
  { nom: "Beauséjour Immobilier Orvault", type: "Home staging", slug: "agence-beausejour-orvault", pageSlug: "home-staging", code: "", tel: "+33 2 40 40 40 19", statut0: "Mail envoyé", evenement0: { libelle: "Mise à jour envoyée", ts: "2026-08-31T10:51:16+02:00" } },
  { nom: "Thierry Fourny", type: "Home staging", slug: "agence-thierry-fourny", pageSlug: "home-staging", code: "", tel: "", statut0: "Mail envoyé", evenement0: { libelle: "Mail envoyé", ts: "2026-08-31T10:50:24+02:00" } },
  { nom: "Monassier / Brange", type: "Home staging", slug: "agence-monassier-brange", pageSlug: "home-staging", code: "", tel: "", statut0: "Mail envoyé", evenement0: { libelle: "Mail envoyé", ts: "2026-08-31T10:50:24+02:00" } },
  { nom: "HUMAN Couëron La Chabossière", type: "Home staging", slug: "agence-human-coueron", pageSlug: "home-staging", code: "", tel: "", statut0: "Mail envoyé", evenement0: { libelle: "Mail envoyé", ts: "2026-08-31T10:50:24+02:00" } },
  { nom: "HUMAN Couëron Bourg", type: "Home staging", slug: "agence-human-coueron-bourg", pageSlug: "home-staging", code: "", tel: "", statut0: "Mail envoyé", evenement0: { libelle: "Mail envoyé", ts: "2026-08-31T10:50:24+02:00" } },
  { nom: "Grandchamp Immobilier", type: "Home staging", slug: "agence-grandchamp-immobilier", pageSlug: "home-staging", code: "", tel: "", statut0: "Mail envoyé", evenement0: { libelle: "Mail envoyé", ts: "2026-08-31T10:50:24+02:00" } },
  { nom: "Beauséjour Immobilier Couëron", type: "Home staging", slug: "agence-beausejour-coueron", pageSlug: "home-staging", code: "", tel: "", statut0: "Mail envoyé", evenement0: { libelle: "Mail envoyé", ts: "2026-08-31T10:50:24+02:00" } },
  { nom: "VIVRE ICI Treillières", type: "Home staging", slug: "agence-vivre-ici-treillieres", pageSlug: "home-staging", code: "", tel: "", statut0: "Mail envoyé", evenement0: { libelle: "Mail envoyé", ts: "2026-08-31T10:50:24+02:00" } },
  { nom: "Guy Hoquet Vigneux-de-Bretagne", type: "Home staging", slug: "agence-guy-hoquet-vigneux", pageSlug: "home-staging", code: "", tel: "", statut0: "Mail envoyé", evenement0: { libelle: "Mail envoyé", ts: "2026-08-31T10:50:24+02:00" } },
  { nom: "Immo Pro Nantes", type: "Home staging", slug: "agence-immo-pro-nantes", pageSlug: "home-staging", code: "", tel: "", statut0: "Mail envoyé", evenement0: { libelle: "Mail envoyé", ts: "2026-08-31T10:50:24+02:00" } },

  // --- Réactivation de clients inactifs ---
  { nom: "Caract'hair", type: "Réactivation", slug: "reactivation-caracthair", pageSlug: "reactivation", code: "", tel: "", statut0: "Mail envoyé", evenement0: { libelle: "Mail envoyé", ts: "2026-08-31T21:11:09+02:00" } },
  { nom: "Garage des Anglais", type: "Réactivation", slug: "reactivation-garage-des-anglais", pageSlug: "reactivation", code: "", tel: "", statut0: "Mail envoyé", evenement0: { libelle: "Mail envoyé", ts: "2026-08-31T21:11:09+02:00" } },
  { nom: "Gymligne", type: "Réactivation", slug: "reactivation-gymligne", pageSlug: "reactivation", code: "", tel: "", statut0: "Mail envoyé", evenement0: { libelle: "Mail envoyé", ts: "2026-08-31T21:11:09+02:00" } },
  { nom: "Bulle de Douces Heures", type: "Réactivation", slug: "reactivation-bulle-douces-heures", pageSlug: "reactivation", code: "", tel: "", statut0: "Mail envoyé", evenement0: { libelle: "Mail envoyé", ts: "2026-08-31T21:11:09+02:00" } },
  { nom: "La Fabrik Gym", type: "Réactivation", slug: "reactivation-la-fabrik-gym", pageSlug: "reactivation", code: "", tel: "", statut0: "Mail envoyé", evenement0: { libelle: "Mail envoyé", ts: "2026-08-31T21:11:09+02:00" } },

  // --- Pages publiques ---
  { nom: "Home staging virtuel",    type: "Home staging", slug: "home-staging",                code: "",                        tel: "" },
  { nom: "Réactivation clients",    type: "Réactivation", slug: "reactivation",                code: "",                        tel: "" }
];

// Pour les tests en environnement Node (sans navigateur).
if (typeof module !== "undefined" && module.exports) {
  module.exports = { BASE_URL: BASE_URL, CIBLES: CIBLES };
}
