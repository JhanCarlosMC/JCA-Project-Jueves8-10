console.log("Hola mi nombre es Jhan Carlos")
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
console.log(numero)

// Texto -> Strings ("Hola" 'Adios' "@")
let texto = "Hola Mundo";
console.log(texto)

// Logico -> Boolean (true false)
let logico = true;
let logico2 = false;
console.log(logico)
console.log(logico2)

// Nulo -> Null (Vacio)
let nulo = null;
console.log(nulo)

// Objeto -> Object (Representacion Concreta de algo)
        // persona1 = {nombre: "Jhan", edad: 24}
let persona1 = {
    nombre: "Jhan",
    edad: 24,
    correo: "jhan@correo.com"
}
console.log(persona1)
// Arreglo -> Array (Lista/Conjunto de elementos)
        // edades = [10, 20, 30, 40, 50]
let edades = [10, 20, 30, 40, 50];
console.log(edades)

// Indefinido -> Undefined (No Definido)
let indefinido = 71243894;
console.log(indefinido);


// ----------------------- Tipos de Operadores ----------------------
//Aritmeticos
let suma = 2+2;
let resta = 2-2;
let multiplicacion = 2*2;
let division = 2/2;
let modulo = 2%2;

//Comparacion/Relacionales
let igual = 2=="2"; //true
let igualdadEstricta = 2==="2"; //false
let diferente = 2!=2; //false
let mayor = 2>2; //false
let menor = 2<2; //false
let mayorIgual = 2>=2; //true
let menorIgual = 2<=2; //true

//Logicos
let and = true && true; //true
let or = true || false; //true
let not = !true; //false
