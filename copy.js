//créer un script capable de copier un fichier
let fs = require('fs')

fs.readFile('demo.mp3', (err, data) =>{
    if(err) throw err
    fs.writeFile('copy.mp3', data, (err)=>{
        if(err) throw err
        console.log('Le fichier a bien été copié')
    })
})