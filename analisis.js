
function añadirp(name,salary){
    colombia.push({
        name,
        salary,
    });
    return colombia
}

// Helpers
function espar(numerito){
    return (numerito%2===0);
}

function promedio(lista){
    
    const sumaLista = lista.reduce(
        function(valorAcumulado=0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
        );
        let promediolista = sumaLista / lista.length;
        return promediolista;
    }
    const salariosCol = colombia.map(
        function(persona){
            return persona.salary;
        }
        );
        
        // Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    
    if(espar(lista.length)){
        const personamitad1 = lista[mitad-1];
        const personamitad2 = lista[mitad];
        const media = promedio([personamitad1,personamitad2]);
        return media;
    }else{
        const personamitad = lista[mitad];
        return personamitad;
    }
}


// Mediana general
const salariosColSorted = salariosCol.sort(
    function(salarya,salaryb){
        return salarya-salaryb;
    }
    );
    
    const medianaGeneral = medianaSalarios(salariosColSorted);
    
    // Mediana del top 10%
    const splicStart = (salariosColSorted.length * (90)/100);
    const spliceCount = salariosColSorted.length - splicStart;
    
    const salariosTop = salariosColSorted.splice(
        splicStart,
        spliceCount,
        );
        
    const medianaTop10 = medianaSalarios(salariosTop);
        
        
    console.log({
    medianaGeneral,
    medianaTop10,
    });