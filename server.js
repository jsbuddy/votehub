const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const morgan = require('morgan');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const uri = "mongodb+srv://jsbuddy:jsbuddy@votehub-aexto.mongodb.net/test?retryWrites=true";

  // Connect to Database
  mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.log({ err }));

  // Setup Middleware
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.use(morgan('common'));

  // Setup Routes
  const api = require('./api');
  api(server);

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  // Start Server
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`)
  })
});
