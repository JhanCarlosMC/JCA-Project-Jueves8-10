const chalk = require('chalk');
const express = require('express'); // Importar express
const app = express(); //Crear app express
const puerto = 3000; //Puerto de escucha

//Endpoint
app.get('/', (req, res) => { //Request - Response
    res.send('Hola Mundo!');
});

//Run del servidor
app.listen(puerto, () => {
    console.log(chalk.green(`Servidor escuchando en http://localhost:${puerto}`));
});