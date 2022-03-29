let list = [];

function moda(lista) {
    function clasificar(lis = []) {
        if (lista.length === 0) {
            return lis;
        } else {
            const simbolo = lista.shift();
            if(!lis.some((simb) => simb[0] == simbolo)) {
                lis.push([simbolo, lista.filter((simb) => simb == simbolo).length + 1]);
            }            
            return clasificar(lis);
        }
    }
    const arr = clasificar().sort((a, b) => a[1] - b[1]);
    return arr.filter((s)  => s[1] == arr[arr.length - 1][1]).map((a) => a[0]);
}

function onClickButtonValor() {    
    const inputCodigoValor = document.getElementById("codigoValor");
    let valor = inputCodigoValor.value;
    if(valor == "") {
        alert("Valor  no válido");
    } else {
        list.push(valor);
        document.getElementById("resultado").innerText = "";
        alert("Valor agregado");
        inputCodigoValor.value = "";
    }
}

function onClickButtonModa() {
    const valorFinal = moda(list);
    const resultado = document.getElementById("resultado");
    resultado.innerText = "La moda es " + valorFinal;
    list = [];
}