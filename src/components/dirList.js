const fs = require('fs');

let dirContenido = fs.readdirSync(__dirname);

const dirName = dirContenido.map(function quitarExtension(string){
    return string.split('.').slice(0,-1).join('.'); 
    })

console.log(dirName)
export default dirName;


