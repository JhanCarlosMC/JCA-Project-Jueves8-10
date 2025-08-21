// console.log("Hola mi nombre es Jhan Carlos")
//Clase -> (Abstracto) Molde para creacion de elementos (Persona)
//Objeto -> (Concreto) Elemento creado a partir de una clase (nombre: "Jhan"
//edad: 24)...
//POO -> Paradigma Orientado a Objetos
// --------------------- Tipos de Variables --------------------------
// TipoVariable NombreVariable = ValorVariable;
let nombrePersona; //Declaracion (Undefined inicialmente)
nombrePersona = "Jhan Carlos"; //Asignacion
const id = "123456789"; //Inicializacion

// --------------------- Tipos de Datos ------------------------------
// Numero -> Number (10 10.0 -10 -10.0)
let numero = 20;
// console.log(numero)

// Texto -> Strings ("Hola" 'Adios' "@")
let texto = "Hola Mundo";
// console.log(texto)

// Logico -> Boolean (true false)
let logico = true;
let logico2 = false;
// console.log(logico)
// console.log(logico2)

// Nulo -> Null (Vacio)
let nulo = null;
// console.log(nulo)

// Objeto -> Object (Representacion Concreta de algo)
// persona1 = {nombre: "Jhan", edad: 24}
let persona1 = {
    nombre: "Jhan",
    edad: 24,
    correo: "jhan@correo.com"
}
// console.log(persona1)
// Arreglo -> Array (Lista/Conjunto de elementos)
// edades = [10, 20, 30, 40, 50]
let edades = [10, 20, 30, 40, 50];
// console.log(edades)

// Indefinido -> Undefined (No Definido)
let indefinido = 71243894;
// console.log(indefinido);


// ----------------------- Tipos de Operadores ----------------------
//Aritmeticos
let suma = 2 + 2;
let resta = 2 - 2;
let multiplicacion = 2 * 2;
let division = 2 / 2;
let modulo = 2 % 2;

//Comparacion/Relacionales
let igual = 2 == "2"; //true
let igualdadEstricta = 2 === "2"; //false
let diferente = 2 != 2; //false
let mayor = 2 > 2; //false
let menor = 2 < 2; //false
let mayorIgual = 2 >= 2; //true
let menorIgual = 2 <= 2; //true

//Logicos
let and = true && true; //true
let or = true || false; //true
let not = !true; //false

// ------------------ Estructuras Condicionales ------------------
//Si - if
// if (condicion) {
//     //Codigo de ser verdadera
// }

if (3 > 2) {
    // console.log("3 es mayor");
}

//If-else
// if (condicion) {
//     //Codigo de ser verdadera
// }else{
//     //Codigo de ser falso
// }

// if (3 > 4) {
//     console.log("3 es mayor");
// } else {
//     console.log("3 es menor");
// }

//If anidados
// let numeroTest = -5;
// if (numeroTest > 10) {
//     if (numeroTest < 20) {
//         console.log("El numero esta entre 10 y 20");
//     }
// } else {
//     if (numeroTest > 0) {
//         console.log("El numero esta entre 0 y 10");
//     } else {
//         console.log("El numero es negativo");
//     }
// }

// let nota = "3";
// console.log(nota)
// let notaNumero = parseInt(nota);
// console.log(notaNumero)


// if (nota < 0 || nota > 5) {
//     console.log("Nota invalida");
// } else if (nota < 3) {
//     console.log("Ineficiente")
// } else if (nota < 4) {
//     console.log("Aceptable")
// } else {
//     console.log("Sobresaliente")
// }

// nota = 100;

// if (nota == 10) {
//     console.log("Perfecto");
// } else if (nota > 8) {
//     console.log("Excelente");
// } else if (nota > 6) {
//     console.log("Aprobado");
// } else {
//     console.log("Necesitas estudiar más");
// }

// ------------------ Estructuras Ciclicas ------------------
// Inicio - Condicion de parada - Incremento
//For
console.log("Ejecucion FOR");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Ejecucion WHILE");
//While
let i = 1;
while(i < 11){
    console.log(i);
    i++;
}

console.log("Ejecucion DO-WHILE");
//Do-while
i = 1;
do{
    console.log(i);
    i++;
}while(i < 11);
