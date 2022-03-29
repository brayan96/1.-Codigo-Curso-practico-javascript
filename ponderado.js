let list = [];

function ponderado(lista) {
    let dividendo = lista.reduce(((total, valores) => valores[0] * valores[1] + total), 0);
    let divisor = lista.map((valor) => valor[1]).reduce((total = 0, peso) => peso + total);
    return dividendo / divisor;
}

function onClickButtonItem() {
    const inputValor = document.getElementById("valor");
    const inputPeso = document.getElementById("peso");
    let valor = inputValor.value;
    let peso = inputPeso.value;
    if(valor == "" || Number(valor) < 0 || peso == "" || Number(peso) < 0) {
        alert("Valor o peso no válido");
    } else {
        list.push([Number(valor), Number(peso)]);
        document.getElementById("resultado").innerText = "";
        alert("Valor agregado");
        inputValor.value = "0";
        inputPeso.value = "0";
    }
}

function onClickButtonPonderado() {
    const valorFinal = ponderado(list);
    const resultado = document.getElementById("resultado");
    resultado.innerText = "El promedio ponderado es " + valorFinal;
    lista = [];
}