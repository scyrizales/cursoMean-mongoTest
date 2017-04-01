let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let postSchema = new Schema({
    titulo: String,
    cuerpo: String,
    fecha: Date,
    autor: { type: Schema.Types.ObjectId, ref: 'Autores', required: true }
});

module.exports = mongoose.model('Post', postSchema);