# 白日梦镜头下 · Sotto lo sguardo dei sogni diurni

Le quarantotto incisioni all'acquaforte e acquatinta di **Lin Junnan** accostate
alle quattro poesie di **Chen Xinze**, in cinese e in italiano.

Sito statico: HTML, CSS e JavaScript scritti a mano, nessuna dipendenza,
nessun passaggio di build. L'unica risorsa esterna sono i caratteri tipografici
di Google Fonts.

## Struttura

```
index.html      Home
opere.html      Le 48 incisioni
poesie.html     Le 4 poesie, cinese e italiano a fronte
progetto.html   Tecnica, traduzione, costruzione del sito
contatti.html   Recapiti
css/style.css   Foglio di stile unico
js/site.js      Lingua, menu, comparsa allo scorrimento
js/catalogo.js  Le 48 opere: numero, file, descrizioni
js/galleria.js  Griglia e finestra di ingrandimento
assets/opere/   opera-01.jpg … opera-48.jpg
```

## In locale

```bash
py -m http.server 4610
```

## Stato

Versione in revisione. I motori di ricerca sono esclusi
(`meta robots noindex` sulle pagine e `Disallow` in `robots.txt`):
entrambi vanno rimossi alla pubblicazione definitiva.

## Crediti

Incisioni © Lin Junnan. Poesie e traduzioni © Chen Xinze.
Edizione web a cura di Chen Xinze.
