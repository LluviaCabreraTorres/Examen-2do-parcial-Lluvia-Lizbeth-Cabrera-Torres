const mongoose = require('mongoose');

const SabritasSchema = new mongoose.Schema({
    codigo:{
        unique:true,
        type: String,
        required:true
    },
    nombre:{
        type: String,
        required:true
    },
    gramos:{
        type: Number,
        default:100
    },
    precio:{
        type: Number
    },
    fecharegistro:{
        type: Date,
        default:Date.now

    }
})

const Sabritas = mongoose.model('Sabritas', SabritasSchema);

module.exports = Sabritas;