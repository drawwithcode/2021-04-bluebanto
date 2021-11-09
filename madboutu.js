let myFont;
let x = 0;
let myPlayimg;
let myTipsimg;

function preload() {
  //carico font diverse da quelle disponibili sulla piattaforma di google fonts
  //creo due variabili, una per ognuna delle due font adoperate (myFont e mysecondFont)
  myFont = loadFont("./assets/font/Sporting_Grotesque-Regular_web.otf");
  myPlayimg = loadImage("./assets/images/madboutu.png");
  myTipsimg = loadImage("./assets/images/angertips.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  /*createElement("button1");

  button1.style("my-Button1");
  button1.mouseOver(noLoop);
  button1.mouseOut(loop);*/
}

function draw() {
  background(245, 61, 4);

  //author
  fill(0);
  textFont(myFont);
  textSize(windowWidth / 85, windowHeight / 85);
  text("@BLUEBANTO", windowWidth / 1.13, windowHeight - 720);
  /*function mouseClicked() {
    window.open("https://www.instagram.com/bluebanto/?hl=it", "_self");
  }*/

  //COPERTINA PLAYLIST
  imageMode(CENTER);
  image(
    myPlayimg,
    windowWidth / 1.43,
    windowHeight / 2,
    myPlayimg.width / 3.2,
    myPlayimg.height / 3.2
  );

  //IMMAGINE TIPS
  imageMode(CENTER);
  image(
    myTipsimg,
    windowWidth / 4,
    windowHeight / 2,
    myTipsimg.width / 3.57,
    myTipsimg.height / 3.57
  );

  //testo scorrimento info
  fill(0);
  textFont(myFont);
  textSize(windowWidth / 85, windowHeight / 85);
  text(
    "ARE U FEELIN' MAD TODAY? DON'T GET ANGRY, WRINKLES WILL RUIN YOUR CUTE FACE",
    x,
    windowHeight - 15
  );

  if (x < -1800) {
    x = windowWidth;
  }
  x--;
}

//clicco per reindirizzare alla playlist spotify
function mousePressed() {
  if (
    //da definire la posizione di x
    //mouseX > (windowWidth - myPlayimg.width / 3.2) / 2 &&
    //mouseX < height - (windowWidth - myPlayimg.width / 3.2) / 2
    mouseY > (windowHeight - myPlayimg.height / 3.2) / 2 &&
    mouseY < height - (windowHeight - myPlayimg.height / 3.2) / 2
  ) {
    window.open(
      "https://open.spotify.com/playlist/0rNKKRue6CjtRWndvktQdM?si=4677875325c94153"
    );
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
