//variables

const formulario = document.querySelector("#formulario")
const listaTweeta = document.querySelector("#lista-tweets")
let tweets = [];

//Event Listeners

eventListeners();

function eventListeners(e) {
    formulario.addEventListener("submit", agregarTweet)
}

//Funciones

function agregarTweet(e) {
    e.preventDefault();
    console.log("Agregando Tweets")
}