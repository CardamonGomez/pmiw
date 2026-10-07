const pantallaInicio = -1;
let imgInicio;
let botones;
let botonComenzar;
let estadoActual = pantallaInicio;

let historia={ 
  0:{
    texto: "buen dia. Eres una abeja en una colmena y recien te despertas",
    siguiente: 1
  },
  1:{
  texto: "Salis a buscar polen para hacer tu miel",
  siguiente: 2
},
 2:{
 texto: "Encontraste flores. Pero se ven raras",
    opcionA:{ texto: "acercarse", siguiente: 4},
    opcionB:{ texto: "irse", siguiente: 5}
    }
    }



function preload(){
imgInicio= loadImage("assets/imginicio.jpg");
}

function setup() {
createCanvas(800,450);

 botonComenzar = {
  texto: "COMENZAR",
  xTxComenzar: width/2,
  yTxComenzar:height / 3 * 2 + 35,
    vertices: [
      { x: width / 4,           y: height / 3 * 2 },
      { x: width - width / 4,   y: height / 3 * 2 },
      { x: width - width / 4 + 35, y: height / 3 * 2 + 35 },
      { x: width - width / 4,   y: height / 3 * 2 + 70 },
      { x: width / 4,           y: height / 3 * 2 + 70 },
      { x: width / 4 - 35,       y: height / 3 * 2 + 35 }
    ]
  }
 
  botonA = {

  x: 60,
  y: 290,
  ancho: 250,
  alto: 55
}
 
}


function draw() {
  background(255);
  if (estadoActual == pantallaInicio) {
dibujarPantallaInicio();
  }else {

    dibujarHistoria();
  }

function dibujarHistoria(){
let nodo = estadoActual;
if (nodo == 0) {
  textAlign(CENTER,CENTER);
  text(historia[0].texto, width/2, height/2);
}
}

 push();
 textAlign(LEFT);
    noFill();
  stroke(255,0,0);
rect(0,0,width,height);
text(mouseX+","+ mouseY, 0,20);
pop();
}

function mousePressed() {
if (estadoActual === pantallaInicio) {
    if (clicSobre(botonComenzar.vertices[0].x, botonComenzar.vertices[0].y, width/2,70)) {
      estadoActual = 0; 
    }
  }
}
  
function clicSobre(x, y, ancho, alto) {

  if (
    mouseX >= x &&
    mouseX <= x + ancho &&
    mouseY >= y &&
    mouseY <= y + alto
  ) {

    return true;

  } else {

    return false;
  }
}
