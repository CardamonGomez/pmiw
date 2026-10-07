function dibujarPantallaInicio(){
image(imgInicio,0,0);
noFill();
beginShape();
  for (let i = 0; i < botonComenzar.vertices.length; i++) {
    vertex(botonComenzar.vertices[i].x, botonComenzar.vertices[i].y);
  }
  endShape(CLOSE);
  fill(0);
textAlign(CENTER,CENTER);
textSize(30);
text(botonComenzar.texto,botonComenzar.xTxComenzar,botonComenzar.yTxComenzar);
} 
