//definisco la mia font
let myFont;
//per testo a scorrimento
let x = 0;
//definisco le due immagini
let myPlayimg;
let myTipsimg;

function preload() {
//carico la mia font dagli assets
  myFont = loadFont("./assets/font/Sporting_Grotesque-Regular_web.otf");
  //carico foto dagli assets
  myPlayimg = loadImage("./assets/images/feelinblue.png");
  myTipsimg = loadImage("./assets/images/sadtips.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30, 100, 425);

  //author
  fill(0);
  textFont(myFont);
  textSize(windowWidth / 85, windowHeight / 85);
  text("@BLUEBANTO", windowWidth / 1.13, windowHeight - 720);


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
    "IT'S OKAY NOT TO FEEL AT YOUR 100% EVERY SINGLE DAY, DON'T BE ASHAMED AND CRY IF YOU NEED TO, YOU'LL FEEL BETTER!",
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
      "https://open.spotify.com/playlist/3iH1AljcRQVj0L9947zdSo?si=6c2816b991f34ea3"
    );
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
