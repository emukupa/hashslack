const server = require('./server');

const port = process.env.PORT || 8000;

server.listen(port, err => {
  if (err) return console.log(`Error encountered: ${err}`);
  console.log(`Serber running on port ${port}`);
});
