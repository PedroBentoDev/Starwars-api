 const express = require('express');
 const app = express (); /* criasnado uma instancia do express*/
 const port = 3000; /* definindo a porta do servidor */

const mongooose = require('mongooose');
mongooose.connect('');

/*objeto que será enviado para bancoi de bd*/
const Film = mongoose.model('Film', {
      title: String,
      description : String,
      image_url : String,
      trailer_url : String,
});

app.get('/', (req, res) => { /* definindo a rota raiz do servidor */
    res.send('Hello World!'); /* enviando uma resposta para o cliente */
});

app.post("/", async(req,res ) => { 
  const film = new film({ 
   tittle : req.body.tittle,
   description : req.body.description,
   image_url: req.body.image_url,
   trailer_url : req.body.trailer_url
  })

 await  film.save();
 res.send(film)
})
app.listen (port,() =>{
 console.log("app running");
 
 });
