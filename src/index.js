 const express = require('express');
 const app = express (); /* criasnado uma instancia do express*/
 const port = 3000; /* definindo a porta do servidor */

app.get('/', (req, res) => { /* definindo a rota raiz do servidor */
    res.send('Hello World!'); /* enviando uma resposta para o cliente */
});
