let numero= 24
console.log (numero)

const  dni = 42263247;
console.log ("DNI", dni)

const info= `Mi DNI ${dni}`
console.log (info)

const info2= "Mi DNI ES " + dni + "gracias por escucharme"
console.log (info2)

//let variable 
//console.log (variable)
//const nombre= prompt ("Diga su nombre");
//console.log (nombre)
let tiempo = 'lluvioso';
if(tiempo =='lluvioso'){
    console.warn('llevar paraguas');
}

//let edadMinima = 18;
//if(edadMinima >= 18){
  //  console.log('puede entrar a la disco');
//}else{
  //  console.warn('vuelve a tu casa');
//}
//let saldo = parseFloat(prompt("ingrece su saldo en numeros"))
//if(saldo < 0){
  //  alert("Tienes saldo negativo")
//}
//let edad = parseInt(prompt("Cuantos anos tiene"))
//if (edad >= 18){
  //  alert ("pase")
//} else {
  //  alert("usted es menor de edad, detengase")
//}
//let edad = parseInt(prompt("cuantos anos tiene"))
//if (edad >= 18){
  //  alert ("pase")
//} else if (isNaN (edad)){
  //  alert ("por favor ingrese un tipo de dato valido")
//} else if (edad <0){
  //  alert ("las edades son numeros positivos")
//} else {
  //  alert("usted es menor de edad, detengase")
//}

//let nombre = prompt("diga su nombre").toLocaleLowerCase()
//switch (nombre){
  //  case "franco":
    //    alert ("1 C")
      //  break
  //  case "diana":
    //    alert ("1 B")
      //  break
  //  case "jaime":
  //  case "juan":
   //     alert ("2A")
 //   case "laura":
   //     alert ("2 B")
  //  default: 
  //  alert ("usted no vive aqui")    
//}

/*for (let i=0; i<5; i=i+1){
    console.log ("este es i:", i)
}*/

function ingresarDato (tipoDato){
let dato = ""
do{
    dato = prompt (`Ingrese su ${tipoDato}. Se le pedira nuevamente que ingrese el dato si lo deja vacio o apreta cancelar.`)
    }while (dato === "" || dato === null)
        alert (`Su ${tipoDato} es: ${dato}`)
        return dato
}
const DNI = ingresarDato ("DNI")
const nombre = ingresarDato ("nombre")
const apellido = ingresarDato ("apellido")