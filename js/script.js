function total() {
    var cant = document.getElementById('cantidad').value;
    var cat = document.getElementById('categoria').value;
    var muestra = document.getElementById('pagar');
    switch (cat) {
        case "Estudiante":
            muestra.innerHTML = "Total a Pagar: $ "+200*0.2*cant;
            break;
        case "Trainee":
            muestra.innerHTML = "Total a Pagar: $ "+200*0.5*cant;
            break;
        case "Junior":
            muestra.innerHTML = "Total a Pagar: $ "+200*0.85*cant;
            break;
        default:
            muestra.innerHTML = "Total a Pagar: $ "+200*cant;
    }
}

function validar(formulario) {
    if (formulario.nombre.value.trim().length == 0) {
        alert("Debe ingresar un nombre");
        return false;
    }
    if (formulario.apellido.value.trim().length == 0) {
        alert("Debe ingresar un apellido");
        return false;
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(formulario.correo.value)) {
        alert("Debe ingresar un email válido");
        return false;
    }
    if (formulario.cantidad.value <= 0) {
        alert("Debe ingresar una cantidad mayor a 0");
        return false;
    }
    total();
    return true;
}

function borrar() {
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('correo').value = "";
    document.getElementById('cantidad').value = "";
    document.getElementById('categoria').value = "Seleccione categoría...";
    document.getElementById('pagar').innerHTML = "Total a Pagar: $ ";
}
