
//O express é uma função que quando chamada cria um novo servidor, uma
//nova porta de entrada para receber requisições/respostas
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

//criando o servidor a partir do express, mas ele não esta sendo ouvido ainda
const server = express();

//faz a conecção com o BD
mongoose.connect('mongodb+srv://cursoreact:cursoreact@cluster0-92lrh.mongodb.net/cursoreact?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());

//para saber que minhas requisições estão em JSON
server.use(express.json());

// o USE serve para colocar alguma configuração que esta em outro arquivo
server.use(routes);

//informo qual porta o servidor vai ouvir
server.listen(3333);