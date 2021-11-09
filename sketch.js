//definisco i temi dei bottoni
const uno = "HAPPY";
const due = "SAD";
const tre = "ANGRY";

//carico la font dagli assets
var myFont;

//immagine titolo di sfondo
let myTitleimg;

//valore per far muovere i testi a scorrimento
let x = 0;

//dichiaro i bottoni
let buttons;

//per far muovere i miei bottoni
let iterator = 0;

let sad;
let happy;
let angry;

function preload() {
  //carico font diverse da quelle disponibili sulla piattaforma di google fonts
  //creo due variabili, una per ognuna delle due font adoperate (myFont e mysecondFont)
  myFont = loadFont("assets/font/Sporting_Grotesque-Regular_web.otf");
  myTitleimg = loadImage("assets/images/TITOLOLAVORO_.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Creo i bottoni
  sad = createElement("sad", due).class("sad");
  happy = createDiv("", uno).id("happy");
  let happyinside = createDiv("HAPPY", uno).id("happyinside");
  happyinside.parent(happy);
  angry = createElement("angry", tre).class("angry");

  sad.mousePressed(clickSad);
  happy.mousePressed(clickHappy);
  angry.mousePressed(clickAngry);
}

function draw() {
  background(221, 223, 224);

  //posiziono immagine titolo
  imageMode(CENTER);
  image(
    myTitleimg,
    windowWidth / 2,
    windowHeight / 2,
    myTitleimg.width / 1.3,
    myTitleimg.height / 1.5
  );

  //TESTO A SCORRIMENTO SUPERIORE_CREDITI E TITOLO

  fill(0);
  strokeWeight(0.5);
  textFont(myFont);
  textSize(windowWidth / 85, windowHeight / 85);
  text(
    "@BLUEBANTO                                              HOW DO YOU FEEL?                                              INTERACTIVE EMOTIONS VISUALIZER",
    x,
    windowHeight - 720
  );

  //TESTO A SCORRIMENTO INFERIORE_SPIEGAZIONE PROGETTO
  fill(0);
  textFont(myFont);
  textSize(windowWidth / 85, windowHeight / 85);
  text(
    "HI! THIS IS HOW DO YOU FEEL, A NEW WAY TO INTERACT WITH YOUR FEELINGS. CLICK THE BUTTON THAT BEST FITS YOUR MOOD",
    x,
    windowHeight - 15
  );

  if (x < -1800) {
    x = windowWidth;
  }
  x--;

  //per far muovere i miei bottoni
  iterator = iterator + 0.18;
  let x1 = noise((iterator + 10 * iterator) / 400 + 4) * windowWidth;
  let y1 = noise((iterator - 10 * iterator) / 400 + 4) * windowHeight;
  happy.position(x1, y1);
  let x2 = noise((iterator + 10 * iterator) / 400 + 8) * windowWidth;
  let y2 = noise((iterator - 10 * iterator) / 400 + 8) * windowHeight;
  sad.position(x2, y2);
  let x3 = noise((iterator + 10 * iterator) / 400 + 12) * windowWidth;
  let y3 = noise((iterator - 10 * iterator) / 400 + 12) * windowHeight;
  angry.position(x3, y3);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//clicco bottone --> mi sposto su un'altra pagina
function clickSad() {
  window.open("feelinblue.html", "_self");
}

//clicco bottone --> mi sposto su un'altra pagina
function clickHappy() {
  window.open("serotonine.html", "_self");
}

//clicco bottone --> mi sposto su un'altra pagina
function clickAngry() {
  window.open("madboutu.html", "_self");
}
