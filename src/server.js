const path = require('path')
const express = require('express')

const app = express();

// Открывается папка для dist
app.use('/dist', express.static(path.join(__dirname, './dist')));

// Маршруты сервера
app.use(require('./router/server'));

app.listen(8080, '0.0.0.0', () => {
  console.log(`server started at localhost: 8080`)
})
