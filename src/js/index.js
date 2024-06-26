/* para importaciones de modulos principales */

$(document).ready(function () {
    $("#menuContainer").load("./src/views/menu.html");
    $("#body").load("./src/views/body.html"); 
    //$("#body").load("./src/views/comp/otros/notUno.html");
    $("#footerContainer").load("./src/views/footer.html");
});

window.addEventListener('beforeunload', function () {
    localStorage.clear();
});



