/* =============================================================
   GALLERIA DELLE OPERE
   -------------------------------------------------------------
   Costruisce la griglia a partire dall'array CATALOGO
   (definito in js/catalogo.js) e gestisce la finestra di
   ingrandimento (lightbox) con tastiera e gesto di trascinamento.
   ============================================================= */

(function () {
  "use strict";

  const griglia = document.querySelector("[data-griglia]");
  if (!griglia || typeof CATALOGO === "undefined") return;

  /* --- Costruzione della griglia ------------------------------
     Le prime otto lastre vengono caricate subito, le restanti
     in differita: la pagina resta leggera anche su rete lenta. */
  const frammento = document.createDocumentFragment();

  CATALOGO.forEach(function (opera, indice) {
    const bottone = document.createElement("button");
    bottone.className = "plate";
    bottone.type = "button";
    bottone.dataset.indice = String(indice);
    bottone.setAttribute("aria-label", "Apri la lastra " + romano(opera.n) + ", " + opera.it);

    /* Dentro un <button> è ammesso solo contenuto testuale:
       si usano quindi degli <span>, non <figure>/<figcaption>. */
    bottone.innerHTML =
      '<span class="plate__frame">' +
        '<span class="plate__num">' + romano(opera.n) + "</span>" +
        '<img src="assets/opere/' + opera.file + '"' +
             ' alt="' + opera.alt.replace(/"/g, "&quot;") + '"' +
             ' width="420" height="420"' +
             ' loading="' + (indice < 8 ? "eager" : "lazy") + '"' +
             ' decoding="async">' +
      "</span>" +
      '<span class="plate__cap">' +
        "<b>" + opera.it + "</b>" +
        '<span lang="zh">' + opera.zh + "</span>" +
      "</span>";

    frammento.appendChild(bottone);
  });

  griglia.appendChild(frammento);


  /* --- Contatore e cambio di formato --------------------------- */
  const contatore = document.querySelector("[data-conteggio]");
  if (contatore) contatore.textContent = CATALOGO.length + " lastre";

  document.querySelectorAll("[data-vista]").forEach(function (b) {
    b.addEventListener("click", function () {
      const grande = b.dataset.vista === "grande";
      griglia.classList.toggle("grid--large", grande);
      document.querySelectorAll("[data-vista]").forEach(function (altro) {
        altro.setAttribute("aria-pressed", String(altro === b));
      });
    });
  });


  /* --- Finestra di ingrandimento ------------------------------ */
  const lb = document.querySelector("[data-lightbox]");
  if (!lb) return;

  const lbImg     = lb.querySelector("[data-lb-img]");
  const lbTitolo  = lb.querySelector("[data-lb-titolo]");
  const lbHan     = lb.querySelector("[data-lb-han]");
  const lbNumero  = lb.querySelector("[data-lb-numero]");
  let   corrente  = 0;
  let   ultimoFuoco = null;

  function mostra(indice) {
    corrente = (indice + CATALOGO.length) % CATALOGO.length;
    const opera = CATALOGO[corrente];
    lbImg.src = "assets/opere/" + opera.file;
    lbImg.alt = opera.alt;
    lbTitolo.textContent = opera.it;
    lbHan.textContent = opera.zh;
    lbNumero.textContent = romano(opera.n) + " / " + romano(CATALOGO.length);
  }

  function apri(indice) {
    ultimoFuoco = document.activeElement;
    mostra(indice);
    lb.setAttribute("data-open", "true");
    lb.removeAttribute("aria-hidden");
    document.body.classList.add("lb-open");
    lb.querySelector("[data-lb-chiudi]").focus();
  }

  function chiudi() {
    lb.setAttribute("data-open", "false");
    lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lb-open");
    if (ultimoFuoco) ultimoFuoco.focus();
  }

  griglia.addEventListener("click", function (e) {
    const bottone = e.target.closest(".plate");
    if (bottone) apri(Number(bottone.dataset.indice));
  });

  lb.querySelector("[data-lb-chiudi]").addEventListener("click", chiudi);
  lb.querySelector("[data-lb-prec]").addEventListener("click", function () { mostra(corrente - 1); });
  lb.querySelector("[data-lb-succ]").addEventListener("click", function () { mostra(corrente + 1); });

  /* Tastiera: Esc chiude, frecce sfogliano. */
  document.addEventListener("keydown", function (e) {
    if (lb.getAttribute("data-open") !== "true") return;
    if (e.key === "Escape")     { chiudi(); }
    if (e.key === "ArrowLeft")  { mostra(corrente - 1); }
    if (e.key === "ArrowRight") { mostra(corrente + 1); }
  });

  /* Gesto di trascinamento sul telefono. */
  let partenza = null;
  lb.addEventListener("touchstart", function (e) { partenza = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (partenza === null) return;
    const delta = e.changedTouches[0].clientX - partenza;
    if (Math.abs(delta) > 55) mostra(corrente + (delta < 0 ? 1 : -1));
    partenza = null;
  }, { passive: true });
})();
