
function CalcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = pCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = aCuadrado(value);
    alert(perimetro); 
}

function CalcularPerimetroTriangulo(){
    var input = document.getElementById("uno");
    var lado1 = Number(input.lado1.value);
    var lado2 = Number(input.lado2.value);
    var base = Number(input.base.value);
    var perimetro = ptriangulo(lado1,lado2,base);
    alert(perimetro);
}
function CalcularAreaTriangulo(){
    var input = document.getElementById("uno");
    var base = Number(input.base.value);
    var altura = Number(input.altura.value);
    var perimetro = atriangulo(base,altura);
    alert(perimetro);
}

function CalcularPerimetroCirculo(){
    var input = document.getElementById("circulo");
    var radio = Number(input.inputCirculo.value);
    var perimetro = pcirculo(radio);
    alert(perimetro);
}
function CalcularAreaCirculo(){
    var input = document.getElementById("circulo");
    var radio = Number(input.inputCirculo.value);
    var area = acirculo(radio);
    alert(area);
}

function aCuadrado(lado){
    return lado * lado;
}

function pCuadrado(lado){
    return lado * 4;
}

function ptriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}
function atriangulo(base,altura){
    return (base*altura)/2;
}

function dcirculo(radio){
    return radio*2;
}

var pi = Math.PI;
function pcirculo(radio){
     const diametro = dcirculo(radio);
     
     return diametro*pi;
}

function acirculo(radio){
     return (radio*radio)*pi;
}


function iso(l1,l2,l3){
    if(l1 == l2|| l1 == l3 ){
        var altura =  4*(l1*l1)-(l2*l2);
        var resultado = Math.sqrt(altura)/2;
        return(resultado);
    }else{
        alert("no es un triangulo isoceles")
    }
}