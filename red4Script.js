function calcular(inicio) {
  var finCurso = new Date();
  finCurso = inicio;

  var clases = 1;

  while (clases < 49) {
    if (diaDeCursado(finCurso)) {
      if (feriados(finCurso)) {
        if (vacaciones(finCurso)) {
          if (document.getElementById("informe") != null) {
            informe(clases, finCurso);
          } else if (document.getElementById("informeClient") != null) {
            informeClient(clases, finCurso);
          } else {
            informeResumido(clases, finCurso);
          }
          clases++;
        }
      }
    }
    finCurso.setDate(finCurso.getDate() + 1);
  }
}

function informe(clases, fecha) {
  var tabla = document.getElementById("eventos");
  switch (clases) {
    //Módulo 1
    case 1:
      crearFila(tabla, clases, fecha, "M1 - T1 - Introducción a QC-QA");
      break;
    case 2:
      crearFila(tabla, clases, fecha, "M1 - T2 - Desarrollo de software 1");
      break;
    case 3:
      crearFila(tabla, clases, fecha, "M1 - T3 - Desarrollo de software 2");
      break;
    case 4:
      crearFila(
        tabla,
        clases,
        fecha,
        "M1 - T4 - ¿Qué es el testing? Necesidad de las pruebas"
      );
      break;
    case 5:
      crearFila(
        tabla,
        clases,
        fecha,
        "M1 - Extra - Herramientas de Observación"
      );
      break;
    case 6:
      crearFila(tabla, clases, fecha, "M1 - Integrador + Día desafíos");
      break;
    //Módulo 2
    case 7:
      crearFila(
        tabla,
        clases,
        fecha,
        "M2 - T5 - Principios y ciclo de vida de testing 1<br>7 pp de las pruebas. Severidad vs Gravedad"
      );
      break;
    case 8:
      crearFila(
        tabla,
        clases,
        fecha,
        "M2 - T6 - Principios y ciclo de vida de testing 2<br>Ciclo vs Ciclo. Sólo nombramos las etapas. Entregables."
      );
      break;
    case 9:
      crearFila(
        tabla,
        clases,
        fecha,
        "M2 - T7 - Plan de Prueba 1<br>Analisis de requrimientos"
      );
      break;
    case 10:
      crearFila(
        tabla,
        clases,
        fecha,
        "M2 - T8 - Plan de Prueba 2<br>Planificación y diseño de pruebas"
      );
      break;
    case 11:
      crearFila(tabla, clases, fecha, "M2 - T9 - Historia de usuario");
      break;
    case 12:
      crearFila(tabla, clases, fecha, "M2 - T10 - Casos de prueba 1");
      break;
    case 13:
      crearFila(tabla, clases, fecha, "M2 - T11 - Casos de prueba 2");
      break;
    case 14:
      crearFila(tabla, clases, fecha, "M2 - Día desafíos");
      break;
    case 15:
      crearFila(tabla, clases, fecha, "M2 - T12 - Metodologías - Kanvan");
      break;
    case 16:
      crearFila(tabla, clases, fecha, "M2 - T13 - Metodologías - Scrum");
      break;
    case 17:
      crearFila(tabla, clases, fecha, "M2 - T14 - Testing Agil");
      break;
    case 18:
      crearFila(tabla, clases, fecha, "M2 - Integrador + Día desafíos");
      break;
    //Módulo 3
    case 19:
      crearFila(
        tabla,
        clases,
        fecha,
        "M3 - T15 - Herramientas para gestión de pruebas<br>Trello"
      );
      break;
    case 20:
      crearFila(
        tabla,
        clases,
        fecha,
        "M3 - T16 - Herramientas para gestión de pruebas<br>Test-link"
      );
      break;
    case 21:
      crearFila(
        tabla,
        clases,
        fecha,
        "M3 - T16 - Herramientas para gestión de pruebas"
      );
      break;
    case 22:
      crearFila(tabla, clases, fecha, "M3 - T17 - Ejecución de las pruebas");
      break;
    case 23:
      crearFila(tabla, clases, fecha, "M3 - T17 - Ejecución de las pruebas");
      break;
    case 24:
      crearFila(tabla, clases, fecha, "M3 - T17 - Ejecución de las pruebas");
      break;
    case 25:
      crearFila(tabla, clases, fecha, "M3 - T18 - Reporte de errores");
      break;
    case 26:
      crearFila(tabla, clases, fecha, "M3 - T18 - Reporte de errores");
      break;
    case 27:
      crearFila(tabla, clases, fecha, "M3 - Día de Desafios");
      break;
    case 28:
      crearFila(tabla, clases, fecha, "M3 - T19 - Testing mobile");
      break;
    case 29:
      crearFila(tabla, clases, fecha, "M3 - T19 - Testing mobile");
      break;
    case 30:
      crearFila(tabla, clases, fecha, "M3 - T20 - Ambiente de prueba");
      break;
    case 31:
      crearFila(tabla, clases, fecha, "M3 - Integrador + Día desafíos");
      break;

    default:
      break;
  }
}

