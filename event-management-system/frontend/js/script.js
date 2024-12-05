const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configuração do EJS como motor de views
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Array para armazenar os eventos
let eventos = [];

// Rota para a página de cadastro
app.get('/', (req, res) => {
  res.render('index');
});

// Rota para processar o envio do formulário e exibir os eventos
app.post('/cadastro', (req, res) => {
  const { nome, descricao, data, local } = req.body;

  // Criar um objeto para o evento
  const evento = { nome, descricao, data, local };

  // Adicionar o evento ao array
  eventos.push(evento);

  // Renderizar a página com os eventos
  res.render('eventos', { eventos });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
