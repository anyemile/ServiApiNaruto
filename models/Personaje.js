const mongoose =require('mongoose');

const personajeSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    tecnicas: {
        type: String,
        required: true
    },
    clan: {
        type: String,
        required: true
    },
    chakra: {
        type: String,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('Personaje', personajeSchema)