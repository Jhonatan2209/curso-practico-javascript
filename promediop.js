const notes = [{
    curso: "matematica",
    nota: 10,
    creditos: 2,
},
{
    curso: "literatura",
    nota: 8,
    creditos: 5,
},
{
    curso: "quimica",
    nota: 7,
    creditos: 5,
}
]

const nuevo = notes.map(
    function(e){
       return e.nota * e.creditos;
    }
);
console.log(nuevo);
const cred = notes.map(
    function(a){
        return a.creditos;
    }
);
console.log(cred);

const sumae = nuevo.reduce(
    function(sum = 0,newval){
        return sum + newval;
    }
);
const sumac = cred.reduce(
    function(sum = 0,newval){
        return sum + newval;
    }
);
console.log(sumae);
console.log(sumac);

function promp(){
    valor = sumae/sumac;
    return valor;
}