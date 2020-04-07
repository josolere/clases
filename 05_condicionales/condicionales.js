// let num1=10;
// let num2=5;

// if(num1 > num2){
//     console.log(num1 + " es  mayor que " + num2);

// }else{
//     console.log(num1 + " es menor que " + num2);
// }

// let num1 = prompt("ingrese un numero");


// if (num1 % 2 === 0){
//     console.log("es par")
// }else{
//     console.log("es impar")
// }

let edad = prompt("ingrese su edad");

if(edad >= 18 && edad <= 70) {
    console.log("puedes conducir")

} else if(edad === 16 || edad === 17) {
    console.log("puedes sacar el permiso")
} else if(edad < 16 || edad > 70) {
    console.log("no puedes conducir")
} else {
    console.error("datos incorrectos")

};
