
function descuentoGeneral(precio, descuentoO){
    descuentorealizado = 100 - descuentoO;
    preciofinal = (precio*descuentorealizado)/100;
    return preciofinal;
}

function precioConDescuento(){
    const var2 = document.getElementById("formd")
    const original2 = Number(var2.inputprecio.value);
    const descuento3 = Number(var2.inputdescuento.value);
    const pagar = descuentoGeneral(original2,descuento3); 
    resultP.innerText = "El valor de tu precio con descuento es: $"+ pagar;
}
  const cupon = [
    "cupon1",
    "cupon2",
    "cupon3",
    "cupon4",
    "BlackFriday",
];
function cupond(){
    const var2 = document.getElementById("formd")
    const original2 = Number(var2.inputprecio.value);
    const cupona = document.getElementById("cdescuento")
    const valorcupon = cupona.value;
    var descuento;
    switch(valorcupon){
        case cupon[0]: //cupon1
            descuento = 15;
        break;
        case cupon[1]: //cupon2
            descuento = 30;
        break;
        case cupon[2]: //cupon3
            descuento = 25;
        break;
        case cupon[3]: //cupon3
            descuento = 50;
        break;
        case cupon[4]: //cupon3
            descuento = 100;
        break;
    }

    
    const precioconD = descuentoGeneral(original2,descuento);
    const resultP2 = document.getElementById("resulP2");
    resultP2.innerText = "El precio con descuento son: $" + precioconD;
}


