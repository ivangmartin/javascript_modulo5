const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
];

//MOSTRAR CARRITO DE LA COMPRA 
for(carro of carrito){
    imprimir(carro);
}

function imprimir(carro) {
console.log("---------------");
for (attr in carro) {
console.log(attr.toUpperCase() + ": " + carro[attr]);
}
}

//LISTAR TODOS LOS PRODUCTOS 
for(carro of carrito){
    listarProductos(carro);
}

function listarProductos(carro){
    console.log("---------------");
    console.log(carro.name);
}

//ELIMINAR EL PRODUCTO CUYA ID ES 54657
var pos=0;
while((pos < carrito.length) && (carrito[pos].id != 54657)){
    pos++;
}

console.log("Numero de procutos antes de borrar: " + carrito.length);
var elementoEliminado = carrito.splice(2,1);

console.log(elementoEliminado);
console.log("Numero de procutos despues de borrar: " + carrito.length);

//CALCULAR TOTAL DEL CARRITO
let total=0;
for(carro of carrito){
    total += carro.price * carro.count;
}

console.log("El precio total a pagar es: " + total + " €");

//FILTRAR PRODUCTOS PRIME
for(carro of carrito){
    if(carro.premium) imprimir(carro);
}

//COMPROBAR GASTOS DE ENVIO
var contador=0;
for(carro of carrito){
    if(carro.premium) contador++;
}

if(contador == carrito.length){
    console.log("Gastos de envio 0");
}else{
    console.log("Con gastos de envio");
}

//APLICAR DESCUENTO SI PRECIO TOTAL MAYOR QUE 50€
if(total > 50){
    total= total * 0.95;
    console.log("Descuento aplicado. Precio final: " + total + " €");
}


