let mongoose = require('mongoose');
let Post = require('./post');
let Autor = require('./autor');

mongoose.connect('mongodb://127.0.0.1:27017/blog');

Post.remove({}).exec();

Autor.create({
    nombre: 'Sergio',
    web: 'https://www.google.com'
}).then(function(autor) {
    Post.create({
        titulo: 'Post con Autor',
        cuerpo: 'Nuevo post conectado a un autor',
        fecha: new Date(),
        autor: autor._id
    }).then(function (post) {
        let query = Post.find({});
        query.populate('autor');
        query.exec().then(function (posts) {
            console.log(posts);
        });
    }, function (err) { console.log(err); });
});