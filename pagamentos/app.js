const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Pagamentos funcionando');
});

app.listen(3002, () => {
  console.log('Servidor rodando na porta 3002');
});