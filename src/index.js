const express = require('express'); // importação do express
const routes = require('./routes');

const app = express(); // criando a aplicação

app.use(express.json());
app.use(routes);

const port = 3333;
app.listen(port); // configurando a porta do servidor da aplicação
console.info("Server listening at port " + port);