

const usuarios = [];

function registroDeUsuarios() {
    const edad = parseInt(prompt("cuantos años tiene"))
if (edad >= 18){
   alert ("pase")
   const nombre = prompt("Ingresa tu nombre:");
   if (nombre === null) {
       alert("Registro invalido. No se ingresaron datos.");
       return;
   } else if (nombre.trim() === "") {
       alert("El nombre no puede estar vacío. Por favor, intenta de nuevo.");
       return;
   }
   const apellido = prompt("Ingresa tu apellido:");
   if (apellido === null) {
       alert("Registro invalido. No se ingresaron datos.");
       return;
   } else if (apellido.trim() === "") {
       alert("El apellido no puede estar vacío. Por favor, intenta de nuevo.");
       return;
   }
   const dni = prompt("Ingresa tu DNI:");
   if (dni === null) {
       alert("Debe ingresar un dato valido");
       return;
   } else if (dni.trim() === "") {
       alert("El DNI no es valido");
       return;
   }
   const confirmar = confirm(`Sus datos son los siguientes:\nNombre: ${nombre}\nApellido: ${apellido}\nDni: ${dni}`);
   if (confirmar) {
       const usuario = {
           nombre: nombre,
           apellido: apellido,
           dni: dni,
           edad: edad,
       };
       usuarios.push(usuario);
       alert("Registro exitoso");
       console.log("Datos actuales:", usuarios);
   } else {
       alert("Registro cancelado, intente nuevamente");
       return;
   }
} else if (isNaN (edad)){
   alert ("por favor ingrese un tipo de dato valido")
} else if (edad <0){
   alert ("las edades deben ser números positivos")
} else {
   alert("usted es menor de edad, no puede ingresar al sitio web")
}
   
}