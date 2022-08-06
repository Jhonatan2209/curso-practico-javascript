const lista1 = [
    1,
    2,
    1,
    2,
    3,
    4,
    5,
    6,
    6,
    11,
    1,
    3,
    2,
    1,
    1,
    6,
];

const lista1Count = {};
lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] = lista1Count[elemento] +1;
        }else{
            lista1Count[elemento] = 1;
        }
    }
);

 const lista1Array = Object.entries(lista1Count).sort(
    function(valorAcumulado,nuevoValor){
        return valorAcumulado[1]-nuevoValor[1];
    }
 );
 const moda = lista1Array[lista1Array.length-1];

 function mode(arr){
        const arreglo = arr;
        arreglo.sort((a,b)=>a-b);
        const objetos = {};
        arreglo.map(function(e){
            if(objetos[e]){
                objetos[e] = objetos[e] +1;
            }else{
            objetos[e] = 1;
            }
        }
    );
    
    const final = Object.entries(objetos).sort(
        function(a,b){
            return a[1]-b[1];
        }
    );
    const resultado = final[final.length-1];

    return resultado;
 }