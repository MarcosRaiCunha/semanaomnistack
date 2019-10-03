const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')

const app = express()

mongoose.Promise = global.Promise;
mongoose.connection.openUri('mongodb://127.0.0.1/omnistack', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

app.listen(5000)
