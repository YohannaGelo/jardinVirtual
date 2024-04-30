window.addEventListener('load', function () {
    console.log('BIENVENIDO AL JARDIN VIRTUAL');
});

document.getElementById('areaSensible').addEventListener('mouseenter', function () {
    console.log("Cuidando la planta");
    this.innerHTML = "";
    this.innerHTML = `<img src="img/contenta.png">`;
});

document.getElementById('areaSensible').addEventListener('mouseleave', function () {
    console.log("Dejando la planta sola");
    this.innerHTML = "";
    this.innerHTML = `<img src="img/triste.png">`;
});

document.addEventListener('keydown', function(event) {
    console.log(`Tecla presionada: ${event.key}`);
});

document.getElementById('botonClick').addEventListener('click', function() {
    console.log('Las plantas han sido regadas');
    contenta();
});


function contenta() {
    const lista = document.getElementById("areaSensible"); // Obtiene el elemento del DOM donde se mostrará la lista.
    lista.innerHTML = ""; // Limpia la lista actual antes de mostrar la nueva.
    
    const item = document.createElement("div"); // Crea un nuevo div 
    // Establece el contenido con un id para usar en el temporizador
    item.innerHTML = `<img src="img/contenta.png" id="imagenDinamica">`;
    lista.appendChild(item);

        // Cambia la imagen después de 5 segundos (5000 milisegundos).
        setTimeout(function() {
            document.getElementById("imagenDinamica").src = "img/triste.png"; 
        }, 5000);
}