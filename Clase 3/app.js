function contar_velas(velas){
    var vela_mas_alta=0
    for(var i=0;i<velas.length;i++){
        if(velas[i]>vela_mas_alta){
            vela_mas_alta=velas[i]
        }
    }
    var velas_sopladas=0
    for(var i=0;i<velas.length;i++){
        if(velas[i]==vela_mas_alta){
            velas_sopladas++
        }
    }
    alert("El numero de velas sopladas es: "+velas_sopladas+" con altura de: "+vela_mas_alta)
}

function fact(){
    var num=document.getElementById("fact").value
    var res= 1
    for(var i =1;i<=num;i++){
        res*=i
    }
    alert(res)
}
var velas= [1,2,4,2]
contar_velas(velas)