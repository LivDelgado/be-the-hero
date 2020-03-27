const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Lívia Delgadado"
    });
});

module.exports = routes;