function cambiarEstado() {

        /*Alerta
        alert("Ayuda")
        */
        /*Title
        document.getElementsByTagName("title")[0].innerHTML = "Nuevo Título";
        */
        let imagen = document.getElementById('foco');
        if (imagen.src.match("focooff")) {
            imagen.src = "focoon.png";
        } else {
            imagen.src = "focooff.png";
        }
}