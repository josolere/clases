

// function suma(){
//     console.log(5+5)
// }
// suma()

// function suma(a,b){
//     console.log(a+b);

// }

// suma(10 ,20);

// const resta = (c,d) => {
//     console.log(c-d);
// }

// resta(100, 50)

// AreaCuadrado
const areaCuadrado = (l1, l2) => {
    console.log(l1 * l2);

}

areaCuadrado(5, 5);


// areaTriangulo
const areaTriangulo = (b, h) => {
    console.log((b * h) / 2);
}

areaTriangulo(6, 3);

// funcion for
const recorrido = (a) => {
    for (let i = a; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");

        } else

            console.log(i)
    }
}

recorrido(1);