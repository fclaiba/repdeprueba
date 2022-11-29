// Es lo mismo pero tenemos que agregar la función de vender auto
// dentro del objeto literal
// y para usarlo, primero tenemos que buscar el auto
// y después usar la segunda función para 
// colocarlo como vendido o no.

// Etapa 4
// Ahora, María les pide que agreguen
//  la funcionalidad de venderAuto que recibe la patente
//   y, en caso de encontrar al automóvil,
//    le asigna el estado de vendido.

// ¿Cómo lo resuelven?

// Recordatorio: Para comenzar tenés que agregar 
// el código que escribiste en el ejercicio anterior. 
// Para resolver esta nueva funcionalidad, 
// tendrás que utilizar la función buscarAuto, 
// la cual ya nos devuelve el objeto literal a modificar.


// Recordá que tenés que usar el this
//  para acceder a la funcionalidad del mismo objeto literal.

// Para esta etapa, 
// recomendamos utilizar funciones normales 
// en vez de arrow functions.

//     1ero - copiar y pegar código anterior
//     2do - agregar funcionalidad de venderAuto
//     3ero - el código de la nueva funcionalidad 
//  tiene que funcionar para primero encontrar la patente y,
//  en caso de encontrarla, se lo asigna el nuevo 
//  estado de vendido vendido
//     4to - pero para poder hacer esto, tenemos
//  que usar dentro de esa misma función la funcionalidad 
//  anterior de buscarAuto dentro de ese mismo código
//  avisame cómo te va saliendo y lo vamos puliendo



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
        } else {
        
        } 
        
    }

}
// if(auto != null){
//     auto.vendido = true
//     return auto



console.log(concesionaria.venderAuto("APL123"));
console.log(concesionaria.venderAuto("JJK116"));
console.log(concesionaria.venderAuto("JJ123"));