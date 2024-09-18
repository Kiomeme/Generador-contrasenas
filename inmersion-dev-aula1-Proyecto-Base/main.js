let cantidad = document.getElementById("cantidad"); //Se usa get element para indicar que el numero que se ingrese en el cuadrado cantidad sea el que usaremos, pero el numero aparece como string no como int
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");

const cadenaCaracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generar() {
  let numeroDigitado = parseInt(cantidad.value); //Se crea una funcion para transformar el numero escrito en cantidad a un int

  if (numeroDigitado < 6) {
    // se usa la funcion ND en vez de cantidad por que en ND ya esta transformada a un string
    alert("La cantidad de caracteres debe ser mayor que 6");
  }
  let password = ""; //Se crea esta funcion para almacenar la contrasena

  for (
    let x = 0;
    x < numeroDigitado;
    x++ //Se escribe para iniciar un bucle en el cual se seleccionara un caracter aleatorio. Le asignamos un valor a x, indicamos que x debe ser mayor al numero escrito por la persona y el x++ sirve para agregar un 1 al final de la operacion para que asi la cadena no sea infinita. Terminara la cadena cuando X sea igual al numero digitado
  ) {
    let caracterAleatorio =
      cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)]; // Se crea la rfuncion para lograr que el computador seleccione un caracter aleatorio para crear la contrasena. Math floor sirve para que el numero no sea decimal. Math random genera el numero aleatorio (la posicion del caracter en Caracteres) se multiplica por la funcion caracteres para darle la info de los caracteres que usara el programa en la creacion de la contrasena

    password += caracterAleatorio; //Se empieza el bucle. Se le coloca += y no solo = para que se muestren todos los caracteres en pantalla, si no solo se mostraria el ultimo
  }
  contrasena.value = password; //Logra que se muestre en la casilla de contrasena el valor generado en password
}
