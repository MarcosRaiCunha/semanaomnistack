const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.Promise = global.Promise;
mongoose.connection.openUri('mongodb://127.0.0.1/omnistack', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(express.json())
app.use(routes)

app.listen(3000)