(function () {
  "use strict";

  function renderStars(rating) {
    var rounded = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)));
    return "★★★★★".slice(0, rounded) + "☆☆☆☆☆".slice(rounded);
  }

  function reviewCard(review) {
    var card = document.createElement("article");
    card.className = "google-review";
    var stars = document.createElement("div");
    stars.className = "google-review__stars";
    stars.textContent = renderStars(review.rating);
    stars.setAttribute("aria-label", String(review.rating) + " étoiles sur 5");
    var text = document.createElement("p");
    text.className = "google-review__text";
    text.textContent = review.text || "Avis publié sans commentaire.";
    var date = document.createElement("div");
    date.className = "google-review__date";
    date.textContent = "Google · " + review.date;
    card.append(stars, text, date);
    return card;
  }

  function mount() {
    var slug = window.PAGE_SLUG;
    var data = window.DEMO_GOOGLE_REVIEWS && window.DEMO_GOOGLE_REVIEWS[slug];
    if (!data || !Array.isArray(data.reviews) || data.reviews.length !== 5) return;

    var section = document.createElement("section");
    section.className = "google-reviews";
    section.setAttribute("aria-label", "Les cinq derniers avis Google");
    var inner = document.createElement("div");
    inner.className = "google-reviews__inner";
    var title = document.createElement("h2");
    title.textContent = "Les 5 derniers avis Google";
    var intro = document.createElement("p");
    intro.className = "google-reviews__intro";
    intro.textContent = "Avis publics affichés du plus récent au plus ancien.";
    var grid = document.createElement("div");
    grid.className = "google-reviews__grid";
    data.reviews.forEach(function (review) { grid.appendChild(reviewCard(review)); });
    inner.append(title, intro, grid);
    section.appendChild(inner);

    var finalSection = document.getElementById("final");
    var menuFooter = document.querySelector(".mention-reconstitution");
    if (finalSection) finalSection.parentNode.insertBefore(section, finalSection);
    else if (menuFooter) menuFooter.parentNode.insertBefore(section, menuFooter);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
