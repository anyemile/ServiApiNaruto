const Personaje = require("../models/Personaje");

exports.crearPersonaje = async(req, res) => {
    // console.log('creando personaje desde el controlador');
    // console.log(req.body);
    try {
        let data_personaje;
        data_personaje = new Personaje(req.body);
        await data_personaje.save();
        res.send(data_personaje);
    } catch (error) {
        console.log(error)
        res.status(500).send("Ooops hay un error en la API... :'( ")
    }

}

exports.consultarPersonjes = async(req, res) => {
    try {
        const mis_personajes = await Personaje.find();
        res.json(mis_personajes);
    } catch (error) {
        console.log(error)
        res.status(500).send("No se puede consultar la información :(  ")
        
    }
}

exports.actualizarPersonaje = async(req, res) => {
    try {

        console.log(req.body)
        const {nombre, genero, tecnicas, clan, chakra } = req.body
        let data_personaje = await Personaje.findById(req.params.id);
        console.log(data_personaje);

        if(!data_personaje){
            res.status(404).json({msg: 'No existe el personaje solicitado, No fue actualizado.'});
        }

        data_personaje.nombre = nombre; 
        data_personaje.genero = genero; 
        data_personaje.tecnicas = tecnicas; 
        data_personaje.clan = clan; 
        data_personaje.chakra = chakra; 

        data_personaje = await Personaje.findOneAndUpdate( { _id: req.params.id }, data_personaje, { new: true } );
        res.json(data_personaje);

    } catch (error) {
        console.log(error)
        res.status(500).send("No se puede actualizar contactese con el  administrador :(  ");
    }

}

exports.eliminarPersonaje = async(req, res) => {
    try {
        let data_personaje = await Personaje.findById(req.params.id);
        
        if(!data_personaje){
            res.status(404).json( { msg: 'No existe el personaje que desea eliminar en la base de datos'} );
        }

        await Personaje.findOneAndRemove( { _id: req.params.id} );
        res.json({ msg:'Personaje eliminado correctamente'});

    } catch (error) {
        console.log(error)
        res.status(500).send("No se pudo eliminar el personaje");
    }
}

exports.encontrarPersonaje = async(req, res) => {
    try {        
        let data_personaje = await Personaje.findById(req.params.id);
        
        if(!data_personaje){
            res.status(404).json( { msg: 'No existe el personaje en la base de datos'} );
        }

        res.json(data_personaje);

    } catch (error) {
        console.log(error)
        res.status(500).send("No se pudo encontrar el personaje, error interno");
    }
}