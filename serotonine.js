//definisico la font che andrò ad usare
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
  myPlayimg = loadImage("./assets/images/serotonine.png");
  myTipsimg = loadImage("./assets/images/happytips.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(175, 242, 2);

  //author
  fill(0);
  textFont(myFont);
  textSize(windowWidth / 85, windowHeight / 85);
  text("@BLUEBANTO", windowWidth / 1.13, windowHeight - 720);


  //IMMAGINE TIPS
  imageMode(CENTER);
  image(
    myTipsimg,
    windowWidth / 4,
    windowHeight / 2,
    myTipsimg.width / 3.57,
    myTipsimg.height / 3.57
  );

  //COPERTINA PLAYLIST
  imageMode(CENTER);
  image(
    myPlayimg,
    windowWidth / 1.43,
    windowHeight / 2,
    myPlayimg.width / 3.2,
    myPlayimg.height / 3.2
  );

  //testo scorrimento info
  fill(0);
  textFont(myFont);
  textSize(windowWidth / 85, windowHeight / 85);
  text(
    "HAPPINES IS NICE, BUT HAVE YOU EVER TRIED TO FEEL 10000 TIMES BETTER? MAYBE THIS IS THE RIGHT TIME TO GET SOME SEROTONINE!",
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
      "https://open.spotify.com/playlist/3uxfcrpSHJJLAvHtYEJMNN?si=4954c18a4dcf4737"
    );
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
