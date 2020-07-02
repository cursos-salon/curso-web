function factorial(){
    var number = document.getElementById("numero")
    var resultado=1
    for (var i=1;i<=number.value;i+=2){
        resultado=resultado*i
    }
    alert("El factorial de: "+number.value+"es: "+resultado)
    number.value=""
}