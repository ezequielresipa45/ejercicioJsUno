let billetera = 0;

let value = true;

while (value === true) {
  let consulta = Number(
    prompt(
      "Bienvenido a nuestro banco, ¿Que desea hacer? Presione 1 para DEPÓSITO - Presione 2 para EXTRACCIÓN - Presione 3 para VER SU SALDO - Presione 4 para SALIR"
    )
  );

  let depositar = (valorDepositar) => {
    billetera += valorDepositar;

    return alert(
      `Usted ah depositado $${valorDepositar}, su saldo ahora es de $${billetera}. Muchas Gracias!! `
    );
  };

  let extraccion = (valorExtraccion) => {
    billetera -= valorExtraccion;

    return alert(
      `Su extracción se realizo correctamente, su saldo ahora es de $${billetera}`
    );
  };

  if (consulta === 1) {
    let deposito = Number(
      prompt(
        "Ingrese la cantidad que desea depositar, recuerde que el máximo es de $10.000"
      )
    );

    if (deposito > 10000) {
      alert(
        `Usted no puede depositar $${deposito} ya que supera el límite diario, vuelva a intentarlo.`
      );
    } else {
      depositar(deposito);
    }
  } else if (consulta === 2) {
    let extraer = Number(prompt("Ingrese el dinero a extraer"));

    if (billetera === 0 || billetera < extraer) {
      alert(
        `No puedes extraer $${extraer} ya que tu saldo es de $${billetera}`
      );
    } else {
      extraccion(extraer);
    }
  } else if (consulta === 3) {
    alert(`Su saldo es de $${billetera}`);
  } else if (consulta === 4) {
    alert(`Gracias por su visita, hasta pronto!!`);

    value = false;
  } else {
    alert("Usted ingreso una opcion incorrecta, vuelva a comenzar.");
  }
}

