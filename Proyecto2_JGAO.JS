let iva = 0.19;
let precioFinal;

function calcularIva(precio){
    let ivaProducto = precio * iva;
    console.log(`el Iva del producto es ${ivaProducto}`)
    precioFinal = precio - ivaProducto;
};