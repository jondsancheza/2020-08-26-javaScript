/*Var me permite realizar modificaciones a las variables, al igual que let.
const- constante que no permite cambiar su valor y se debe asignar el valor una vez declarada*/

var nombre5 = "Maria Perez";

nombre5 = "Maria Sánchez";//Me permite modificar su valor
console.log(nombre5);

//ES6
let nombreLet = "Laura Martinez";//Let puede ser modificado
nombreLet = "Laura Perez";
console.log(nombreLet);

/*const nombre6 = "Pedro Sánchez";//Al declarar su valor no puede ser modificad y en nav nos presenta error
nombre6 = "Pedro Garcia";*/

//Alcance global - Alcance Local

//Global: se puede modificar en cualquier sección del codigo

var global = 0; //Entra como o

function varGlobal() {
   for (var i = 0; i < 5 ; i++) {
    global = i;// En cada ciclo el valor de la variable i se le va a asignar a la global
    } 
}

varGlobal();
console.log(global);//Nos imprime 4

//LOCAL

function varLocal() {
    var Local = "Hola mundo!!"//Esto ya es una variable local
}

varLocal();
//console.log(local) Nos arroja un error, ya que es una variable local


function varPrueba() {
    var x = 70;
    if (true){ //Cumple simpre la función
        var x = 50;
        console.log(x)//Aqui aparece 50
    }
    console.log(x)//50
}

function letPrueba() {
    let y = 30;
    if (true){
        let y = 60; //variable diferente, solo se queda entre las llaves
        console.log(y) //Me imprime 60
    }
    console.log(y) //Me imprime 30
}

/* 
    LET: Se limita al bloque (scope) o su alcance, 
    CONST: No permite cambio una vez declarado o asignado un valor.
    VAR: Modifica la variable sin importar su bloque o alcance 
*/

//FUNCIONES
function soyUnaFuncion(num1,num2) {
    /*Retorna un valor o el resultado del proceso.
    Finaliza la ejecución del function*/
    return num1+num2;
}

console.log(soyUnaFuncion(5,3));//Me va a arrojar la estructura de la función

//Funciones anonimas
//Se utilizan directamente sin nombre.

//Función flecha

let sumar = (a,b)=> a+b;
console.log(sumar(10,15));

let hola = function () {
    return "Hola. cómo estas?"
}

console.log(hola());


let color = prompt("Ingrese un color en Ingles:");

if (color == "red") {
    document.write("<h1 style='color:red'>Si, es color es red-rojo </h1>")
}else {
    document.write("<h1 style='color:"+color+"'> No, el color no es Red el color escogido fue "+ color + "</h1>")
}

/* =Es de asignación
OPERADORES DE COMPARACIÓN
==Igualdad
===Estrictamente igual - Tiene que ser el mismo tipo de dato
!=Diferente o distinto
!==No identico, hasta el tipo de dato debe ser diferente.
<Menor que
<= menor o igual que
>Mayor que
>=Mayor o igual que
*/

let year = 2020;
if (year != 2020) {
    document.write("El año es diferente a 2020")
} else {
    document.write("Si el año es 2020")   
}

/* OPERADORES LOGICOS
&& AND -- Y
|| OR -- Ó
| NOT -- NEGACIÓN, QUE NO SE CUMPLA ALGO
*/

let nota = 3.7;

if (nota >= 4.5 && nota <=5) {
    document.write("Felicidades has ganado la beca!!")
} else if(nota < 4.5 && nota >=0){
    document.write("Vuelve a intentarlo !")
}else{
    document.write("Ingrese un numero entre 0 y 5")
}


let pais = "colombia";

if (pais == "colombia" || pais == "peri" || pais == "maxico") {
    document.write("<br>El pais pertenece a Latino America")
} else {
    document.write("<br>A donde pertenece ese país?")
}


var operacion = prompt("Digite la operación que deaea realizar (suma, resta multiplicacion o division)");
let num1 = parseFloat(prompt("Ingrese un número"))
let num2 = parseFloat(prompt("Ingrese el segundo número"))

switch (operacion) {
    case "suma"://Si es igual a suma
        document.write("<br> El resultado de la suma es: " + (num1+num2))
        break;

    case "resta":
        document.write("<br> El resultado de la resta es: " + (num1-num2))
        break;
    
    case "multiplicacion":
        document.write("<br> El resultado de la resta es: " + (num1*num2))
    break;

    case "division":
        document.write("<br> El resultado de la resta es: " + (num1/num2))
    break;

    default:
        document.write("Esta operación no existe")
        break;
}