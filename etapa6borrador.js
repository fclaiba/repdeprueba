let autosImportados = require("./autos")
const concesionaria = {
    autos: autosImportados,

    buscarAuto: function(patente){
    let autoEncontrado = this.autos.find(function(auto){
        return auto.patente == patente;
   });


        if (autoEncontrado != undefined){
            return autoEncontrado;
        } else {
            return null;
        }
    },

    venderAuto: function(patente){
        let autoVendido = this.buscarAuto(patente);
        
        if (autoVendido != null){
         autoVendido.vendido = true;
        } 
    },

    autosParaLaVenta: function(){
        let disponibles = this.autos.filter(estado => estado.vendido == false)
        return disponibles;
    },

    autosNuevos: function(){
        let nuevos = this.autosParaLaVenta().filter(sinuso => sinuso.km <= 100)
        return nuevos;
    }
}

console.log(concesionaria.autosNuevos());