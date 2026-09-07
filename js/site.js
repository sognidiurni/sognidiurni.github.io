/* =============================================================
   COMPORTAMENTI COMUNI A TUTTE LE PAGINE
   -------------------------------------------------------------
   1. Commutatore di lingua (IT / 中文)
   2. Menu di navigazione su schermi piccoli
   3. Comparsa progressiva dei blocchi allo scorrimento
   4. Anno corrente nel piè di pagina
   ============================================================= */

(function () {
  "use strict";

  /* --- 1. Commutatore di lingua -------------------------------
     Entrambe le lingue sono già presenti nel codice HTML: il
     commutatore si limita a marcare l'elemento <html> con
     data-lang, e il foglio di stile nasconde la versione non
     attiva. La scelta viene ricordata nel browser. */
  const radice = document.documentElement;
  const linguaSalvata = (function () {
    try { return localStorage.getItem("sgd-lingua"); } catch (e) { return null; }
  })();

  function impostaLingua(codice) {
    radice.setAttribute("data-lang", codice);
    radice.setAttribute("lang", codice === "zh" ? "zh-Hans" : "it");
    document.querySelectorAll("[data-lang-btn]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.langBtn === codice));
    });
    try { localStorage.setItem("sgd-lingua", codice); } catch (e) { /* modalità privata */ }
  }

  impostaLingua(linguaSalvata === "zh" ? "zh" : "it");

  document.querySelectorAll("[data-lang-btn]").forEach(function (b) {
    b.addEventListener("click", function () { impostaLingua(b.dataset.langBtn); });
  });


  /* --- 2. Menu su schermi piccoli ----------------------------- */
  const burger = document.querySelector("[data-burger]");
  const nav = document.querySelector("[data-nav]");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      const aperto = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!aperto));
      burger.setAttribute("aria-expanded", String(!aperto));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.setAttribute("data-open", "false");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }


  /* --- 3. Comparsa progressiva -------------------------------- */
  const daRivelare = document.querySelectorAll("[data-reveal]");
  if (daRivelare.length && "IntersectionObserver" in window) {
    const osservatore = new IntersectionObserver(function (voci) {
      voci.forEach(function (voce) {
        if (voce.isIntersecting) {
          voce.target.classList.add("is-in");
          osservatore.unobserve(voce.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    daRivelare.forEach(function (el) { osservatore.observe(el); });
  } else {
    daRivelare.forEach(function (el) { el.classList.add("is-in"); });
  }


  /* --- 4. Anno corrente --------------------------------------- */
  const anno = document.querySelector("[data-anno]");
  if (anno) anno.textContent = String(new Date().getFullYear());
})();
