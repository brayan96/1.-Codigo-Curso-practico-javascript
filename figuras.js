// codigo cuadrado
console.group("Cuadrados");

function perimetroCuadrado() {
    var ladoCuadrado = document.getElementById("ladoCuadrado").value;
    alert((ladoCuadrado * 4) + " cm");
}

function areaCuadrado() {
    var ladoCuadrado = document.getElementById("ladoCuadrado").value;
    alert(Math.pow(ladoCuadrado, 2) + " cm^2");
}

console.groupEnd();

// codigo triangulo
console.group("Triángulos");

function perimetroTriangulo() {
    var ladoTriangulo1 = Number(document.getElementById("ladoTriangulo1").value);
    var ladoTriangulo2 = Number(document.getElementById("ladoTriangulo2").value);
    var ladoTriangulo3 = Number(document.getElementById("ladoTriangulo3").value);
    alert((ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3) + " cm");
}

function areaTriangulo() {
    var ladoTriangulo1 = Number(document.getElementById("ladoTriangulo1").value);
    var ladoTriangulo2 = Number(document.getElementById("ladoTriangulo2").value);
    var ladoTriangulo3 = Number(document.getElementById("ladoTriangulo3").value);
    const s = (ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3) / 2;
    alert((Math.sqrt(s * (s - ladoTriangulo1) * (s - ladoTriangulo2) * (s - ladoTriangulo3))) + " cm^2");
}

console.groupEnd();

// codigo circulo
console.group("Circulos");

const PI = Math.PI;

function perimetroCirculo() {
    var radio = document.getElementById("radio").value;
    alert((2 * radio * PI) + " cm");
}

function areaCirculo() {
    var radio = document.getElementById("radio").value;
    alert((PI * Math.pow(radio, 2)) + " cm^2");
}

console.groupEnd();