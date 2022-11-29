let autosImportados = require("./etapa1definitivo");

const concesionaria = {
    autos: autosImportados,

    buscarAuto: function(patente){
    let autoEncontrado = this.autos.find(function(auto){
        return auto.patente == patente;
   });


        if (autoEncontrado != undefined){
            return autoEncontrado;
        } else {
            return null
        }
    }
}


console.log(concesionaria.buscarAuto("APL123"));
console.log(concesionaria.buscarAuto("JJK116"));
console.log(concesionaria.buscarAuto("JJ123"));