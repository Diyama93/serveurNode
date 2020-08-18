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
module.exports = App