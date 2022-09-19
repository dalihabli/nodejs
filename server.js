const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


require("dotenv").config();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Node');
});

server.listen(port, hostname, () => {
  console.log('Server running at http://'+hostname+' '+ port);
});

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}


console.log(process.env.EMAIL)


console.log(process.env.EMAIL)