//Modificacion del DOM -> getElementById
//Tipos de datos - String Boolean Number
//Tipos de datos Complejos/Estructurados
    //Arreglos - Listas
    //Objetos - Resultado de usar molde - Concreto
    //Clases - Molde - Abstracto
    //POO - Paradigma Orientado A Objetos
//Operadores
    //Logicos - && || !
    //Aritmeticos + - * / % ** 
    //Relacionales > < >= <= == != === 
    //De asignacion = += -= *= /= %= **=
        // x +=10 -> x = x+10

//Tipos de variables
    //let - const

//Estructuras Condicionales
    //if - else
    //switch

//Estructuras de Repeticion/Ciclicas
    //for (let i = 0; i < 10; i++) {
    //while 
    //do while


let dia = "lunes"

switch (dia) {
    case "lunes":
        console.log("¡A trabajar!");    
        break;
    case "viernes":
        console.log("¡Por fin viernes!");
        break;
    case "sábado":
    case "domingo":
        console.log("¡Fin de semana!");
        break;
    default:
        console.log("Un día más de la semana");
}

//Funciones
    // Parametros
    // Bloque Codigo
    // Retorno
    // Nombre

//Solicita un número n y genera en consola los primeros n términos de la secuencia de Fibonacci.
function generar_fibonacci(cantTerminos){
	let termino_uno = 0;
	let termino_dos = 1;
	
	if( cantTerminos === 1){
		console.log(termino_uno);
		
	}else if(cantTerminos === 2){
		console.log(termino_uno);
		console.log(termino_dos);
		
	}else{
		console.log(termino_uno);
		console.log(termino_dos);
		
		for(let i = 3; i <= cantTerminos; i++){
			let termino_tres = termino_uno + termino_dos;
			console.log(termino_tres);

			termino_uno = termino_dos; // 0 - 1 - 1
			termino_dos = termino_tres;// 1 - 1 - 2
		}
	}
}

generar_fibonacci(5);