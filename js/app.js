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
    
    const tweet = document.querySelector("#tweet").value;
    if (tweet === "") {
        mostrarError("El mensaje no puede ir vacio");
        return;
    }

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