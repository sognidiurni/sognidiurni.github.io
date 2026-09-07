/* =============================================================
   CATALOGO DELLE OPERE · 作品目录
   -------------------------------------------------------------
   Le 48 incisioni del libro «白日梦镜头下 / Sotto lo sguardo dei
   sogni diurni» di Lin Junnan.

   ATTENZIONE: le lastre sono senza titolo. I campi `it` e `zh`
   sono descrizioni scritte per l'edizione web e non hanno valore
   di titolo d'autore. Servono a chi naviga per ritrovare
   un'opera e, insieme al campo `alt`, rendono le immagini
   accessibili a chi usa un lettore di schermo e leggibili dai
   motori di ricerca. La numerazione romana I–XLVIII segue
   l'ordine di impaginazione del libro stampato.

   Struttura di un record:
     n    numero progressivo della lastra (1–48)
     file nome del file in assets/opere/
     it   nota di lettura in italiano
     zh   nota di lettura in cinese
     alt  descrizione estesa per l'accessibilità (attributo alt)
   ============================================================= */

const CATALOGO = [
  { n: 1,  file: "opera-01.jpg", it: "Il cappotto rosa e la balena", zh: "粉色大衣与鲸鱼",
    alt: "Incisione: una figura dal volto malinconico avvolta in un ampio cappotto rosa; sopra di lei, nel cielo screziato, fluttua una balena azzurra su cui siede un minuscolo pescatore." },
  { n: 2,  file: "opera-02.jpg", it: "Due sagome sotto le nuvole", zh: "云下的两个身影",
    alt: "Incisione: due sagome bianche simili a uccelli, una con la cresta e una con lunghi capelli, stanno su un mare grigio sotto un cielo azzurro punteggiato di nuvole." },
  { n: 3,  file: "opera-03.jpg", it: "La casa che trasloca", zh: "搬家的房子",
    alt: "Incisione: una casa con un volto disegnato sulla facciata viaggia su un carretto rosa insieme a un albero in gabbia e a un piccolo animale bianco, su colline verdi." },
  { n: 4,  file: "opera-04.jpg", it: "Il taxi con le zampe", zh: "长腿的出租车",
    alt: "Incisione: un taxi rosso sorretto da lunghe zampe animali attraversa un prato verde con due passeggeri affacciati ai finestrini e nuvole bianche nel cielo." },
  { n: 5,  file: "opera-05.jpg", it: "Fuoco d'artificio da poltrona", zh: "躺椅上的烟火",
    alt: "Incisione: una donna distesa su una chaise longue arancione tiene in mano una stella filante che esplode in scintille rosse su fondo bianco e giallo." },
  { n: 6,  file: "opera-06.jpg", it: "Abbraccio alla finestra", zh: "窗前的拥抱",
    alt: "Incisione: un bambino giallo abbraccia un fantasma bianco davanti a una finestra; fuori si vedono panni stesi, un arcobaleno e la pioggia che riga la stanza." },
  { n: 7,  file: "opera-07.jpg", it: "La scala sul volto", zh: "脸上的梯子",
    alt: "Incisione: un volto gigantesco disteso come una duna; una scaletta è appoggiata alla guancia e piccole figure bianche lo scalano, sullo sfondo una palma e un tramonto." },
  { n: 8,  file: "opera-08.jpg", it: "In attesa dell'ascensore", zh: "等电梯",
    alt: "Incisione: una figura dal corpo maculato siede su una lunga panca marrone davanti alle porte verdi di un ascensore, in un corridoio giallo." },
  { n: 9,  file: "opera-09.jpg", it: "Braccia aperte sulla collina rosa", zh: "粉色山丘上张开双臂",
    alt: "Incisione: una figura sorridente con lunghi capelli spalanca le braccia in cima a una collina rosa fiorita, contro un cielo azzurro nuvoloso." },
  { n: 10, file: "opera-10.jpg", it: "Palloncini nel corridoio", zh: "走廊里的气球",
    alt: "Incisione monocroma: un bambino con abito a pois attraversa una soglia circondato da grandi palloncini grigi che galleggiano nel corridoio." },
  { n: 11, file: "opera-11.jpg", it: "Il lenzuolo dei sensi", zh: "五官的床单",
    alt: "Incisione: un grande lenzuolo steso al filo è diviso in riquadri gialli, bianchi e azzurri, ciascuno con un occhio, un naso, una bocca o un orecchio disegnato." },
  { n: 12, file: "opera-12.jpg", it: "Discesa", zh: "下坡",
    alt: "Incisione: una figura accovacciata scende su un monopattino lungo un pendio innevato, con alberi scuri e una recinzione sulla linea dell'orizzonte." },
  { n: 13, file: "opera-13.jpg", it: "Seduto sull'aereo", zh: "坐在飞机上",
    alt: "Incisione: una piccola figura gialla siede su un aereo bianco posato tra il mare e un prato verde, sotto nuvole allungate e grigie." },
  { n: 14, file: "opera-14.jpg", it: "La signora con il fiore", zh: "拿花的女人",
    alt: "Incisione: una figura bianca dal becco d'anatra, in gonna nera, tiene un piccolo fiore viola in un prato verde recintato, con una casetta sullo sfondo." },
  { n: 15, file: "opera-15.jpg", it: "Il viaggio in automobile", zh: "汽车旅行",
    alt: "Incisione: due figure dai volti squadrati siedono dentro un'automobile rossa vista dal parabrezza, mentre un sole a forma di fiore giallo brilla sopra la campagna." },
  { n: 16, file: "opera-16.jpg", it: "La festa", zh: "派对",
    alt: "Incisione: due bambine con cappellini da festa si scambiano un oggetto rosso sotto una fila di bandierine colorate, su fondo verde intenso." },
  { n: 17, file: "opera-17.jpg", it: "La casa che fabbrica nuvole", zh: "造云的房子",
    alt: "Incisione: una casa rosa e azzurra sul mare emette dal comignolo una grande nuvola bianca abitata da due fantasmini, con scie di arcobaleno nel cielo." },
  { n: 18, file: "opera-18.jpg", it: "L'automobilina rossa", zh: "红色小汽车",
    alt: "Incisione: due bambini dalle orecchie appuntite in una stanza verde; uno è in piedi su una macchinina rossa a pedali, alla parete un televisore acceso." },
  { n: 19, file: "opera-19.jpg", it: "Il risveglio viola", zh: "紫色的醒来",
    alt: "Incisione: una creatura bianca dalle guance rosa avanza carponi su un letto a fiori, sotto un cielo viola in cui galleggiano isole colorate." },
  { n: 20, file: "opera-20.jpg", it: "Tre in un salvagente", zh: "救生圈里的三个",
    alt: "Incisione: tre figure simili a pinguini stanno dentro un salvagente giallo in una stanza blu, accanto a una tenda rosa e a una lampada a stelo accesa." },
  { n: 21, file: "opera-21.jpg", it: "La candela nella cucina blu", zh: "蓝色厨房里的蜡烛",
    alt: "Incisione: una figura bianca dai lunghi capelli, seduta su uno sgabello in una cucina interamente blu, tiene una candela accesa davanti a sé." },
  { n: 22, file: "opera-22.jpg", it: "La barca-papera", zh: "小鸭船",
    alt: "Incisione: una bambina rema con un bastone dentro una barca a forma di papera gialla, circondata da paperelle che galleggiano sul lago." },
  { n: 23, file: "opera-23.jpg", it: "Il sole nella valigia", zh: "行李箱里的太阳",
    alt: "Incisione: una cassetta aperta a spicchi verdi e arancioni contiene un sole giallo dagli occhi chiusi, circondato da nuvole e fiori." },
  { n: 24, file: "opera-24.jpg", it: "Il pesce e il palloncino", zh: "鱼与气球",
    alt: "Incisione: un grande pesce verde emerge dall'acqua con un palloncino giallo legato alla pinna; dentro la sua bocca spalancata si vede un volto rosa." },
  { n: 25, file: "opera-25.jpg", it: "Lo specchio verde", zh: "绿色的镜子",
    alt: "Incisione: una bambina in un bagno verde piastrellato osserva uno specchio dorato che riflette una stanza diversa da quella in cui si trova." },
  { n: 26, file: "opera-26.jpg", it: "Davanti allo schermo", zh: "屏幕前",
    alt: "Incisione: una figura seduta a un tavolo lavora al computer portatile mentre alle sue spalle, in una stanza blu, un'altra figura fa girare delle palline in aria." },
  { n: 27, file: "opera-27.jpg", it: "Il temporale sul villaggio", zh: "村庄上的暴雨",
    alt: "Incisione: un piccolo villaggio affacciato sull'acqua sotto nuvole scure e pesanti; a destra, lontano, si aprono lingue di fuoco arancione." },
  { n: 28, file: "opera-28.jpg", it: "Il cane sulla nuvola", zh: "云上的狗",
    alt: "Incisione: un cane giallo sta in piedi su una nuvola bianca sospesa sopra colline verdi, mentre dal basso una piccola figura lo osserva a bocca aperta." },
  { n: 29, file: "opera-29.jpg", it: "Le farfalle", zh: "蝴蝶",
    alt: "Incisione: due creature bianche con grandi ali di farfalla arancioni si abbracciano su una foglia, su fondo grigio screziato di macchie." },
  { n: 30, file: "opera-30.jpg", it: "La mano e il pupazzo", zh: "手与玩偶",
    alt: "Incisione: una mano gigantesca solleva per un braccio un piccolo pupazzo verde dal volto nero, su un fondo bianco coperto di pois rossi." },
  { n: 31, file: "opera-31.jpg", it: "Sotto la pioggia, insieme", zh: "雨中相依",
    alt: "Incisione: due figure incappucciate, una arancione e una gialla, si tengono per le spalle camminando lungo una balaustra sotto la pioggia." },
  { n: 32, file: "opera-32.jpg", it: "La passeggiata con il pesce", zh: "与鱼同行",
    alt: "Incisione: un bambino in maglietta verde cammina su un sentiero di montagna accompagnato da un grande pesce argentato che gli sta al fianco." },
  { n: 33, file: "opera-33.jpg", it: "L'automobile con l'ombrello", zh: "带伞的汽车",
    alt: "Incisione di copertina: un bambino guida una piccola automobile verde oliva con un ombrello rosa aperto sopra, su una spiaggia deserta davanti al mare." },
  { n: 34, file: "opera-34.jpg", it: "Il re dei boschi", zh: "森林之王",
    alt: "Incisione: un volto giallo con una piccola corona dorata occupa il primo piano; una mano bianca gli sfiora la guancia, sullo sfondo un lago e una pineta al tramonto." },
  { n: 35, file: "opera-35.jpg", it: "I fuochi d'artificio", zh: "烟花",
    alt: "Incisione: un fuoco d'artificio dorato esplode sopra un palazzo rosa dalle finestre nere; in basso una figura alza il braccio, a una finestra si affaccia un gatto bianco." },
  { n: 36, file: "opera-36.jpg", it: "Sulla soglia", zh: "门槛上",
    alt: "Incisione: una figura dal lungo pelo scuro e dal muso appuntito attraversa una porta gialla portando una borsa verde, lasciandosi dietro una scarpa." },
  { n: 37, file: "opera-37.jpg", it: "Il gonfiabile nel campo", zh: "田野里的充气圈",
    alt: "Incisione: una creatura bianca è distesa su un gonfiabile giallo in un campo al tramonto, accanto a un albero spoglio, mentre il vento porta via piccoli detriti." },
  { n: 38, file: "opera-38.jpg", it: "La stanza con la poltrona rossa", zh: "红椅子的房间",
    alt: "Incisione: una poltrona rossa girevole al centro di una stanza blu, con tre quadri appesi alla parete e un vaso rosa di fiori accanto." },
  { n: 39, file: "opera-39.jpg", it: "Il concerto sotto la luna", zh: "月下的演奏",
    alt: "Incisione notturna: un cane bianco con maglione rosso suona una chitarra elettrica davanti a un microfono, di fronte a una folla di piccole figure colorate, sotto una grande luna dorata." },
  { n: 40, file: "opera-40.jpg", it: "La porta gialla", zh: "黄色的门",
    alt: "Incisione: una figura entra da una porta gialla in una stanza dove un tavolo rosa regge una pila di libri e una pianta, con bolle bianche sospese nell'aria." },
  { n: 41, file: "opera-41.jpg", it: "La barca con le ciambelle", zh: "甜甜圈船",
    alt: "Incisione: una piccola figura a righe rosse osserva un'imbarcazione bianca le cui ruote sono due grandi ciambelle, ormeggiata a un molo a strisce." },
  { n: 42, file: "opera-42.jpg", it: "Tre in città", zh: "城市里的三个",
    alt: "Incisione: tre figure bianche dai volti stupiti stanno ferme al bordo di una strada trafficata, tra autobus rossi e blu in movimento sfocato." },
  { n: 43, file: "opera-43.jpg", it: "La balena e l'arcobaleno", zh: "鲸鱼与彩虹",
    alt: "Incisione: una grande forma bianca simile a una balena emerge da un mare scuro; sul suo dorso una scaletta e, dietro, un arcobaleno diffuso." },
  { n: 44, file: "opera-44.jpg", it: "L'altalena sul mare", zh: "海上的秋千",
    alt: "Incisione: due figure sulla riva sotto una luna piena; una si dondola su un'altalena appesa alla scogliera mentre l'altra le tiene la mano." },
  { n: 45, file: "opera-45.jpg", it: "Tre profili nel deserto", zh: "沙漠中的三张侧脸",
    alt: "Incisione: tre profili umani si sovrappongono in trasparenza su un paesaggio di dune rosse e cielo azzurro." },
  { n: 46, file: "opera-46.jpg", it: "Il bruco e il viandante", zh: "毛虫与旅人",
    alt: "Incisione: una creatura grigia dalle molte zampe attraversa una collina verde a pois portando sul dorso una figura dorata dal volto assorto." },
  { n: 47, file: "opera-47.jpg", it: "Il fantasma con i fiori", zh: "捧花的幽灵",
    alt: "Incisione: un fantasma bianco con cappuccio viola raccoglie un mazzo di fiori in una stanza rosa, sotto un quadro a motivi floreali." },
  { n: 48, file: "opera-48.jpg", it: "Il mantello di stelle", zh: "星星斗篷",
    alt: "Incisione: una figura con una piccola corona e un mantello giallo coperto di stelle nere è affacciata a una finestra, in una notte piena di scintille." }
];

/* Numeri romani: la numerazione delle lastre segue l'uso delle
   cartelle d'incisione (I, II, III … XLVIII). */
function romano(num) {
  const tavola = [[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
  let out = "";
  for (const [valore, segno] of tavola) {
    while (num >= valore) { out += segno; num -= valore; }
  }
  return out;
}
