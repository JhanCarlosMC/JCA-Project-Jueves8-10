const chalk = require('chalk');

console.log(chalk.blue('Hola'));
console.log(chalk.red('Adios'));

let tareas= [];
function agregar(tarea){

}


let list = []; //Creacion una lista
console.log(chalk.green(list));
console.log(chalk.yellow(list.length));

list[0] = "Elemento 1";
console.log(chalk.green(list));
console.log(chalk.yellow(list.length));

list.push("Elemento 2"); //Agregar elemento
console.log(chalk.green(list));
console.log(chalk.yellow(list.length)); //Cantidad de elementos