//créer un script capable de copier un fichier
let fs = require('fs')
let file = "demo.mp3"
fs.stat(file, (err, stat)=>{    
    let total = stat.size
    let progress = 0
    let read = fs.createReadStream(file)
    //Les streams
    let write = fs.createWriteStream('copy.mp3')
    read.on('data', (chunk) =>{
        progress += chunk.length
        console.log("J'ai lu " + Math.round(100 * progress / total) + "%")
    })
    //Je veut que tu branche la lecture à l'écriture
    read.pipe(write)
    write.on('finish', () => {
        console.log('Fichier bien copié')
    })
})
