let mongoose = require('mongoose');
let Post = require('./post');

mongoose.connect('mongodb://127.0.0.1:27017/blog');

let p1 = new Post();
p1.titulo = 'Nuevo Post';
p1.cuerpo = 'Post creado desde mongoose';
p1.fecha = new Date();
p1.save(function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);

        Post.remove({ _id: post.id }).exec();
    }
});

Post.create({
    titulo: 'Nuevo Post 2',
    cuerpo: 'Este es otro post',
    fecha: new Date()
});