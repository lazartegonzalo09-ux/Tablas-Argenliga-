const botones = document.querySelectorAll(".dropdown-btn");

botones.forEach(boton => {

    boton.addEventListener("click", function(){

        const submenu = this.nextElementSibling;

        if(submenu){

            if(submenu.style.display === "block"){

                submenu.style.display = "none";

            }else{

                submenu.style.display = "block";

            }

        }

    });

});
