var firebaseConfig = {
    apiKey: "AIzaSyBBU-vBetGibNbNjDNjoRLcBT-6P7ToMXU",
    authDomain: "salon-clase6.firebaseapp.com",
    databaseURL: "https://salon-clase6.firebaseio.com",
    projectId: "salon-clase6",
    storageBucket: "salon-clase6.appspot.com",
    messagingSenderId: "82566256851",
    appId: "1:82566256851:web:9ed99fad56db59b5a29c26"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function post_blog(){
    var blog ={
        autor: document.getElementById("author").value,
        titulo: document.getElementById("input-title").value,
        blog: document.getElementById("input-blog").value,
        date:Date.now()
    }
    firebase.database().ref("blogs/"+uuidv4()).set(blog)
    document.getElementById("author").value=""
    document.getElementById("input-title").value=""
    document.getElementById("input-blog").value=""
}

function get_data() {
    firebase.database().ref("/").once("value", function (base_datos) {
        base_datos.forEach(function (blogs) {
            var posts = Object.values(blogs.val()).sort((a,b)=>(a.date>b.date)?1:-1)
            console.log(typeof posts)
            var results = document.getElementById('blogs-container');
            if (results) {
                results.innerHTML = "";
                for (var id in posts) {
                    tmp = id.toString()
                    console.log(posts)
                    //Loop through the object to get each objects data
                    results.innerHTML += 
                    `<div class="post-container">
                    <h1 class="post-title">${posts[id].titulo.toUpperCase()}</h1>
                    <p class="post-author">${posts[id].autor}</p>
                    <p class="post-text">${posts[id].blog}</p>
                </div>`;
                }
            }
        })
    })
}

get_data()

/*
    var numeros=[0,1,2,3]
    numeros[2]
*/