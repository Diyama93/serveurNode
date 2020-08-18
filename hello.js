let hello = function(){
    console.log('Bonjour comment ça va?')
}
//qu'est ce qui poura etre expoter dans ce fichier avec module.exports
//module.exports = hello
//ou exporter un objet 
module.exports = {
    hello: hello
}