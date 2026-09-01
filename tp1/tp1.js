let fondo;

let arenita = [[], [], [], []];
let entra=0;
let lame=1;
let duerme=2;
let sale=3;

let y=490;
let ancho=40;
let alto=50;

let accionActual= entra;
let contador=0;
let tiempo= 9000;

let tiempoMusica=9000;
let lluvia;
let puertaAbre;
let puertaCierra;

let globo=[7];


function preload() {
  fondo= loadImage("assets/fondo.png");
  arenita[entra][0] = loadImage ("assets/entra_1.png");
  arenita[entra][1] = loadImage ("assets/entra_2.png");
  arenita[entra][2] = loadImage ("assets/entra_3.png");
  arenita[entra][3] = loadImage ("assets/entra_4.png");

  arenita[lame][0] = loadImage ("assets/lame_1.png");
  arenita[lame][1] = loadImage ("assets/lame_2.png");
  arenita[lame][2] = loadImage ("assets/lame_3.png");
  arenita[lame][3] = loadImage ("assets/lame_4.png");

  arenita[duerme][0] = loadImage ("assets/duerme_1.png");
  arenita[duerme][1] = loadImage ("assets/duerme_2.png");

  arenita[sale][0] = loadImage ("assets/sale_1.png");
  arenita[sale][1] = loadImage ("assets/sale_2.png");
  arenita[sale][2] = loadImage ("assets/sale_3.png");
  arenita[sale][3] = loadImage ("assets/sale_4.png");

  globo[0] = loadImage ("assets/dialogo_1.png");
  globo[1] = loadImage ("assets/dialogo_2.png");
  globo[2] = loadImage ("assets/dialogo_3.png");
  globo[3] = loadImage ("assets/dialogo_4.png");
  globo[4] = loadImage ("assets/dialogo_5.png");
  globo[5] = loadImage ("assets/dialogo_6.png");
  globo[6] = loadImage ("assets/dialogo_7.png");
  globo[7] = loadImage ("assets/dialogo_8.png");


  lluvia= loadSound ("assets/rain.mp3");
  puertaAbre= loadSound("assets/doorOpen.mp3");
  puertaCierra= loadSound ("assets/doorClose.mp3");
}

function setup() {
  createCanvas(800, 600);

  userStartAudio()
    lluvia.setVolume(0.5);
  lluvia.loop();
}

function draw() {
  background(0);
  imageMode(CENTER);
  image(fondo, width/2, height/2, fondo.width*2.5, fondo.height*2.5);

 if (millis()>=tiempo) {

    if (y<=492 && y>=318) {
      image(arenita[accionActual][contador], 300, y, ancho, alto);
    }
    if (frameCount % 10===0) {
      contador++;
    }

    if (contador>=arenita[accionActual].length) {
      contador=0;
    }

    if (millis()>=tiempo*2) {
      accionActual= duerme;
      alto=40;
    }
    if (millis()>= tiempo*3) {
      accionActual=sale;
    }

    if (accionActual === entra) {
      if (y > 320) {
        y--;
      } else {
        y = 320;
        accionActual = lame;
      }
    }

    if (accionActual === sale) {
      y++;
    }
  }
}

function mouseClicked() {
  if (accionActual===lame || duerme) {
    image(globo[contador], 300, y, ancho, alto);
  }

  if (frameCount % 10===0) {
    contador++;
  }

  if (contador>=globo[contador].length) {
    contador--;
  }
}
