var cupones = [];

function onClickButtonCupon() {
    let inputLabel = document.getElementById("label-cupon");
    let display = window.getComputedStyle(inputLabel).getPropertyValue("display");
    if(display == "none") {
        inputLabel.style.display = "flex";
    } else {
        const inputCodigoCupon = document.getElementById("codigoCupon");
        let cupon = obtenerCupon(inputCodigoCupon.value);
        if(cupon == null) {
            alert("Cupón inválido");
        } else {
            cupones.push(cupon);
            alert("Cupón agregado");
            inputCodigoCupon.value = "0";
        }
    }    
}

function obtenerCupon(codigo) {
    let miCupon;
    switch(codigo) {
        case "1":
            miCupon = new Cupon(10);
            break;
        case "2":
            miCupon = new Cupon(15);
            break;
        case "3":
            miCupon = new Cupon(20);
            break;
        default:
            miCupon = null;
    }
    return miCupon;
}

function onClickButtonPrecioFinal() {
    const precioOriginal = document.getElementById("precioOriginal").value;
    const precioFinal = precioConDescuentos(Number(precioOriginal));
    const resultado = document.getElementById("resultado");
    resultado.innerText = "El precio con descuento de los cupones son $" + precioFinal;
}

function precioConDescuentos(precio) {
    if(cupones.length == 0) {
        return precio;
    } else {
        let precioActual = precioConDescuento(precio, cupones.shift().descuento);
        return precioConDescuentos(precioActual);
    }
}

function precioConDescuento(precio, descuento) {
    return precio * (100 - descuento) / 100;
}

function Cupon(descuento) {
    this.descuento = descuento;
}