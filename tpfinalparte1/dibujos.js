
function dibujarPantallaInicio() {
image(imgInicio,0,0,width,height);
  fill(amarillo);
  noStroke();
  beginShape();
  for (let i = 0; i < botonComenzar.vertices.length; i++) {
    vertex(botonComenzar.vertices[i].x, botonComenzar.vertices[i].y);
  }
  endShape(CLOSE);
  fill(marron);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(botonComenzar.texto, botonComenzar.xTxComenzar, botonComenzar.yTxComenzar);
}

function dibujarPantallaCreditos() {
  image(imgCreditos, 0, 0, width, height);
  if(frameCount%15==0){
    frameMoon++;
    if(frameMoon>6){
      frameMoon=1;
    }
    frameFio++;
    if(frameFio>9){
      frameFio=1;
    }
  }
  image(moon[frameMoon],0,200,300,300);
  image(fio[frameFio],530,220,250,250);
fill(67,44,20);
  textAlign(CENTER);
  let y = posicionCreditos;
  textSize(35);
  text("CRÉDITOS", width/2, y);

  textSize(20);
  text("Trabajo Final - Parte 1", width/2,y+ 120);

  textSize(16);
  text("Programación para Medios Interactivos", width/2,y+ 160);
  text("orientada a las Tecnologías Web", width/2,y+ 185);

  textSize(18);
  text("Autoras de la obra:", width/2, y+230);

  textSize(16);
  text("Cardamon Gomez", width/2,y+ 260);
  text("Legajo: 127458/3", width/2,y+285);

  text("Fiorella Jazmín Furnel", width/2, y+320);
  text("Legajo: 125577/0", width/2, y+345);

  text("Comisión 3", width/2,y+ 385);
  text("Docente: David Bedoian", width/2,y+ 415);
posicionCreditos=posicionCreditos-2;
if(posicionCreditos<-400){
  posicionCreditos=500;
}
}

function dibujarHistoria() {
  let nodo = estadoActual;
  for (let i= 0; i<= 13; i++) {
    if (nodo== i) {
      image(img[i], 0, 0, width, height);
    }
  }

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
  }

  if (nodo === 0 || nodo === 2 || nodo===6 || nodo===10 || nodo===12) {
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

  if (nodo==1 || nodo== 3|| nodo===5||nodo===7||nodo===8||nodo===9||nodo===11||nodo===13) {
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

  if ( nodo===4) {
    //BOTON C
    fill(marron);
    noStroke();
    beginShape();
    for (let i = 0; i < botonC.vertices.length; i++) {
      vertex(botonC.vertices[i].x, botonC.vertices[i].y);
    }
    endShape();

    fill(amarilloTx);
    textSize(18)
      stroke(3);
    textAlign(CENTER, CENTER);
    text(historia[nodo].opcionC.texto, botonC.xTexto, botonC.yTexto, botonC.ancho, botonC.largo);

    //BOTON D
    fill(marron);
    noStroke();
    beginShape();
    for (let i = 0; i < botonD.vertices.length; i++) {
      vertex(botonD.vertices[i].x, botonD.vertices[i].y);
    }
    endShape();

    fill(amarilloTx);
    textSize(18)
      stroke(3);
    textAlign(CENTER, CENTER);
    text(historia[nodo].opcionD.texto, botonD.xTexto, botonD.yTexto, botonD.ancho, botonD.largo);
    //BOTON E
    fill(marron);
    noStroke();
    beginShape();
    for (let i = 0; i < botonE.vertices.length; i++) {
      vertex(botonE.vertices[i].x, botonE.vertices[i].y);
    }
    endShape();

    fill(amarilloTx);
    textSize(18)
      stroke(3);
    textAlign(CENTER, CENTER);
    text(historia[nodo].opcionE.texto, botonE.xTexto, botonE.yTexto, botonE.ancho, botonE.largo);
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
