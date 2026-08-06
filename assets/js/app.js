const botones = document.querySelectorAll(".dropdown-btn");


botones.forEach(boton => {

    boton.addEventListener("click", () => {

        boton.parentElement.classList.toggle("active");

    });

});
Activar menú desplegable
