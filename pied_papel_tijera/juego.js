let piedra = "piedra";
let papel = "papel";
let tijera="tijera";
let player1 = prompt("player1 ingresa piedra, papel o tijera");
let player2 = prompt("player2 ingresa piedra papel o tijera");

if(player1 === "tijera" && player2 === "tijera"){
    console.log("es un empate");

}else if(player1 === "papel" && player2 === "papel"){
    console.log("es un empate")
        
    }else if(player1 === "piedra" && player2 === "piedra"){
        console.log("es un empate")
    }else if(player1 === "tijera" && player2 === "papel"){
        console.log("gana player1")
    }else if(player1 === "tijera" && player2 === "piedra"){
        console.log("gana player2")
    }else if(player1 === "papel" && player2 === "tijera"){
        console.log("gana player2")
    }else if(player1 === "papel" && player2 === "piedra"){
        console.log("gana player1")
    }else if(player1 === "piedra" && player2 === "tijera"){
        console.log("gana player1")
    }else if(player1 === "piedra" && player2 === "papel"){
        console.log("gana player2")
    } else{
        console.error("ingreso un valor diferente");
    }