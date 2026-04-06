const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Estoque funcionando');
});

app.listen(3003, () => {
  console.log('Servidor rodando na porta 3003');
});