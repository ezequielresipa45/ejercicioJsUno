// alert(
//   "Hola mi nombre es Luci, jugemos un juego!!! Me dirás 5 personas con distintas edades y adivinaré quien es el más grande, ¿Listo?"
// );

// let arregloDePersonas = [];

// let arregloDeEdades = [];

// for (let j = 1; j <= 5; j++) {
//   arregloDePersonas.push(prompt(`Escriba el nombre de la persona numero ${j}`));
//   arregloDeEdades.push(
//     prompt(`Cual es la edad de ${arregloDePersonas[j - 1]}`)
//   );
// }

// let personas = [
//   [arregloDePersonas[0], arregloDeEdades[0]],
//   [arregloDePersonas[1], arregloDeEdades[1]],
//   [arregloDePersonas[2], arregloDeEdades[2]],
//   [arregloDePersonas[3], arregloDeEdades[3]],
//   [arregloDePersonas[4], arregloDeEdades[4]],
// ];

// almacenNumero = personas[0][1];

// let nombre;

// for (let index = 0; index < personas.length; index++) {
//   if (personas[index][1] > almacenNumero) {
//     almacenNumero = personas[index][1];

//     nombre = personas[index][0];
//   }
// }

// alert(`La persona con más edad es ${nombre} con ${almacenNumero} años.`);

let consulta = Number(
  prompt(
    "Bienvenido a nuestro banco, ¿Que desea hacer? Presione 1 para DEPÓSITO - Presione 2 para EXTRACCIÓN"
  )
);

let billetera = 0;

let depositar = (valorDepositar) => {
  billetera += valorDepositar;

  return alert(
    `Usted ah depositado $${valorDepositar}, su saldo ahora es de $${billetera}. `
  );
};

if (consulta === 1) {
  let deposito = Number(prompt("Ingrese la cantidad que desea depositar"));

  depositar(deposito);
} else if (consulta === 2) {
  console.log("Hola");
} else {
  console.log("Usted ingreso una opcion incorrecta, vuelva a comenzar.");
}
