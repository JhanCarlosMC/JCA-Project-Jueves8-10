const express = require('express');
const app = express();
app.use(express.json());


// Array de jugadores
let jugadores = [
    {id: 1, nombre: 'DragonSlayer', juego: 'League of Legends', nivel: 'Pro', pais: 'Colombia'},
    {id: 2, nombre: 'ShadowNinja', juego: 'CS:GO', nivel: 'Intermedio', pais: 'México'},
    {id: 3, nombre: 'FireMage', juego: 'Valorant', nivel: 'Amateur', pais: 'Argentina'},
];

app.listen(3000, () => {
    console.log('API Torneo Gaming en http://localhost:3000');
});

// Obtener jugador por ID
app.get('/jugador/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const jugador = jugadores.find(j => j.id === id);
    if (!jugador) {
        return res.status(404).json({ error: 'Jugador no encontrado en el torneo...' });
    }
    res.json(jugador);
});
// Obtener todos los jugadores con filtros
app.get('/jugadores', (req, res) => {
    const limite = parseInt(req.query.limite);
    const juego = req.query.juego;
    const nivel = req.query.nivel;
    const pais = req.query.pais;
    const buscar = req.query.buscar;

    let resultado = jugadores;

    // Filtrar por juego
    if (juego) {
        resultado = resultado.filter(j => j.juego.toLowerCase().includes(juego.toLowerCase()));
    }

    // Filtrar por nivel
    if (nivel) {
        resultado = resultado.filter(j => j.nivel.toLowerCase().includes(nivel.toLowerCase()));
    }

    // Filtrar por pais
    if (pais) {
        resultado = resultado.filter(j => j.pais.toLowerCase().includes(pais.toLowerCase()));
    }

    // Filtrar por búsqueda general (nombre)
    if (buscar) {
        resultado = resultado.filter(j => j.nombre.toLowerCase().includes(buscar.toLowerCase()));
    }

    // Aplicar límite si se indicó
    if (!isNaN(limite) && limite > 0) {
        resultado = resultado.slice(0, limite);
    }

    res.json(resultado);
});
// Añadir Jugador
app.post('/jugador', (req, res) => {
    const nuevoJugador = req.body;
    if (!nuevoJugador.nombre || !nuevoJugador.juego || !nuevoJugador.nivel || !nuevoJugador.pais) {
        return res.status(400).json({ error: 'Faltan datos del jugador...' });
    }
    nuevoJugador.id = jugadores.length ? jugadores[jugadores.length - 1].id + 1 : 1;
    jugadores.push(nuevoJugador);
    res.status(201).json(nuevoJugador), ({message: '¡Jugador añadido correctamente!'});
});
// Actualizar Jugador
app.put('/jugador/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const indice = jugadores.findIndex(j => j.id === id);
    if (indice === -1) {
        return res.status(404).json({ error: 'Jugador no encontrado en el torneo...' });
    }
    const jugadorActualizado = req.body;
    if (!jugadorActualizado.nombre || !jugadorActualizado.juego || !jugadorActualizado.nivel || !jugadorActualizado.pais) {
        return res.status(400).json({ error: 'Faltan datos del jugador...' });
    }
    jugadorActualizado.id = id;
    jugadores[indice] = jugadorActualizado;
    res.json(jugadorActualizado), ({message: '¡Jugador actualizado correctamente!'});
});
// Eliminar Jugador
app.delete('/jugador/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const indice = jugadores.findIndex(j => j.id === id);
    if (indice === -1) {
        return res.status(404).json({ error: 'Jugador no encontrado en el torneo...' });
    }
    jugadores.splice(indice, 1);
    res.json({ message: '¡Jugador eliminado correctamente!' });
});