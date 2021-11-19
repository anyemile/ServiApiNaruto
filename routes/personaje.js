// //rutas para gestion de personajes
const express = require('express');
const personajeController = require('../controllers/personajeController');
const router_app = express.Router();

//El path al que accedera el usuario para ejecutar este metodo [/api/agregarpersonaje]
// router_app.post('/', () => {
//     console.log('Creando personaje...');
// })

router_app.post('/', personajeController.crearPersonaje);
router_app.get('/', personajeController.consultarPersonjes);
router_app.put('/:id', personajeController.actualizarPersonaje);
router_app.delete('/:id', personajeController.eliminarPersonaje);
router_app.get('/:id', personajeController.encontrarPersonaje);

module.exports = router_app;