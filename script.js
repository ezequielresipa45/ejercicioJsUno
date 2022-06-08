//El arreglo carrito se llenará con los objetos que valla comprando, una vez finalizada la compra se mostrará la cantidad total de frutas que compraste y el detalle de que tipo de fruta y cantidad compré iterándo cada objeto dentro del arreglo.

let carrito = [];

let condicion = true;

let cantidadDeProductos = 0;

while (condicion) {
  let frutas = prompt(
    "Bienvenido a la tienda de frutas, elija de la siguiente lista lo que desea comprar: - Bananas - Manzanas - Duraznos - Peras - Mandarinas - Uvas - Frutillas, si desea finalizar su compra o salir de la tienda digite salir "
  );

  if (
    frutas === "Bananas" ||
    frutas === "Manzanas" ||
    frutas === "Duraznos" ||
    frutas === "Peras" ||
    frutas === "Mandarinas" ||
    frutas === "Uvas" ||
    frutas === "Frutillas"
  ) {
    let cantidadDeFrutas = Number(
      prompt(`Digite la cantidad de ${frutas} que desea llevar.`)
    );

    cantidadDeProductos += cantidadDeFrutas;

    let compra = {
      nombreFruta: frutas,

      cantidad: cantidadDeFrutas,
    };

    carrito.push(compra);
  } else if (frutas === "salir") {
    condicion = false;
  } else {
    alert("Esa fruta no exista, vuelva a intentarlo.");
  }
}

alert(`Usted realizó una compra por ${cantidadDeProductos} unidades`);

alert("Gracias por su compra, a continuación detallaré su pedido.");

for (let index = 0; index < carrito.length; index++) {
  alert(
    `Usted compro ${carrito[index].cantidad} ${carrito[index].nombreFruta} `
  );
}
