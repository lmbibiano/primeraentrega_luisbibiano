function calcularCostos(valorBase, costEnvio = 1200, iva = 0.20) {
    let costos  =  costEnvio + valorBase * iva
    alert("La suma de iva (20 % ) + el envio= 1200 pesos es: " + costos)
    return costos
}

alert("Bienvenido a mi primer intento de programación")
let confirmacion = true

do {
    let precioProducto  = parseFloat(prompt("Ingrese el valor de su producto y le devolvere costos totales asosiados ( envio e iva) :"))
    let costoTotal = calcularCostos(precioProducto, 1200, 0.20 );
    alert("El costo total de su producto es : " + (costoTotal + precioProducto))
    let respuesta = prompt("¿Desea ingresar el precio de otro producto para calcular?")
        if (respuesta == 'no') {
        confirmacion = false
    }

} while (confirmacion == true)