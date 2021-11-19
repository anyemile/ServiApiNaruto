// console.log("Texto de prueba con nodemon")

const express = require('express') //Llamado del servicio de express
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express(); //Implementado el servicio en la aplicación

conectarDB();
app.use(cors());

// app.get('/', (req, res) => {
//     res.send("Holi")
// })

app.use(express.json());

app.use('/api/personaje', require('./routes/personaje'));

//localhost:4000 - 127.0.0.1:4000
app.listen(4000, ()=> {
    console.log("El servicio esta funcionando")
})
