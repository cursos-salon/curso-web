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

  function get_data(){
      firebase.database().ref("/").once("value",function (base_datos){
        var html = document.getElementById("resultados")  
        html.innerHTML=""
        base_datos.forEach(function (dato){
              var valor = dato.val()
              console.log(valor)
              html.innerHTML+= `<li>${valor.nombre}</li>` //"<li>"+dato+
          })
      })
  }

  function post_data(){
    var nombre_html = document.getElementById("nombre").value
    var edad_html = document.getElementById("edad").value
    var nuevos_datos ={
        nombre:nombre_html,
        edad: edad_html
    }
    firebase.database().ref("personas/" + uuidv4()).set(nuevos_datos)
    get_data()
}

  get_data()