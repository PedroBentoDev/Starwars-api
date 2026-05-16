const express = require('express');
const app = express(); /* criando uma instância do express */
const port = 3000;

app.use(express.json());

const mongoose = require('mongoose');

/* Modelo do banco */
const Film = mongoose.model('Film', {
    title: String,
    description: String,
    image_url: String,
    trailer_url: String
});


/* Buscar filmes */
app.get('/', async (req, res) => {

    const films = await Film.find();

    res.send(films);

});


/* Criar filme */
app.post('/', async (req, res) => {

    const film = new Film({

        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url

    });

    await film.save();

    res.send(film);

});


app.delete('/films/:id', async (req, res) => {

    const id = req.params.id;

    const film = await Film.findByIdAndDelete(id);

    res.send(film);

});

/* Iniciar servidor */
app.listen(port, async () => {

    await mongoose.connect(
    ''
);
    console.log("Conectado ao banco de dados");
    console.log("App running");

});

