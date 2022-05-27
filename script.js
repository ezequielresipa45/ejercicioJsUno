/*
La idea del algoritmo es devolver la persona con mayor edad; para realizarlo utilizé dos ciclos for por separado.

El primer ciclo iterará la cantidad de veces según las personas que quieras saber su edad, dentro de este cada vez que el bucle entre en acción, agregaremos a las variables arregloDePersonas y arregloDeEdades lo que el usuario digite a travez del metodo push (éste método agrega al final de un arreglo lo que le pasemos como parametro dentro del método). Esto nos irá llenando las variables arregloDePersonas y arregloDeEdades con los datos que ingreso el usuario.

Luego llenaremos un nuevo arreglo con los datos que obtuvimos de arregloDePersonas y arregloDeEdades para así volver a iterar en un nuevo ciclo for y poder obtener quién es la persona con mayor edad (let personas es el arreglo nuevo).

Para obtener el mayor de un arreglo de numeros lo que hice fue dentro del bucle realizar un condicional donde comparo si la edad de la persona es mayor a la edad de la persona en el primer indice almacenada en una variable llamada almacenNumero "para entender esto mejor, mirar el ejemplo en el ejercicio" lo que hará es ir guardando en esta variable el numero más grande que se irá comparando dentro del bucle, al final obtendremos el numero mayor del arreglo iterado. luego mostraremos el resultado a travez de un alert.

*/

alert(
  "Hola mi nombre es Luci, jugemos un juego!!! Me dirás 5 personas con distintas edades y adivinaré quien es el más grande, ¿Listo?"
);

let arregloDePersonas = [];

let arregloDeEdades = [];

for (let j = 1; j <= 5; j++) {
  arregloDePersonas.push(prompt(`Escriba el nombre de la persona numero ${j}`));
  arregloDeEdades.push(
    prompt(`Cual es la edad de ${arregloDePersonas[j - 1]}`)
  );
}

let personas = [
  [arregloDePersonas[0], arregloDeEdades[0]],
  [arregloDePersonas[1], arregloDeEdades[1]],
  [arregloDePersonas[2], arregloDeEdades[2]],
  [arregloDePersonas[3], arregloDeEdades[3]],
  [arregloDePersonas[4], arregloDeEdades[4]],
];

almacenNumero = personas[0][1];

let nombre;

for (let index = 0; index < personas.length; index++) {
  if (personas[index][1] > almacenNumero) {
    almacenNumero = personas[index][1];

    nombre = personas[index][0];
  }
}

alert(`La persona con más edad es ${nombre} con ${almacenNumero} años.`);
