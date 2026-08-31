(function () {
  "use strict";

  var EYE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"></path><circle cx="12" cy="12" r="2.5"></circle></svg>';
  var CLOSE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"></path></svg>';

  function normalize(value) {
    return (value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function iconButton(label, className) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "demo-icon-button " + (className || "");
    button.setAttribute("aria-label", label);
    button.title = label;
    button.innerHTML = EYE_ICON;
    return button;
  }

  function buildPhotoModal() {
    var modal = document.createElement("div");
    modal.className = "demo-photo-modal";
    modal.hidden = true;
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Aperçu du plat");
    modal.innerHTML = '<div class="demo-photo-modal__panel"><button type="button" class="demo-icon-button demo-photo-modal__close" aria-label="Fermer l’aperçu" title="Fermer l’aperçu">' + CLOSE_ICON + '</button><img alt=""><p></p></div>';
    document.body.appendChild(modal);

    function close() {
      modal.hidden = true;
      document.body.classList.remove("demo-modal-open");
    }

    modal.querySelector("button").addEventListener("click", close);
    modal.addEventListener("click", function (event) {
      if (event.target === modal) close();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !modal.hidden) close();
    });
    return {
      open: function (src, alt, caption) {
        var image = modal.querySelector("img");
        image.src = src;
        image.alt = alt;
        modal.querySelector("p").textContent = caption;
        modal.hidden = false;
        document.body.classList.add("demo-modal-open");
        modal.querySelector("button").focus();
      }
    };
  }

  function enhanceAllergens() {
    var allergenIndex = 0;
    document.querySelectorAll(".allergenes").forEach(function (allergens) {
      if (allergens.dataset.enhanced === "true") return;
      var item = allergens.closest(".ligne-prix, .item, .plat") || allergens.parentElement;
      if (!item) return;
      var title = item.querySelector(".nom, .plat-titre");
      if (!title) return;

      allergens.dataset.enhanced = "true";
      var popover = document.createElement("span");
      popover.className = "demo-allergen-popover";
      popover.innerHTML = allergens.innerHTML;
      allergenIndex += 1;
      popover.id = "allergenes-estimes-" + allergenIndex;
      allergens.replaceWith(popover);
      title.classList.add("demo-allergen-hover-target");
      title.tabIndex = 0;
      title.setAttribute("aria-describedby", popover.id);
      title.addEventListener("mouseenter", function () { popover.classList.add("is-open"); });
      title.addEventListener("mouseleave", function () { popover.classList.remove("is-open"); });
      title.addEventListener("focus", function () { popover.classList.add("is-open"); });
      title.addEventListener("blur", function () { popover.classList.remove("is-open"); });
    });
  }

  function enhanceDishPhotos() {
    var visuals = Array.isArray(window.MENU_VISUALS) ? window.MENU_VISUALS : [];
    if (!visuals.length) return;
    var modal = buildPhotoModal();
    var dishes = Array.prototype.slice.call(document.querySelectorAll(".ligne-prix .nom, .item .nom, .plat-titre"));

    visuals.forEach(function (visual) {
      var target = dishes.find(function (dish) {
        return normalize(dish.textContent).indexOf(normalize(visual.match)) !== -1;
      });
      if (!target || target.parentElement.querySelector(".demo-photo-trigger")) return;
      var button = iconButton("Voir l’illustration du plat", "demo-photo-trigger");
      button.addEventListener("click", function () {
        modal.open(visual.src, visual.alt, visual.caption);
      });
      target.insertAdjacentElement("afterend", button);
    });
  }

  function init() {
    enhanceAllergens();
    enhanceDishPhotos();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
}());
