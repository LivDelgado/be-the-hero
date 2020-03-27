const express = require('express'); // importação do express

const app = express(); // criando a aplicação
app.use(express.json());

const port = 3333;

app.get('/', (request, response) => {
    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Lívia Delgadado"
    });
});

app.listen(port); // configurando a porta do servidor da aplicação
console.info("Server listening at port " + port);