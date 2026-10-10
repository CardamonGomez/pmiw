const pantallaInicio = -1;
let estadoActual = pantallaInicio;

let img=[];
let imgInicio;

let botonComenzar;
let botonA;
let botonB;
let botonC;
let botonD;
let botonE;

let amarillo;
let amarilloTx;
let marron;
let historia;

diccionarioDeHistoria();


function preload() {
  imgInicio = loadImage("assets/img-1.jpg");
  for ( let i =0;i <= 13; i++){
    let path= "assets/img" + i +".jpeg";
    img[i]= loadImage(path);
  }
}

function setup() {
  createCanvas(800, 450);

  amarillo=color (242, 183, 12, 125);
  amarilloTx= color (242, 183, 12);
  marron= color (67, 44, 20);

   botones();
}

function draw() {
  background(255);
  // 
  if (estadoActual == pantallaInicio) {
    dibujarPantallaInicio();
  } else {
  dibujarHistoria();
  }
  //AYUDAS
  push();
  textAlign(LEFT);
  noFill();
  stroke(255, 0, 0);
  rect(0, 0, width, height);
  text(mouseX+","+ mouseY, 0, 20);
  pop();
}

function mousePressed() {
  if (estadoActual === pantallaInicio) {
    if (clicSobre(botonComenzar.vertices[0].x, botonComenzar.vertices[0].y, width/2, 70)) {
      estadoActual = 0;
    }
  }
 
  if (estadoActual === 0) {
    if (clicSobre(botonUnico.vertices[0].x, botonUnico.vertices[0].y,  width - width / 2, 46)) {
      estadoActual = 1;
    }
  }
  else if (historia[estadoActual] && historia[estadoActual].unicaOpcion) {
    if (clicSobre(botonUnico.vertices[0].x, botonUnico.vertices[0].y, width - width / 2, 46)) {
      
      estadoActual = historia[estadoActual].unicaOpcion.siguiente;
    }
  } 
  else if (historia[estadoActual] && historia[estadoActual].opcionA) {
    if (clicSobre(botonA.vertices[0].x, botonA.vertices[0].y, width/2 - (width/12 + 70), 46)) {
      estadoActual = historia[estadoActual].opcionA.siguiente;
    }
    if (clicSobre(botonB.vertices[0].x, botonB.vertices[0].y, width/2 - (width/12 + 70), 46)) {
      estadoActual = historia[estadoActual].opcionB.siguiente;
    }
  }
  else if (historia[estadoActual] && historia[estadoActual].opcionC){
  if (clicSobre(botonC.vertices[0].x, botonC.vertices[0].y, width/2 - (width/12 + 70), 46)) {
      estadoActual = historia[estadoActual].opcionC.siguiente;
    }
     if (clicSobre(botonD.vertices[0].x, botonD.vertices[0].y, width/2 - (width/12 + 70), 46)) {
      estadoActual = historia[estadoActual].opcionD.siguiente;
    }
    if (clicSobre(botonE.vertices[0].x, botonE.vertices[0].y, width/2 - (width/12 + 70), 46)) {
      estadoActual = historia[estadoActual].opcionE.siguiente;
    }
  }

}
