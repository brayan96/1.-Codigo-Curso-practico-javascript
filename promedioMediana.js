let list = [];

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        ((valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento), 0
    );
    return sumaLista / lista.length;
}

function calcularMediana(lista) {
    lista = lista.sort((x, y) => x - y);
    const mitadLista = parseInt(lista.length / 2);
    if (lista.length % 2 === 0) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        return (elemento1 + elemento2) / 2;
    } else {
        return lista[mitadLista];
    }
}

function onClickButtonValor() {    
    const inputCodigoValor = document.getElementById("codigoValor");
    let valor = inputCodigoValor.value;
    if(valor == "" || Number(valor) < 0) {
        alert("Valor  no válido");
    } else {
        list.push(Number(valor));
        document.getElementById("resultado").innerText = "";
        alert("Valor agregado");
        inputCodigoValor.value = "0";
    }
}

function onClickButtonPromedio() {
    const valorFinal = calcularMediaAritmetica(list);
    const resultado = document.getElementById("resultado");
    resultado.innerText = "La media aritmética es " + valorFinal;
    list = [];
}

function onClickButtonMediana() {
    const valorFinal = calcularMediana(list);
    const resultado = document.getElementById("resultado");
    resultado.innerText = "La mediana es " + valorFinal;
    list = [];
}