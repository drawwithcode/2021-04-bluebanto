let myFont;
let x = 0;
let myPlayimg;
let myTipsimg;

function preload() {
  //carico font diverse da quelle disponibili sulla piattaforma di google fonts
  //creo due variabili, una per ognuna delle due font adoperate (myFont e mysecondFont)
  myFont = loadFont("./Assets/font/Sporting_Grotesque-Regular_web.otf");
  myPlayimg = loadImage("./Assets/images/serotonine.png");
  myTipsimg = loadImage("./Assets/images/happytips.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  /*createElement("button1");

  button1.style("my-Button1");
  button1.mouseOver(noLoop);
  button1.mouseOut(loop);*/
}

function draw() {
  background(175, 242, 2);

  //author
  fill(0);
  textFont(myFont);
  textSize(windowWidth / 85, windowHeight / 85);
  text("@BLUEBANTO", windowWidth / 1.13, windowHeight - 720);
  /*function mouseClicked() {
    window.open("https://www.instagram.com/bluebanto/?hl=it", "_self");
  }*/

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
