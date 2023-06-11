//variables

const formulario = document.querySelector("#formulario")
const listaTweeta = document.querySelector("#lista-tweets")
let tweets = [];

//Event Listeners

eventListeners();

function eventListeners() {
    formulario.addEventListener("submit", agregarTweet);

    document.addEventListener("DOMContentLoaded", () => {
        tweets = JSON.parse(localStorage.getItem("tweets")) || [];

        console.log(tweets);
        
        crearHTML();

    });
}

//Funciones

function agregarTweet(e) {
    e.preventDefault();
    
    const tweet = document.querySelector("#tweet").value;
    if (tweet === "") {
        mostrarError("El mensaje no puede ir vacio");
        return;
    }

    const tweetObj = {
        id : Date.now(),
        tweet,
    }

    //agregando el tweet
    tweets = [...tweets, tweetObj];
    console.log(tweets);

    crearHTML();
    formulario.reset();//reiniciar el formulario
    
    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

function mostrarError(error) {
    //crear el elemento
    const mensajeError = document.createElement("p");
    mensajeError.textContent = error;
    mensajeError.classList.add("error");

    //insertar el elemento
    const contenido = document.querySelector("#contenido");
    contenido.appendChild(mensajeError);

    //elimina el alerta despues de un tiempo standar
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

function crearHTML() {

    limpiarHTML()

    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            const li = document.createElement("li");
            li.innerText = tweet.tweet
            listaTweeta.appendChild(li);
        })
    }
}

function limpiarHTML(){
    while (listaTweeta.firstChild) {
        listaTweeta.removeChild(listaTweeta.firstChild)
    }
}