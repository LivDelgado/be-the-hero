const express = require('express'); // importação do express

const app = express(); // criando a aplicação

app.get('/', (request, response) => {
    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Lívia Delgadado"
    });
});

app.listen(3333); // configurando a porta do servidor da aplicação