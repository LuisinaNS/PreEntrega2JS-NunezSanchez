//ENTREGA 2

// genero un objeto a partir de una clase para poder trabajar sobre él

console.log("GENERACIÓN DE OBJETO CON CLASES, OBTENCIÓN DE DATOS Y MUESTRA DE LOS MISMOS")


class Producto {

    constructor(nombre, precio) {

        this.nombre = nombre;
        this.precio = precio;

    }


    //obtengo la información

    get_detalle() {

        console.log("---detalle producto---")
        console.log("Nombre: ", this.nombre);
        console.log("Precio: $ ", this.precio);
        console.log("");
    }

}


//simulo agregar productos a mi stock (genero un arreglo de 3 productos en este caso)

let mercaderia = [];

for (let i = 0; i < 3; i++) {

    let nombre = prompt(" ÓPTICA ONLINE \n Ingrese nombre del producto");
    let precio = prompt(" ÓPTICA ONLINE \n Ingrese valor de lista del producto");

    let producto = new Producto(nombre, precio);

    mercaderia.push(producto);

}


//muestro (render) mercaderia
for (let producto of mercaderia) {

    producto.get_detalle();

}


console.log("GENERO UN OBJETO LITERAL Y UTILIZO HIGHER ORDER FUNCTIONS: MAP y REDUCE")

//para poder trabajar con stock definido creo un objeto literal

let productos = [

    { nombre: "Lente Sol", precio: 15000 },
    { nombre: "Anteojo Recetado", precio: 8000 },
    { nombre: "Lente Contacto", precio: 10000 },

]

//simulo recargo en el precio de lista para la compra con tarjeta por ejemplo (higher order function)
function recargo_10(productos) {

    let recargo = productos.precio * 0.1;

    return {
        nombre: productos.nombre,
        precio: productos.precio + recargo,
    }
}

let resultado_map = productos.map(recargo_10);

console.log(resultado_map)

console.log("")

//simulo carrito/compra
function total(acu, producto) {

    acu = acu + producto.precio;
    return acu

}

let compra = productos.reduce(total, 0);

console.log("El total de tu compra es efectivo es: $ ", compra)

console.log("")

