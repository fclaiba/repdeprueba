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
    },

    listaDeVentas: function (){
        let listaDeVendidos = this.autos.filter(vendidos=> vendidos.vendido == true)
        let listaGanancias = listaDeVendidos.map(listaDeVendidos => listaDeVendidos.precio)
        return listaGanancias;
    },
    totalDeVentas: function(){
        let totalDeVentas = this.listaDeVentas().reduce((acu,num)=> acu = acu + num, 0)
        return totalDeVentas


    },
    puedeComprar: function (auto,persona){
        let autoValor = auto.precio;
        let cuotasAutoValor = auto.precio / auto.cuotas;
        if ( autoValor <= persona.capacidadDePagoTotal &&  cuotasAutoValor <= persona.capacidadDePagoEnCuotas ){
            return true
        } else {
            return false
        }
    },

    autosQuePuedeComprar: function (persona){
        let autosVendiendose = this.autosParaLaVenta();
        let autosComprables = autosVendiendose.filter(auto => this.puedeComprar(auto,persona) == true)
        return autosComprables
    },

}
