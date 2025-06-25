document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('#animation-container .imagen');
    let actual = 0;
    function mostrarImagen(index) {
        imagenes.forEach((div, i) => {
            if (i === index) {
                div.classList.add('active');
            } else {
                div.classList.remove('active');
            }
        });
    }
    mostrarImagen(actual);
    setInterval(() => {
        actual = (actual + 1) % imagenes.length;
        mostrarImagen(actual);
    }, 300);
});