function informeClient(clases, fecha) {
  //agregando las columnas
  let tabla = document.getElementById("eventos");

  //agregar las filas
  switch (clases) {
    case 1:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "OnBoarding",
        "D_1: ok",
        "Firmar Términos y Condiciones esté marcada como realizada <br> ¿Comprendiste los 3 pasos para acceder a tu clase?"
      );
      break;
    case 2:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Guía 1",
        "Día 2: D_2: ok",
        "Firmar Términos y Condiciones esté marcada como realizada <br> ¿Comprendiste los 3 pasos para acceder a tu clase?"
      );
      break;
    case 4:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Guía 2.1",
        "Modulo1_Guia2.1_PSeInt: ok",
        "La actividad 1 - ¿Pudiste resolver todos los ejercicios fundamentales de la Guía 1 PSeInt? esté marcada como realizada <br> La actividad 1. ¿Lograste los objetivos de la Guía? esté marcada como realizada <br> Firmar los Términos y Condiciones esté marcada como realizada"
      );
      break;
    case 7:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Guía 2.2",
        "Modulo1_Guia2.2_PSeInt: ok",
        "2.1 - ¿Pudiste resolver todos los ejercicios fundamentales de esta guía? esté marcada como realizada <br> Firmar los Términos y Condiciones esté marcada como realizada"
      );
      break;
    case 11:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Repaso Guía 2",
        "Modulo1_Guia2_RepasoPSeInt: ok",
        "Firmar los Términos y Condiciones esté marcada como realizada"
      );
      break;
    case 12:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Guía 3",
        "Modulo1_Guia3_PSeInt: ok",
        "2.2 - ¿Pudiste resolver todos los ejercicios fundamentales de esta guía? esté marcada como realizada <br> 2. ¿Lograste los objetivos de la Guía? esté marcada como realizada <br> Firmar los Términos y Condiciones esté marcada como realizada"
      );
      break;
    case 17:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Repaso Guía 3",
        "Modulo1_Guia3_RepasoPSeInt: ok",
        ""
      );
      break;
    case 18:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Guía 4",
        "Modulo1_Guia4_PSeInt: ok",
        "3 - ¿Pudiste resolver todos los ejercicios fundamentales de esta guía? esté marcada como realizada <br> 3. ¿Lograste los objetivos de la Guía? esté marcada como realizada"
      );
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Contenido Plus: ¿Cómo utilizar correctamente Google?",
        "Modulo1_Guia4_PSeInt: ok",
        ""
      );
      break;
    case 26:
      crearFilaClientVersion(
        tabla,
        clases,
        fecha,
        "Repaso Arreglos",
        "Modulo1_Guia4_RepasoPSeInt: ok",
        ""
      );
      break;
    case 27:
      crearFilaClientVersion(tabla, clases, fecha, "Integrador PseInt", "", "");
      break;
    default:
      break;
  }
}

function informeResumido(clases, fecha) {
  if (clases == 27) {
    document.getElementById(
      "informeResumido"
    ).textContent = `Tu fecha de Exámen Final es el: `;
    document.getElementById("dateFinal").textContent = `${fecha.getDate()}/${
      fecha.getMonth() + 1
    }/${fecha.getFullYear()}`;
    document.getElementById("informeResumido").style.padding =
      "15px 0px 7px 0px";
    document.getElementById("dateFinal").style.padding = "0px 0px 7px 0px";
  }
}
