const pantallaInicio = -1;

let imgInicio;
let imgUno;
let imgDos;

let botones;
let botonComenzar;
let estadoActual = pantallaInicio;

let amarillo;
let amarilloTx;
let marron;


let historia={
  0:
{
 texto:"¡Buen dia Abeja! Tenes mucho polen que recolectar hoy",
  unicaOpcion:{texto:"Salir del panal a buscar flores", siguiente:1}
},
  1:
{
  texto:"Encontraste flores. Pero se ven raras...",
  opcionA:{texto:"acercarse", siguiente:3},
  opcionB:{texto:"irse", siguiente:5}
}
}



function preload() {
  imgInicio = loadImage("assets/imginicio.jpg");
  imgUno = loadImage ("assets/imgUno.jpeg");
  imgDos=loadImage ("assets/imgDos.jpeg");
}

function setup() {
  createCanvas(800, 450);

  amarillo=color (242, 183, 12, 125);
  amarilloTx= color (242, 183, 12);
  marron= color (67, 44, 20);


//OBEJTOS BOTONES
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

   boton ={

    xTexto: width/12,
    yTexto:height / 4 * 3-15,
    ancho: width - (width / 12)*2,
    largo: 57.5,
      vertices: [
        { x: width / 12,           y: height / 4 * 3-15 },
        { x: width - width / 12,   y: height / 4 * 3-15 },
        { x: width - width / 12 + 35, y: height / 4 * 3 + 42.5 },
        { x: width - width / 12,   y: height / 4 * 3 + 100 },
        { x: width / 12,           y: height / 4 * 3 + 100 },
        { x: width / 12 - 35,       y: height / 4 * 3 + 42.5 }
      ]
   }

   botonUnico={
     xTexto: width/4,
    yTexto:height / 4 * 3 + 42.5,
   ancho: width - width / 2,
    largo: 46,
   vertices: [
        { x: width/4,            y: height / 4 * 3 + 42.5 },
        { x: width - width / 4,   y: height / 4 * 3 + 42.5 },
        { x: width - width / 4 + 35, y: height / 4 * 3 + 42.5+ 23 },
        { x: width - width / 4,   y: height / 4 * 3 + 100-10 },
        { x: width/4,           y: height / 4 * 3 + 100-10 },
        { x: width / 4-35 ,       y: height / 4 * 3 + 42.5+ 23 }
      ]
   }

    botonA = {
      xTexto: width/12+35,
    yTexto:height / 4 * 3 + 42.5,
   ancho: width/2-(width/12+70),
    largo: 46,
     vertices: [
        { x: width/12+35, y: height / 4 * 3 + 42.5 },
        { x: width/2-35,   y: height / 4 * 3 + 42.5 },
        { x: width/ 2,              y: height / 4 * 3 + 42.5+ 23 },
        { x: width/2-35,   y: height / 4 * 3 + 100-10 },
        { x: width/12+35,           y: height / 4 * 3 + 100-10 },
        { x: width / 12 ,       y: height / 4 * 3 + 42.5+ 23 }
      ]
  }
  
 botonB = {
      xTexto: width/12+35+(width/2-(width/12+70)+70),
    yTexto:height / 4 * 3 + 42.5,
   ancho: width/2-(width/12+70),
    largo: 46,
     vertices: [
        { x: width/12+35 +(width/2-(width/12+70)+70), y: height / 4 * 3 + 42.5 },
        { x: width/2-35 +(width/2-(width/12+70)+70),   y: height / 4 * 3 + 42.5 },
        { x: width/ 2 +(width/2-(width/12+70)+70),              y: height / 4 * 3 + 42.5+ 23 },
        { x: width/2-35 +(width/2-(width/12+70)+70),   y: height / 4 * 3 + 100-10 },
        { x: width/12+35 +(width/2-(width/12+70)+70),           y: height / 4 * 3 + 100-10 },
        { x: width / 12 +(width/2-(width/12+70)+70),       y: height / 4 * 3 + 42.5+ 23 }
      ]
  }
  
}


function draw() {
  background(255);
  // 
  if (estadoActual == pantallaInicio) {
    dibujarPantallaInicio();
  } else {

    dibujarHistoria();
  }
  
//FUNCION DIBUJAR HITORIA
  function dibujarHistoria() {
    let nodo = estadoActual;
//IMAGENES
    if (nodo == 0) {
      image(imgUno, 0, 0, width, height);
    }
    if (nodo== 1){
    image (imgDos,0,0,width,height);
    
    }
    
 //FONDO BOTON AMARILLO  TEXTO MARRON DIBUJO
    if (nodo !== -1|-2) {
      fill(amarillo);
      noStroke();
      beginShape();
      for (let i = 0; i < boton.vertices.length; i++) {
        vertex(boton.vertices[i].x, boton.vertices[i].y);
      }
      endShape();
      fill(marron);
      textSize(20)
        stroke(3);
      textAlign(CENTER, CENTER);
      text(historia[nodo].texto, boton.xTexto, boton.yTexto, boton.ancho, boton.largo);
      
 //BOTON UNICO DIBUJO
      if (nodo==0) {
        fill(marron);
        noStroke();
        beginShape();
        for (let i = 0; i < botonUnico.vertices.length; i++) {
          vertex(botonUnico.vertices[i].x, botonUnico.vertices[i].y);
        }
        endShape();

        fill(amarilloTx);
        textSize(20)
          stroke(3);
        textAlign(CENTER, CENTER);
        text(historia[nodo].unicaOpcion.texto, botonUnico.xTexto, botonUnico.yTexto, botonUnico.ancho, botonUnico.largo);
      }
      
      //BOTONES DOS OPCIONES
      if (nodo==1){
 //BOTON A
      fill(marron);
        noStroke();
        beginShape();
        for (let i = 0; i < botonA.vertices.length; i++) {
          vertex(botonA.vertices[i].x, botonA.vertices[i].y);
        }
        endShape();

        fill(amarilloTx);
        textSize(20)
          stroke(3);
        textAlign(CENTER, CENTER);
        text(historia[nodo].opcionA.texto, botonA.xTexto, botonA.yTexto, botonA.ancho, botonA.largo);
        
//BOTON B
        
        fill(marron);
        noStroke();
        beginShape();
        for (let i = 0; i < botonB.vertices.length; i++) {
          vertex(botonB.vertices[i].x, botonB.vertices[i].y);
        }
        endShape();

        fill(amarilloTx);
        textSize(20)
          stroke(3);
        textAlign(CENTER, CENTER);
        text(historia[nodo].opcionB.texto, botonB.xTexto, botonB.yTexto, botonB.ancho, botonB.largo);
      }
    }
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
  //PANTALLA -1 BOTON COMENZAR
  if (estadoActual === pantallaInicio) {
    if (clicSobre(botonComenzar.vertices[0].x, botonComenzar.vertices[0].y, width/2, 70)) {
      estadoActual = 0;
    }
  }
 //PANTALLA 0 IMG 1 BOTON UNICO
  if (estadoActual === 0) {
    if (clicSobre(botonUnico.vertices[0].x, botonUnico.vertices[0].y,  width - width / 2, 46)) {
      estadoActual = 1;
    }
  }
  //PANTALLA 1 IMG 2 BOTONES DE DOS OPCIONES
  if (estadoActual === 1) {
    if (clicSobre(botonA.vertices[0].x, botonA.vertices[0].y, width/2-(width/12+70), 46)) {
      estadoActual = 2;
    }
    if (clicSobre(botonB.vertices[0].x, botonB.vertices[0].y, width/2-(width/12+70), 46)) {
      estadoActual = 4;
    }
  }
}
