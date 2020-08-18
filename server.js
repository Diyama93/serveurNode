let app = require('./app').start(8080)
app.on('root', function (response){
    response.write('Je suis à la racine')
})