alert(
  "Cuatro alumnos se sumaron a la institución este mes, ellos son: Luis Ventura, Angela Perez, Brian Gonzalez y Edgar Poul. Vamos a registrarlos en el sistema para que queden asentados en nuestra base de datos ordenada alfabéticamente. ¡Recuerda MEMORIZAR LOS NOMBRES y respetar MAYUSCULAS y minusculas!"
);

class Persona {
  constructor(nombreApellido) {
    this.nombreApellido = nombreApellido;
    this.id = Math.round(Math.random() * (100 - 1) + 1);
  }
}

let personaUno;
let personaDos;
let personaTres;
let personaCuatro;

let arregloPersonas = [];

let unoNombreApellido = prompt(
  "Ingrese el nombre y apellido del primer alumno, pista: Su nombre empieza con Lu-- y su apellido con Vent---"
);

let dosNombreApellido = prompt(
  "Ingrese el nombre y apellido del segundo alumno, pista: Su nombre empieza con Ang--- y su apellido con Per--"
);

let tresNombreApellido = prompt(
  "Ingrese el nombre y apellido del tercer alumno, pista: Su nombre empieza con Bri-- y su apellido con Gonz----"
);

let cuatroNombreApellido = prompt(
  "Ingrese el nombre y apellido del tercer alumno, pista: Su nombre empieza con Ed--- y su apellido con Po--"
);

if (unoNombreApellido === "Luis Ventura") {
  personaUno = new Persona(unoNombreApellido);

  arregloPersonas.push(
    personaUno.nombreApellido + " ID: " + personaUno.id + " "
  );
} else {
  alert("El nombre o apellido son incorrectos, vuelva a intentarlo");
}

if (dosNombreApellido === "Angela Perez") {
  personaDos = new Persona(dosNombreApellido);

  arregloPersonas.push(
    personaDos.nombreApellido + " ID: " + personaDos.id + " "
  );
} else {
  alert("El nombre o apellido son incorrectos, vuelva a intentarlo");
}

if (tresNombreApellido === "Brian Gonzalez") {
  personaTres = new Persona(tresNombreApellido);

  arregloPersonas.push(
    personaTres.nombreApellido + " ID: " + personaTres.id + " "
  );
} else {
  alert("El nombre o apellido son incorrectos, vuelva a intentarlo");
}

if (cuatroNombreApellido === "Edgar Poul") {
  personaCuatro = new Persona(cuatroNombreApellido);

  arregloPersonas.push(
    personaCuatro.nombreApellido + " ID: " + personaCuatro.id + " "
  );
} else {
  alert("El nombre o apellido son incorrectos, vuelva a intentarlo");
}

alert(
  "Excelente, hemos agregado a los nuevos alumnos: " +
    arregloPersonas +
    " ahora, vamos a ordenarlos por órden alfabético para que los profesores puedan pasar lista de forma ordenada. Lo haremos programando el algorítmo a travéz del método SORT(), dale ACEPTAR para ordenar los nombres de los alumnos alfabéticamente."
);

arregloPersonas.sort();

alert(
  arregloPersonas +
    " Excelente, hemos ordenado alfabéticamente a los alumnos, ahora los profesores podrán pasar lista de forma ordenada.. ¡¡FELICITACIONES!!"
);
