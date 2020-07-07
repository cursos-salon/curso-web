var firebaseConfig = {
    apiKey: "AIzaSyBAJsnAy1sk4lBqk3bBmCnVibpOWBolmP4",
    authDomain: "prueba-inventario-salon.firebaseapp.com",
    databaseURL: "https://prueba-inventario-salon.firebaseio.com",
    projectId: "prueba-inventario-salon",
    storageBucket: "prueba-inventario-salon.appspot.com",
    messagingSenderId: "551933645882",
    appId: "1:551933645882:web:d103d2a6b60a205c045103",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function new_product() {
    firebase.database().ref("productos/" + uuidv4()).set({
        nombre: document.getElementById("nombre_producto").value,
        descripcion: document.getElementById("desc_producto").value,
        cantidad: document.getElementById("cantidad_producto").value
    })
    window.history.back();
}

function update_units(id) {
    firebase.database().ref("productos/" + id).set({
        nombre: document.getElementById(id + "_nombre").innerHTML,
        descripcion: document.getElementById("desc_producto").value,
        cantidad: document.getElementById(id + "_cantidad").value
    })
    get_data()
}

function delete_unit(id) {
    firebase.database().ref('productos/'+id).remove()
    get_data()
}

function get_data() {
    firebase.database().ref("/").once("value", function (base_datos) {
        base_datos.forEach(function (productos) {
            var datos_producto = productos.val()
            var results = document.getElementById('product-list');
            if (results) {
                results.innerHTML = "";
                for (var dato in datos_producto) {
                    tmp = dato.toString()
                    //Loop through the object to get each objects data
                    results.innerHTML += 
                    `<li>
                    <div class="product-container">
                    <button class="less-product" onclick="delete_unit('${tmp}')">-</button>
                    <p class="product-name" id="${tmp}_nombre"> ${datos_producto[dato].nombre} </p>
                    <input value="${datos_producto[dato].cantidad}" class="product-quantity" type="text" placeholder="##" id= "${tmp}_cantidad">
                     <button onclick="update_units('${tmp}')" class="send-button material-icons">arrow_right_alt</button> </div></li>`;
                }
            }
        })
    })
}

get_data()

