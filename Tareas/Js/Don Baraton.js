function EventListener(){
    document.getElementById("descuento"); addEventListener("click", Porcentaje());
}

function Porcentaje(){

    var precio = Number(document.getElementById("precio").value);

    var imprimirdescuento = document.getElementById("descuentoagregado");

    var descuenton = 0;  

    var preciototal = 0;
    

    if(precio > 3600){
        preciototal = precio * .84;
        descuenton = precio - preciototal;
        imprimirdescuento.innerText = "Tu descuento va a ser del 16% por lo que tu producto va a costar un total de $" + preciototal + "el descuento es" +descuenton;    } else{
        preciototal = precio * .97;
        descuenton = precio - preciototal;
         imprimirdescuento.innerText = "Tu descuento va a ser del 7% por lo que tu producto va a costar un total de $" + preciototal + "el descuento es" +descuenton;
    }
}

