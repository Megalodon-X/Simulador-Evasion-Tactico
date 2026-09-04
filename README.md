# Simulador-Evasion-Tactico 🎯

**[🕹️ ¡Probalo online acá directamente en tu navegador!](https://megalodon-x.github.io/Simulador-Evasion-Tactico/)**

Un prototipo interactivo en 2D que sirvió como base tecnológica y de pruebas para el desarrollo de [Ark-Evasion-Program]. Este proyecto es un "sandbox" minimalista enfocado puramente en las mecánicas de movimiento y físicas de colisión de bordes.

## ⚙️ Características Técnicas

* **Control de Entidades:** Movimiento fluido en 4 direcciones utilizando eventos de teclado (`keydown`) para mapear tanto flechas direccionales como **W, A, S, D**.
* **Motor de Renderizado:** Uso de `clearRect` y `fillRect` para simular fotogramas interactivos, borrando y redibujando la entidad principal en cada movimiento.
* **Seguridad Perimetral:** Algoritmo básico de colisión que impide que el bloque escape de la zona de pruebas de 800x600 píxeles.

## 🛠️ Tecnologías Usadas

* **Vanilla JavaScript:** Control del DOM, manipulación de coordenadas matemáticas (X, Y) y Event Listeners.
* **HTML5 Canvas:** Renderizado del área de pruebas.
* **GitHub Pages:** Despliegue del prototipo.

## 🚀 Cómo ejecutarlo

**Opción 1: Probar online (Recomendado)**
Entrá a [este enlace](https://megalodon-x.github.io/Simulador-Evasion-Tactico/) y usá las flechas o WASD para mover el bloque rojo.

**Opción 2: Localmente**
1. Cloná este repositorio:
  git clone [https://github.com/Megalodon-x/Simulador-Evasion-Tactico.git](https://github.com/Megalodon-x/Simulador-Evasion-Tactico.git)

  Abrí el archivo index.html en tu navegador.

🧠 El detrás de escena (Notas de Desarrollo)
Este proyecto fue el "Paso 1" en mi aprendizaje sobre cómo funcionan los videojuegos en la web. Usando IA como guía, el objetivo aquí era aislar un problema específico: ¿Cómo hago que un cuadrado se mueva sin que deje una estela pintada y cómo evito que se vaya de la pantalla?

Una vez que logré dominar la lógica de los Event Listeners y los límites matemáticos (los "patovicas fronterizos" del código), utilicé esta base para construir un juego completo con enemigos y puntajes.
