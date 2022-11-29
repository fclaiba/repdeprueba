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

    totalDeVentas: function (){
        let totalVentas = this.listaDeVentas().reduce((acum,num) => acum += num, 0);
        return totalVentas
    },
    
    puedeComprar: function (auto,persona){
        let valorAuto = auto.precio;
        let valorAutoCuotas = auto.precio / auto.cuotas;
        if ( valorAuto <= persona.capacidadDePagoTotal &&  valorAutoCuotas <= persona.capacidadDePagoEnCuotas ){
            return true
        } else {
            return false
        }
    },
    autosQuePuedeComprar: function (persona){
        let autosEnVenta = this.autosParaLaVenta();
        let autosQuePuedeComprar = autosEnVenta.filter(auto => this.puedeComprar(auto,persona) == true)
        return autosQuePuedeComprar
    }



}


console.log(concesionaria.puedeComprar());



