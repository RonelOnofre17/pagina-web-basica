function validar(e) {
    if(
        validarCamposTexto(this) &&
        validarProvincia() &&
        confirm("¿Deseas enviar el formulario?"))
        return true;
    else {
        e.preventDefault();
        return false;
    }
}
function validarCamposTexto(objeto) {
    let formulario= objeto.form;
    for(leti= 0;i< formulario.elements.length;i++) {
        formulario.elements[i].classList.remove("error");
    if(
        formulario.elements[i].type =="text" &&
        formulario.elements[i].value == ""
        ) {
            alert
                ("El campo: "+
                    formulario.elements [i].name+
                    " no puede estar en blanco"
                );
            formulario.elements[i].classList.add("error");
            formulario.elements[i].focus();
            return false;}
        else if(formulario.elements[i].id == "edad") {
            let laEdad= formulario.elements[i].value;
            if(isNaN(laEdad) || laEdad<0 || laEdad> 115) {
                alert(
                        "El campo: "+
                        formulario.elements[i].name +
                        " posee valores incorrectos"
                );
                formulario.elements[i].classList.add("error");
                formulario.elements[i].focus();
                return false;
            }
        } else if
            (formulario.elements[i].id == "matricula") {
                const patron=/^\d{4}\s?[A-Z]{ 3 }$/;
            if (patron.test(document.getElementById("matricula").value)) {
                document.getElementById("matricula").classList.remove("error");
                return true;
            } else {
                alert("El campo: Matricula no está correcto.\n\nCuatro números, espacio en blanco opcional y 3 letras mayúsculas."
                );
                document.getElementById("matricula").focus();
                document.getElementById("matricula").classList.add("error");
                return false;
            }
        }
    }
    return true;
}
function validarProvincia() {
    if
        (document
            .getElementById("provincia").selectedIndex ==0) {
        alert("Atención!: Debes seleccionar una provincia.");
        document.getElementById("provincia").focus();
        document.getElementById("provincia").classList.add("error");
        return false;
    } else return true
        ;
    }
    document.getElementById("enviar").addEventListener
    ("click", validar, false);