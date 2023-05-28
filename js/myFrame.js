// Función para reproducir automáticamente el iframe
function reproducirIframe() {
    var iframe = document.getElementById('myFrame').contentWindow;
    iframe.postMessage('play', 'https://www.youtube.com/embed/vfwSVhFS4es'); // Reemplaza con la URL del sitio web que contiene el iframe
}

// Detectar el evento de recarga de la página
window.onload = function () {
    reproducirIframe(); // Reproducir automáticamente el iframe al cargar la página
};