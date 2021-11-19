const mongoose = require("mongoose"); //Llamado del servicio de Mongo
require('dotenv').config({ path: 'configura.env' }); //Llamado del archivo de variables importantes

const conectarDB = async() => {
    try {

        await mongoose.connect(process.env.MONGO_DB, { //Configuracion para conexion a Mongo
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
        process.exit(1); //Deter aplicacion
    }
}

module.exports =  conectarDB  //Exportar la función para la conexion