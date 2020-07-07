// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD51v2yX8Jlpds51SxnTjH7WLKm7MIICmI",
    authDomain: "salon-clase-4.firebaseapp.com",
    databaseURL: "https://salon-clase-4.firebaseio.com",
    projectId: "salon-clase-4",
    storageBucket: "salon-clase-4.appspot.com",
    messagingSenderId: "1068125991314",
    appId: "1:1068125991314:web:4963499a2b01020dbdd14b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

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
    firebase.database().ref("productos/" + uuidv4()).set({
        nombre: document.getElementById("product-name").value,
        descripcion: document.getElementById("product-description").value,
        cantidad: document.getElementById("product-quantity").value
    })
    window.history.back();
}

function get_data(){
    firebase.database().ref("/").once("value",function (base_datos){
        var html = document.getElementById("resultados")  
        html.innerHTML=""
        base_datos.forEach(function (dato){
              var valor = dato.val()
              html.innerHTML+= `<li>${valor}</li>` //"<li>"+dato+
          })
      })
}

get_data()

/* 
    if(nombre.value=="" && cantidad.value==""){
        alert("Nombre y cantidad vacios")
    }
    nombre:Edgar
    cantidad: 2
    alert(nombre+" "+cna)
*/