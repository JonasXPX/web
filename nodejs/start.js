const phpServer = require('node-php-server');

phpServer.createServer({
  port: 8000,
  hostname: '127.0.0.1',
  base: '.',
  keepalive: true,
  open: false,
  bin: "php",
  router: __dirname + "../vip.php"
});

// phpServer.close();
