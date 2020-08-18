let http = require('http')
let fs = require('fs')//inclure les fichier
let url = require('url')
const EventEmitter = require('events')// mise en place des évenemrnts

let App = {
    start: function(port){
        let emitter = new EventEmitter()
        let server = http.createServer((request, response)=>{
            response.writeHead(200, {
                'content-type': 'text/html; charset=utf-8'
            })
            if (request.url === '/'){
                emitter.emit('root', response)
            }
            response.end()
        }).listen(port)
        return emitter
    }
}

let app = App.start(8080)
app.on('root', function (response){
    response.write('Je suis à la racine')
})

/*

let server = http.createServer()
server.on('request',(request, response) =>{
    response.writeHead(200)
    let query = url.parse(request.url, true).query
    let name = query.name === undefined ? 'anonyme': query.name

   /*if(query.name === undefined){
        response.write('Bonjour anonyme')
    } else{        
        response.write('Bonjour ' + query.name)
    }
    response.end()
    */
/*
    //Lorqu'une requete arrive je veux lire les fichiers
    fs.readFile('index.html','utf8', (err, data) =>{
        if(err) {
            response.writeHead(404)
            response.end('Ce fichier n\'existe pas')
        }else{                
            response.writeHead(200, {
                'content-type': 'text/html; charset=utf-8'
            })
            data = data.replace('{{name}}',name)
            response.end(data)
        }
    })
})
server.listen(8080)
*/