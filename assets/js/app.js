document.addEventListener("DOMContentLoaded", function(){

    const botones = document.querySelectorAll(".dropdown-btn");

    botones.forEach(function(boton){

        boton.addEventListener("click", function(){

            const submenu = boton.parentElement.querySelector(":scope > .submenu");

            if(submenu){

                if(submenu.style.display === "block"){

                    submenu.style.display = "none";

                } else {

                    submenu.style.display = "block";

                }

            }

        });

    });

});
