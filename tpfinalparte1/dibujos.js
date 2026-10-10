function dibujarPantallaInicio() {
  image(imgInicio, 0, 0);
  noFill();
  beginShape();
  for (let i = 0; i < botonComenzar.vertices.length; i++) {
    vertex(botonComenzar.vertices[i].x, botonComenzar.vertices[i].y);
  }
  endShape(CLOSE);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(botonComenzar.texto, botonComenzar.xTxComenzar, botonComenzar.yTxComenzar);
}

function dibujarHistoria() {
  let nodo = estadoActual;
  //IMAGENES
  for (let i= 0; i<= 13; i++) {
    if (nodo== i) {
      image(img[i], 0, 0, width, height);
    }
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
  }
  //BOTON UNICO DIBUJO
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

  //BOTONES DOS OPCIONES
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
    //bton C
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

    //boton D
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
