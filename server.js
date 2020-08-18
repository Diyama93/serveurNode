let app = require('express')()

app.get('/', (request, response) => {
    response.send('Salut tu es à la racine ')
})

app.get('/demo', (request, response) => {
    response.send('Salut tu es à la démo ')
})

app.listen('8080')