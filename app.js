const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const vecino_routes = require('./routes/vecinos.js');
const comunidad_routes = require('./routes/comunidades.js');
const presidente_routes = require('./routes/presidentes.js');

require('dotenv').config();



mongoose.connect(process.env.MONGO_URI)
    .then((result) => {
      app.listen(5000);
      console.log('connected to db'); 
    })
    .catch((err) => console.log(err))


const app = express();



app.use(express.json(),cors({
  origin:'https://vecino-conecta-backend-api.vercel.app/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204
}))
app.use("/neighbor",vecino_routes);

app.use("/community",comunidad_routes);

app.use("/president",presidente_routes);