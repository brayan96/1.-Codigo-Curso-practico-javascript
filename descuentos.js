function precioConDescuento(precio, descuento) {
    return precio * (100 - descuento) / 100;
}

function onClickButtonPriceDiscount() {
    const inputPrecio = document.getElementById("precioOriginal").value;
    const inputDescuento = document.getElementById("descuento").value;
    const precioFinal = precioConDescuento(inputPrecio, inputDescuento);
    const resultado = document.getElementById("resultado");
    resultado.innerText = "El precio con descuento son $" + precioFinal;
}