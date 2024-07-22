//En esta pagina van a poder consultar la informacion de una amplia gama de vinos nacionales e importados, y tambien comprarlos, para eso deberan ingresar sus datos
//let edad = parseInt (prompt("¿Cuántos años tiene?"))
//if (edad >=18){
  //  alert ("Puede ingresar a la web")
//}else if (isNaN (edad)){
   // alert ("Por favor ingrese un tipo de dato valido")
//}else if (edad <0){
  //  alert ("El tipo de deato debe ser un valor positivo")
//}else {
  //  alert ("Usted es menor de edad, no puede ingresar a la web")
//.}
const datos = [];
function solicitarDatos(){
    const nombre = prompt("Ingresa tu nombre:");
    if (nombre === null){
        alert ("Debe ingresar un dato valido");
        return;
    } else if (nombre.trim()===""){
        alert ("Debe ingresar un dato valido");
        return;
    }
    const apellido = prompt("Ingresa tu apellido:");
    if (apellido ===null){
        alert ("Debe ingresar un dato valido");
        return;
    }else if (apellido.trim() ===""){
        alert ("Debe ingresar un dato valido");
        return;
    }
    const dni = prompt("Ingrese su DNI;");
    if (dni ===null){
        alert ("Debe ingresar un dato valido");
        return;
    }else if (dni.trim()===""){
        alert ("Debe ingresar un dato valido");
        return;
    }
}