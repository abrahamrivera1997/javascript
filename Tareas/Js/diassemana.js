function EventListener (){
    document.getElementById("diassemana").addEventListener("click",CalcularDias()); 
}
function CalcularDias(){
    var dia = document.getElementById("dias").value;
    var imprimirresultado = document.getElementById("imprimirsemana");
     if (dia=="1"){
        imprimirresultado.innertext = "Lunes" 
     } 
     if (dia=="2"){
        imprimirresultado.innertext = "Martes"
     }

     if (dia=="3"){
        imprimirresultado.innertext = "Miercoles"
     }
     
     if (dia=="4"){
        imprimirresultado.innertext = "jueves"
     }
     if (dia=="5"){
        imprimirresultado.innertext = "Viernes"
     }
     if (dia=="6"){
        imprimirresultado.innertext = "Sabado"
     }
     if (dia=="7"){
        imprimirresultado.innertext = "Domingo"
     }
}


