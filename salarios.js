const colombia = [];

function ordenar(lista) {
    return lista.sort((x, y) => x - y);
}

function calcularMediana(lista) {
    lista = ordenar(lista);
    const mitadLista = parseInt(lista.length / 2);
    if (lista.length % 2 === 0) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        return (elemento1 + elemento2) / 2;
    } else {
        return lista[mitadLista];
    }
}

function top10(lista) {
    lista = ordenar(lista);
    const s1 = lista.length * 0.9;
    const s2 = lista.length - s1;
    const salariosColTop10 = lista.splice(s1, s2);
    return calcularMediana(salariosColTop10);
}

function onClickButtonValor() {    
    const inputCodigoValor = document.getElementById("valor");
    let valor = inputCodigoValor.value;
    if(valor == "") {
        alert("Valor  no válido");
    } else {
        colombia.push(valor);
        document.getElementById("resultado").innerText = "";
        alert("Valor agregado");
        inputCodigoValor.value = "";
        console.log(colombia);
    }
}

function onClickButtonGeneral() {
    const valorFinal = calcularMediana(colombia);
    const resultado = document.getElementById("resultado");
    resultado.innerText = "El promedio general es " + valorFinal;
    lista = [];
}

function onClickButtonTop10() {
    const valorFinal = top10(colombia);
    const resultado = document.getElementById("resultado");
    resultado.innerText = "El promedio general es " + valorFinal;
    lista = [];
}