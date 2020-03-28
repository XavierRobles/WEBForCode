function validar() {
  /**Registro */
  /*almacenamos los valores de la cajas en los que introducimos los datos */
  var usuario, apellido, mail, empresa, telefono, expresion;
  usuario = document.getElementById("usuario");
  apellido = document.getElementById("apellido");
  mail = document.getElementById("mail");
  empresa = document.getElementById("empresa");
  telefono = document.getElementById("telefono");

  /* Estructura de un correo electronico: text123@texto.com, .es, etc */
  expresion = /\w+@\w+\.+[a-z]/;
  /**************************************************************** */

  if (!usuario.value) {
    alert("Ingrese su nombre");
    usuario.style.backgroundColor = "red";
    return false;
  }

  if (!apellido.value) {
    alert("Ingrese su apellido");
    apellido.style.backgroundColor = "red";
    return false;
  }

  if (!empresa.value) {
    alert("Ingrese su empresa");
    empresa.style.backgroundColor = "red";
    return false;
  }
  if (!telefono.value) {
    alert("Ingrese su telefono");
    telefono.style.backgroundColor = "red";
    return false;
  }

  if (!mail.value || !expresion.test(mail.value)) {
    alert("Ingrese un Email correctamente");
    mail.style.backgroundColor = "red";
    return false;
  } else if (usuario.value.length > 20) {
    alert(
      "El numero de caracteres introducido superan el limite permitido. 20 caracteres maximo"
    );

    return false;
  } else if (apellido.value.length > 20) {
    alert(
      "El numero de caracteres introducido superan el limite permitido. 20 caracteres maximo"
    );
    return false;
  } else if (mail.value.length > 50) {
    alert(
      "El numero de caracteres introducido superan el limite permitido. 50 caracteres maximo"
    );
    return false;
  } else if (empresa.value.length > 20) {
    alert(
      "El numero de caracteres introducido superan el limite permitido. 20 caracteres maximo"
    );
    return false;
  } else if (telefono.value.length > 10) {
    alert(
      "El numero de caracteres introducido superan el limite permitido. 10 caracteres maximo"
    );
    return false;
  } else {
    alert("Gracias  nos pondremos en contacto con usted lo antes posible.");
  }
}
