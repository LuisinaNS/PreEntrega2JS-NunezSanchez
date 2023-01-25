
// INCLUYO AQUÍ UNA CORRECCIÓN PARA LA ENTREGA 1 QUE ME QUEDÓ PENDIENTE
//Incluyo un ciclo

console.log("CORRECIÓN ENTREGA 1")


const producto1 = 13000;
const producto2 = 8000;
let total = 0;

function ver_carrito() {
    total = producto1 + producto2;
    return total;
}

function mostrar_menu(input) {
   
    if (input == 1) {
        alert("Seleccionaste los productos: \n producto1 \n producto2 \n \n El total a pagar es 💰: $" + ver_carrito());
    }
    
    else if (input == 2) {
        alert("Usted está siendo redirigido a la página de pagos, aguarde ⌚");
    }
    
    else if(opcion == 3) {
        process.exit()
    }
}

while(true){
    let opcion = Number(prompt(" ÓPTICA ONLINE - Su carrito 🛒 \n Ingrese el número de la opción que le interese: \n 1. Ver carrito \n 2. Continuar con el pago \n 3. Salir"));
    mostrar_menu(opcion)
}
