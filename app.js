let lienzo = document.getElementById("pantalla-radar");
let pincel = lienzo.getContext("2d");

// Posición inicial en el centro de la pantalla
let posicionX = 375; 
let posicionY = 275; 

// Dibujamos nuestro sujeto de pruebas
function dibujarBloque() {
    // 1. IMPORTANTE: Limpiamos la pantalla entera antes de dibujar
    pincel.clearRect(0, 0, 800, 600);

    pincel.fillStyle = "#ff0055"; 
    pincel.fillRect(posicionX, posicionY, 50, 50);
}

// Dibujamos el primer cuadro al arrancar
dibujarBloque();

// 2. NUESTRO ESPÍA: Vigila todo el documento esperando una tecla
document.addEventListener("keydown", function(evento) {
    
    // Si apretamos la flecha DERECHA o la "d"
    if (evento.key === "ArrowRight" || evento.key === "d") {
        posicionX = posicionX + 15; // Avanzamos 15 píxeles a la derecha
    }
    // Si apretamos la flecha IZQUIERDA o la "a"
    else if (evento.key === "ArrowLeft" || evento.key === "a") {
        posicionX = posicionX - 15; // Retrocedemos 15 píxeles
    }
    // Si apretamos la flecha ARRIBA o la "w"
    else if (evento.key === "ArrowUp" || evento.key === "w") {
        posicionY = posicionY - 15; // ¡Atención! Restamos para subir
    }
    // Si apretamos la flecha ABAJO o la "s"
    else if (evento.key === "ArrowDown" || evento.key === "s") {
        posicionY = posicionY + 15; // Sumamos para bajar
    }

    // 2. --- LOS PATOVICAS FRONTERIZOS ---
    // Seguridad del Eje X (Izquierda y Derecha)
    if (posicionX < 0) { 
        posicionX = 0; 
    }
    if (posicionX > 750) { 
        posicionX = 750; 
    }

    // Seguridad del Eje Y (Techo y Piso)
    if (posicionY < 0) { 
        posicionY = 0; 
    }
    if (posicionY > 550) { 
        posicionY = 550; 
    }

    // 3. Volvemos a dibujar
    dibujarBloque();
});