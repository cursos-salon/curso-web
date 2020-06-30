function cambiar_idioma(){
    var titulo = document.getElementById("titulo_producto")
    titulo.innerHTML="Nuevo Producto"
}
function verificar(){
    var nombre = document.getElementById("product-name")
    var cantidad = document.getElementById("product-quantity")
    var descripcion = document.getElementById("product-description")
    if(nombre.value==""){
        alert("El nombre está vacío")
    }
    if(cantidad.value==""){
        alert("La cantidad esta vacia")
    }
    if(descripcion.value==""){
        alert("La descripcion esta vacia")
    }
}

/* 
    if(nombre.value=="" && cantidad.value==""){
        alert("Nombre y cantidad vacios")
    }
    nombre:Edgar
    cantidad: 2
    alert(nombre+" "+cna)
*/