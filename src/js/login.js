
$("#clickEnLogin").click(function () {
    var usuario = $("#formUsuario").val();
    var password = $("#formPassword").val();
    var validacion = validarEspaciosLlenos(usuario, password)
    if (!validacion) {
        Swal.fire({
            title: "CAMPOS VACIOS",
            text: "Debe ingresar el USUARIO y CONTRASEÑA para continuar",
            icon: "warning"
        });
        return
    }
    validarLogin(usuario, password)
});

function validarEspaciosLlenos(usuario, password) {
    return usuario != "" && password != "" ? true : false
}

function validarLogin(usuario, password) {
    var index = USUARIOS.findIndex(x => x == usuario)
    console.log('index', index);
    if ((index !== -1 && PASSWORD[index] != password) || index === -1 && PASSWORD[index] != password) {
        Swal.fire({
            title: "ERROR DE CREDENCIALES",
            text: "Debe ingresar con las credenciales correctas",
            icon: "error"
        });
        return
    }
    localStorage.setItem('logueado',true)
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Bienvenido al Sistema",
        showConfirmButton: false,
        timer: 1500
    });
    $("#body").load("./src/views/comp/om/om.html");
}

const USUARIOS = ['admin', 'humberto']
const PASSWORD = ['admin', 'humberto']