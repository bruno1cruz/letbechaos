
require('dotenv').load();
require('newrelic');
const http = require('http')
var port = process.env.PORT || 5000

const server = http.createServer((req, res) => {
    if (req.url == '/fire') {
        setTimeout(function () {
            res.statusCode = 200
            res.end();
        }, Math.floor(Math.random()*1000))

    } else if (req.url == '/health') {
        res.statusCode = 200
        res.end();
    } else {
        res.statusCode = 500
        res.end();
    }

})

server.listen(port,() => {
    console.log(`Servidor rodando em ${port}`)
})