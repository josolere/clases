// let flores =["rosas", "margaritas","tulipanes","girasoles"]
// console.log(flores);
// //  .push() agrega un elemento en la ultima posicion
// flores.push("RosasRojas");
// console.log(flores);

// console.log(flores[2]);
// //  .pop() borra el ultimo elemento del arreglo
//  flores.pop()

// //  .splice() borra el elemento especifico segun el que se le indique 
// // el primer numero es desde donde empieza, el segundo numero indica cuantos elementos borrar
// flores.splice(0,2);

// objetos

let persona = {
    nombre : "jose",
    edad:3,
    tel:"9345345",
    direccion:"bogota",
    familia: true,
    musica:["salsa","cumbia","rock","metal"],
    peliculas:{
        terror:false,
        romanticas:["titanic","romeo y julieta"]
    }
}
console.log(persona.nombre);
console.log(persona.musica[2]);
console.log(persona.peliculas.romanticas[0]);