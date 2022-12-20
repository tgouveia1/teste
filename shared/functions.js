var fs = require('fs');

module.exports =
{
gravarMenu,lerMenu
}

function gravarMenu(ficheiro, data){
    fs.writeFile(ficheiro, JSON.stringify(data), (err) => {
        if (err != null) console.log(err);
        console.log("Sucesso!");
        });
        
}
function lerMenu(ficheiro) {
    return new Promise(function (resolve, reject) {
        fs.readFile(ficheiro, 'utf8', function (err, data) {
            if (err) reject(err)
            if (data == "" || data == null) {
                resolve([]); return;
            }
                obj = JSON.parse(data)
                resolve(obj)
            })
    })
        
}
