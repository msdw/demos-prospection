(() => {
"use strict";
const $ = id => document.getElementById(id);
const base = "https://www.chezteta.fr/wp-content/uploads/";
const dishes = [
{id:"sambousik",name:"Sambousik",type:"entree",label:"ENTRÉE",description:"Petites bouchées farcies au bœuf.",image:base+"2019/10/Chez-TETA_Nantes-traiteur-libanais_SAMBOUSIK-1024x1024.jpg"},
{id:"rakakat",name:"Rakakat",type:"entree",label:"ENTRÉE",description:"Fromage et herbes dans une bouchée croustillante.",image:base+"2019/10/Chez-TETA_Nantes-traiteur-libanais_RAKAKAT1-1024x1024.jpg"},
{id:"taouk",name:"Taouk",type:"plat",label:"PLAT",description:"Poulet mariné, servi avec ses garnitures.",image:base+"2019/10/Chez-TETA_Nantes-traiteur-libanais_SANDWICH-TAOUK-1024x1024.jpg"},
{id:"fatouche",name:"Fatouche",type:"accompagnement",label:"ACCOMPAGNEMENT",description:"Une salade fraîche aux saveurs du Liban.",image:base+"2024/02/Chez-TETA_dessert_FATOUCHE-1024x1024.jpg"},
{id:"baklava",name:"Baklava",type:"dessert",label:"DESSERT",description:"Pâtisserie garnie de fruits à coque.",image:base+"2024/02/Chez-TETA_dessert_BAKLAVA-1024x1022.jpg"}
];
const selected = new Set();
const details = window.TETA_DISH_DETAILS || {};
let currentDetail = null;
const icons = () => { if(window.lucide) window.lucide.createIcons(); };
const money = amount => new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(amount);
const today = new Date();
$("date").min = [today.getFullYear(),String(today.getMonth()+1).padStart(2,"0"),String(today.getDate()).padStart(2,"0")].join("-");
document.body.classList.add("locked");
$("unlock").addEventListener("submit", event => {
 event.preventDefault();
 if($("access").value.toUpperCase().replace(/\s+/g,"") !== "MENU10092605") { $("gate-error").textContent = "Code incorrect. Vérifiez le code communiqué."; return; }
 $("gate").hidden=true; $("site").hidden=false; document.body.classList.remove("locked"); document.querySelector(".hero h1").focus({preventScroll:true});
 const endpoint=window.DEMO_VISITS_ENDPOINT;
 if(endpoint) fetch(endpoint+"/track?slug=menus%2Fchez-teta",{mode:"cors"}).catch(()=>{});
});
$("dishes").innerHTML = dishes.map(d => `<article class="dish" data-type="${d.type}"><div class="dish-photo"><img src="${d.image}" alt="${d.name}, photo de Chez Teta" loading="lazy"><button type="button" class="icon zoom" data-photo="${d.id}" aria-label="Agrandir la photo de ${d.name}" title="Agrandir la photo"><i data-lucide="eye"></i></button></div><p class="kind">${d.label}</p><div class="dish-header"><h3><button type="button" class="dish-name" data-allergen="${d.id}" aria-haspopup="dialog" aria-describedby="allergen-${d.id}">${d.name}<span class="allergens" id="allergen-${d.id}" role="tooltip"></span></button></h3><button type="button" class="icon add" data-add="${d.id}" aria-label="Ajouter ${d.name} à mes envies" aria-pressed="false" title="Ajouter à mes envies"><i data-lucide="plus"></i></button></div><p>${d.description}</p></article>`).join("");

document.querySelectorAll("[data-allergen]").forEach(button => {
 const info=details[button.dataset.allergen];
 button.querySelector(".allergens").textContent=info?info.allergens:"Liste à confirmer auprès de Chez Teta.";
 button.addEventListener("click",()=>{
  const dish=dishes.find(d=>d.id===button.dataset.allergen);currentDetail=dish;
  $("allergen-title").textContent=dish.name;
  $("allergen-ingredients").textContent=info.ingredients;
  $("allergen-details").textContent=info.allergens;
  $("allergen-source").href=info.source;
  $("allergen-dialog").showModal();
 });
 button.addEventListener("keydown",e=>{if(e.key==="Escape"){button.blur();}});
});
$("ask-allergen").addEventListener("click",()=>{
 if(!currentDetail)return;
 const question="Merci de confirmer les allergènes et les risques de contamination croisée pour : "+currentDetail.name+".";
 if(!$("notes").value.includes(question)){
  if(($("notes").value+"\n"+question).trim().length>800){$("allergen-dialog").close();$("notes").focus();return;}
  $("notes").value=[$("notes").value.trim(),question].filter(Boolean).join("\n");
 }
 $("allergen-dialog").close();
 $("demande").scrollIntoView({behavior:"smooth"});
 $("notes").focus({preventScroll:true});
});
const reviewData=window.TETA_REVIEWS;
if(reviewData && reviewData.placeId==="ChIJv3rLTlmMBUgRqwqpUej6EiQ" && reviewData.reviews.length===5){
 const formatDate=value=>new Intl.DateTimeFormat("fr-FR",{day:"numeric",month:"long",year:"numeric",timeZone:"Europe/Paris"}).format(new Date(value));
 $("reviews-date").textContent="Relevé du "+formatDate(reviewData.collectedAt)+".";
 const reviews=reviewData.reviews.slice().sort((a,b)=>new Date(b.date)-new Date(a.date));
 reviews.forEach(review=>{
  const article=document.createElement("article");article.className="review-card";
  const header=document.createElement("div");header.className="review-card-heading";
  const stars=document.createElement("span");stars.className="review-stars";stars.setAttribute("aria-label",review.rating+" étoiles sur 5");stars.textContent="★".repeat(review.rating)+"☆".repeat(5-review.rating);
  const label=document.createElement("span");label.textContent="Google";
  header.append(stars,label);
  const date=document.createElement("time");date.dateTime=review.date;date.textContent=(review.updated?"Modifié le ":"")+formatDate(review.date);
  const text=document.createElement("p");text.textContent=review.summary||"Avis publié sans commentaire.";
  const origin=document.createElement("p");origin.className="review-origin";origin.textContent=review.summary?"Résumé de l'avis":"Note seule";
  const link=document.createElement("a");link.className="text-link";link.href=reviewData.url;link.target="_blank";link.rel="noopener";link.textContent="Consulter sur Google";
  article.append(header,date,text,origin,link);$("review-list").append(article);
 });
}else{$("avis").hidden=true;document.querySelector(".hero-rating").hidden=true;}

function updateSummary() {
 $("dock-count").textContent = selected.size;
 $("selection-items").replaceChildren();
 if(!selected.size) { const p=document.createElement("p"); p.className="empty"; p.textContent="Aucun plat sélectionné. Vous pouvez aussi laisser Matthieu vous proposer une composition."; $("selection-items").append(p); }
 for(const id of selected) {
 const d=dishes.find(item=>item.id===id), row=document.createElement("div"); row.className="selected-row";
 const name=document.createElement("span");name.textContent=d.name;
 const remove=document.createElement("button");remove.type="button";remove.className="icon";remove.title="Retirer "+d.name;remove.setAttribute("aria-label","Retirer "+d.name);remove.innerHTML='<i data-lucide="minus"></i>';remove.addEventListener("click",()=>toggle(id));
 row.append(name,remove);$("selection-items").append(row);
 }
 document.querySelectorAll("[data-add]").forEach(button=>{const active=selected.has(button.dataset.add);button.setAttribute("aria-pressed",String(active));button.title=active?"Retirer de mes envies":"Ajouter à mes envies";button.setAttribute("aria-label",(active?"Retirer ":"Ajouter ")+dishes.find(d=>d.id===button.dataset.add).name+(active?" de mes envies":" à mes envies"));button.innerHTML='<i data-lucide="'+(active?"check":"plus")+'"></i>';});
 const guests=Number($("guests").value), budget=Number($("budget").value);
 $("guest-summary").textContent=Number.isInteger(guests)&&guests>0?guests+" personne"+(guests>1?"s":""):"À préciser";
 $("budget-summary").textContent=guests>0&&budget>0?money(guests*budget):"Non précisée";icons();
}
function toggle(id){selected.has(id)?selected.delete(id):selected.add(id);updateSummary();}
document.querySelectorAll("[data-add]").forEach(b=>b.addEventListener("click",()=>toggle(b.dataset.add)));
document.querySelectorAll("[data-filter]").forEach(button=>button.addEventListener("click",()=>{
 document.querySelectorAll("[data-filter]").forEach(b=>b.setAttribute("aria-pressed",String(b===button)));
 document.querySelectorAll(".dish").forEach(card=>card.hidden=button.dataset.filter!=="all"&&card.dataset.type!==button.dataset.filter);
}));
document.querySelectorAll("[data-photo]").forEach(button=>button.addEventListener("click",()=>{
 const d=dishes.find(x=>x.id===button.dataset.photo);$("large-photo").src=d.image;$("large-photo").alt=d.name+" photographié par Chez Teta";$("photo-title").textContent=d.name;$("photo-dialog").showModal();
}));
document.querySelectorAll(".close-dialog").forEach(b=>b.addEventListener("click",()=>b.closest("dialog").close()));
document.querySelectorAll("dialog").forEach(dialog=>dialog.addEventListener("click",e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}}));
document.querySelectorAll("[data-mode]").forEach(a=>a.addEventListener("click",()=>{$("occasion").value=a.dataset.mode;}));
["guests","budget"].forEach(id=>$(id).addEventListener("input",updateSummary));
$("city").addEventListener("input",()=>{$("delivery-note").textContent=$("city").value.trim()?"Zone, frais et disponibilité à confirmer avec Chez Teta.":"La livraison sera confirmée avec Chez Teta.";});
$("request-form").addEventListener("submit",event=>{
 event.preventDefault();if(!$("request-form").reportValidity())return;
 const names=[...selected].map(id=>dishes.find(d=>d.id===id).name);
 const date=$("date").value.split("-").reverse().join("/");
 const message=["[DÉMONSTRATION - pas une commande]","Bonjour Matthieu,","", "Je souhaite échanger avec vous pour "+($("occasion").value==="dejeuner"?"un déjeuner en box.":"un événement / une réception."),"Date souhaitée : "+date,"Convives : "+$("guests").value,"Commune : "+$("city").value.trim(),"Plats souhaités : "+(names.join(", ")||"Votre proposition est la bienvenue."),"Budget par personne : "+($("budget").value?money(Number($("budget").value)):"à discuter"),"Enveloppe totale souhaitée : "+$("budget-summary").textContent,"Précisions : "+($("notes").value.trim()||"aucune"),"","Merci de me confirmer vos disponibilités, la composition, les allergènes, le tarif et les conditions de livraison.","Bien cordialement"].join("\n");
 $("draft").value=message;$("email-draft").href="mailto:contact@chezteta.fr?subject="+encodeURIComponent("[DÉMO] Demande "+date+" - "+$("guests").value+" personnes")+"&body="+encodeURIComponent(message);$("copy-status").textContent="";$("draft-dialog").showModal();
});
$("copy-draft").addEventListener("click",async()=>{try{await navigator.clipboard.writeText($("draft").value);$("copy-status").textContent="Récapitulatif copié.";}catch{$("draft").focus();$("draft").select();$("copy-status").textContent="Copie automatique indisponible. Le texte est sélectionné pour une copie manuelle."; }});
updateSummary();icons();
})();
