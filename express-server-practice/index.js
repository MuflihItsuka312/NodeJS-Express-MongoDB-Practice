const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('web manga terbaik')
})

app.get('/hentai', function (req, res) {
    res.send('Selamat datang di manga section')
  })

app.get('/tags', function (req, res) {
    res.send('manga tags')
  })


app.get('/manga/:idm', function (req, res) {
    res.send(`manga ID :   ${req.params.idm}  <br>  Chapter tags :  ${req.query.tags}`);
    
  })

  app.get('/artist', function (req, res) {
    res.send('artist')
  })


  app.use('/', function (req, res) {
    res.status('404')
    res.send('404')
  })
app.listen(3000)