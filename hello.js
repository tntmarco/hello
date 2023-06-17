const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World! 22222');
});

server.listen(3000, 'localhost', () => {
  console.log('Servidor rodando em http://localhost:3000/');
});
