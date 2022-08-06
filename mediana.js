function promedio(lista){
    //     let sumaLista = 0;
    //     for(let i=0; i<lista.length;i++ ){
    //     sumaLista = (sumaLista + lista[i]);
    // }
        const sumaLista = lista.reduce(
            function(valorAcumulado=0, nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );
        let promediolista = sumaLista / lista.length;
        return promediolista;
    }

const lista1 = [
    100,
    200,
    500,
    4000000000,
    15,
    20,
    25,
    11,
    8,
    12,
    14,
    255,
    243,
    1,
];

lista1.sort(function(a,b){
    return a -b;
});


const mitadlista1 = parseInt(lista1.length/2);


function espar(numerito){
    if(numerito%2 === 0){
        return true
    }else{
        return false
    }
}   
//  let mediana;
//  let siguiente;
//     if(espar(lista1.length)){
//         const elemento1 = lista1[mitadlista1-1];
//     const elemento2 = lista1[mitadlista1]
//         const calcularPromedio = promedio([
//             elemento1,
//             elemento2,  
//         ]);
//         mediana = calcularPromedio;
//     }else{
//         mediana = lista1[mitadlista1];
//     }
 function mediana(lista){
    const variable = lista;
    const mitadlista = parseInt(variable.length/2);
    if(espar(variable.length)){
        variable.sort(function(a,b){    
            return a-b;
        })
        // console.log("es par")
       
       const elementoa = variable[mitadlista-1];
       const elementob = variable[mitadlista];
       const calcularp = promedio([elementoa,elementob]);
       return calcularp;
    }else{
        // console.log("impar")
        const mediana = variable[mitadlista];
        return mediana;
    }
   
 }
