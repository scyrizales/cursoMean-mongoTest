let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AutorSchema = new Schema({
    nombre: String,
    web: String
});

module.exports = mongoose.model('Autores', AutorSchema);