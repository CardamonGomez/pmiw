function diccionarioDeHistoria(){
historia={
  0:
{
 texto:"¡Buen dia Abeja! Tenes mucho polen que recolectar hoy",
  unicaOpcion:{texto:"Salir del panal a buscar flores", siguiente:1}
},
  1:
{
  texto:"Encontraste flores. Pero se ven raras...",
  opcionA:{texto:"acercarse", siguiente:2},
  opcionB:{texto:"seguir buscando", siguiente:4}
},
2 :
{
 texto: "Las flores estan mas comodas que nunca",
 unicaOpcion:{ texto: "Decidis dormir un poco", siguiente:3}
},
 3:
{ texto: "MORISTE Las flores tenian pesticida",
 opcionA:{texto:"VOLVER AL INICIO", siguiente:-1},
 opcionB: {texto: "VER CREDITOS", siguiente: -2}
},
 4:
 { texto:" ¿Donde crees que podes encontrar flores?",
 opcionC:{texto: "En esa casa", siguiente:5},
 opcionD: {texto: " En el bosque", siguiente:8},
 opcionE: {texto: "En la pradera", siguiente:8}
 },
 5:
 {texto: "¡Hay muchas flores aca! pero cuidado tambien hay humanos.",
 opcionA:{texto: "seguir buscando flores", siguiente: 6},
 opcionB: {texto: "regresar", siguiente:4}
 },
 6:
 { texto: "¡Oh no los humanos intentan atraparte!",
 unicaOpcion:{ texto: "Intentar escapar", siguiente:7}
 },
 7:
 {texto:"MORISTE Los humanos te atraparon",
 opcionA:{texto:"VOLVER AL INICIO", siguiente:-1},
 opcionB: {texto: "VER CREDITOS", siguiente: -2}
 },
 8:
 {texto:"El sol empieza a esconderse y estas muy lejos de casa",
 opcionA:{texto:"Volver a la colmena", siguiente:12},
 opcionB:{texto:"Seguir buscando", siguiente: 9}
 },
 9:
 {texto:"Encontraste una colmena, pero no es la tuya...",
 opcionA:{texto:"Volver a tu colmena", siguiente:12},
 opcionB:{texto:"Acercarse", siguiente:10}
 },
 10:
 {texto: "ABEJA DESCONOCIDA: ¿Estas perdida? Acercate no tengas miedo",
 unicaOpcion:{texto:"Entrar a la colmena", siguiente: 11}
 },
 11:
 {texto:"FELICIDADES Fuiste adoptada por las nuevas abejas y lograste sobrevivir el dia",
 opcionA:{texto:"VOLVER AL INICIO", siguiente:-1},
 opcionB: {texto: "VER CREDITOS", siguiente: -2}
 },
 12:
 {texto:"Oh no la lluvia te dificulta volar",
 unicaOpcion:{texto:"Buscar refugio",siguiente:13}
 },
 13:
 {texto:"MORISTE Las gotas de lluvia te aplastaron",
 opcionA:{texto:"VOLVER AL INICIO", siguiente:-1},
 opcionB: {texto: "VER CREDITOS", siguiente: -2}
 }
}
}


function botones(){
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
  
  botonC={
        xTexto: width/12+35,
    yTexto:height / 4 * 3 + 42.5,
   ancho:145,
    largo: 46,
  vertices: [
        { x: width/12+35, y: height / 4 * 3 + 42.5 },
        { x: width/12+180,   y: height / 4 * 3 + 42.5 },
        { x: width/12+215,              y: height / 4 * 3 + 42.5+ 23 },
        { x: width/12+180,   y: height / 4 * 3 + 100-10 },
        { x: width/12+35,           y: height / 4 * 3 + 100-10 },
        { x: width / 12 ,       y: height / 4 * 3 + 42.5+ 23 }
      ]
  }
  botonD={
        xTexto: width/12+35+215,
    yTexto:height / 4 * 3 + 42.5,
   ancho:145,
    largo: 46,
  vertices: [
        { x: width/12+35+215, y: height / 4 * 3 + 42.5 },
        { x: width/12+180+215,   y: height / 4 * 3 + 42.5 },
        { x: width/12+215+215,              y: height / 4 * 3 + 42.5+ 23 },
        { x: width/12+180+215,   y: height / 4 * 3 + 100-10 },
        { x: width/12+35+215,           y: height / 4 * 3 + 100-10 },
        { x: width / 12+215 ,       y: height / 4 * 3 + 42.5+ 23 }
      ]
  }
  
  botonE={
        xTexto: width/12+35+215*2,
    yTexto:height / 4 * 3 + 42.5,
   ancho:145,
    largo: 46,
  vertices: [
        { x: width/12+35+215*2, y: height / 4 * 3 + 42.5 },
        { x: width/12+180+215*2,   y: height / 4 * 3 + 42.5 },
        { x: width/12+215+215*2,              y: height / 4 * 3 + 42.5+ 23 },
        { x: width/12+180+215*2,   y: height / 4 * 3 + 100-10 },
        { x: width/12+35+215*2,           y: height / 4 * 3 + 100-10 },
        { x: width / 12+215*2 ,       y: height / 4 * 3 + 42.5+ 23 }
      ]
  }
}
