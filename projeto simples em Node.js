const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Olá, mundo!');
});

server.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

 
 agora apenas ir no navegador e digitar a rota para ver a frase 'olá mundo' na tela
