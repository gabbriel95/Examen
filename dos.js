function mostrar() {
  var nombre;
  var tipoCursada;
  var cantidadMaterias;
  var sexo;
  var notaPromedio;
  var edad;
  var respuesta;

  var mejorPromedioNoM;
  var mejorAlumno;
  var bandera = 0;

  var contadorLibre = 0;
  var nombreJoven;
  var edadJoven;
  var banderaDos = 0;

  var promedioMujer;
  var promedioHombre;
  var promedioNoBinario;
  var acumuladosNotasHombre = 0;
  var acumuladorNotasMujer = 0;
  var acumuladorNotasNobinario = 0;
  var contadorHombres = 0;
  var contadorMujeres = 0;
  var contadorNoBinario = 0;

  var nombreCursaMasMaterias;
  var edadCursaMasMaterias;
  var cantidadMateriasMasCursa;
  var banderaTres = 0;
  var contadorRemoto = 0;

  do {
    do {
      nombre = prompt("Ingrese nombre");
    } while (!isNaN(nombre));

    do {
      tipoCursada = prompt("Tipo cursada (libre-presencial-remota");
      if (tipoCursada == "libre") {
        contadorLibre++;
      } else if (tipoCursada == "remota") {
        contadorRemoto++;
        console.log(contadorRemoto);
      }
    } while (
      tipoCursada != "libre" &&
      tipoCursada != "presencial" &&
      tipoCursada != "remota"
    );

    do {
      cantidadMaterias = parseInt(prompt("cantidad de materias (1-8)"));
    } while (
      isNaN(cantidadMaterias) ||
      cantidadMaterias < 1 ||
      cantidadMaterias > 8
    );

    do {
      sexo = prompt("Sexo (femenino-masculino-no binario)");
    } while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario");

    do {
      notaPromedio = parseFloat(prompt("nota promedio (ej:4.4)"));
      if (sexo == "masculino") {
        contadorHombres++;
        acumuladosNotasHombre = acumuladosNotasHombre + notaPromedio;
      } else if (sexo == "femenino") {
        contadorMujeres++;
        acumuladorNotasMujer = acumuladorNotasMujer + notaPromedio;
      } else {
        contadorNoBinario++;
        acumuladorNotasNobinario = acumuladorNotasNobinario + notaPromedio;
      }
    } while (isNaN(notaPromedio) || notaPromedio > 10 || notaPromedio < 0);

    do {
      edad = parseInt(prompt("edad"));
    } while (isNaN(edad) || edad < 18 || edad > 100);

    if (sexo != "masculino" && bandera == 0) {
      mejorPromedioNoM = notaPromedio;
      mejorAlumno = nombre;
      bandera = 1;
    } else if (
      bandera == 1 &&
      sexo != "masculino" &&
      notaPromedio > mejorPromedioNoM
    ) {
      mejorPromedioNoM = notaPromedio;
      mejorAlumno = nombre;
    }

    if (tipoCursada == "libre" && banderaDos == 0) {
      nombreJoven = nombre;
      edadJoven = edad;
      banderaDos = 1;
    } else if (banderaDos == 1 && tipoCursada == "libre" && edad < edadJoven) {
      nombreJoven = nombre;
    }

    if (tipoCursada == "remota" && banderaTres == 0) {
      nombreCursaMasMaterias = nombre;
      edadCursaMasMaterias = edad;
      cantidadMateriasMasCursa = cantidadMaterias;
      banderaTres = 1;
    } else if (
      tipoCursada == "remota" &&
      banderaTres == 1 &&
      cantidadMaterias > cantidadMateriasMasCursa
    ) {
      nombreCursaMasMaterias = nombre;
      edadCursaMasMaterias = edad;
      cantidadMateriasMasCursa = cantidadMaterias;
    }

    respuesta = confirm("Desea agregar otro alumno");
  } while (respuesta);

  if (contadorHombres >= 1) {
    promedioHombre = acumuladosNotasHombre / contadorHombres;
  }
  if (contadorMujeres >= 1) {
    promedioMujer = acumuladorNotasMujer / contadorMujeres;
  }
  if (contadorNoBinario >= 1) {
    promedioNoBinario = acumuladorNotasNobinario / contadorNoBinario;
  }

  if (contadorMujeres >= 1 || contadorNoBinario >= 1) {
    console.log("El mejor promedio no masculino es de " + mejorAlumno);
  }

  if (contadorLibre >= 1) {
    console.log("El nombre del mas joven que da libre es " + nombreJoven);
  }

  if (contadorHombres >= 1) {
    console.log("El promedio de nota de los masculinos es " + promedioHombre);
  }
  if (contadorMujeres >= 1) {
    console.log("El promedio de nota de los femeninos es " + promedioMujer);
  }
  if (contadorNoBinario >= 1) {
    console.log(
      "El promedio de nota de los nobinarios es " + promedioNoBinario
    );
  }

  if (contadorRemoto >= 1) {
    console.log(
      "El alumno que cursa mas materias de forma remota es " +
        nombreCursaMasMaterias +
        " y tiene " +
        edadCursaMasMaterias +
        " años"
    );
  }
}
