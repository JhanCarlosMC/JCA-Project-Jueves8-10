let contador = 0;
const LIMITE_MAX = 10;
const LIMITE_MIN = -10;

const contadorElement = document.getElementById("contador");
const incrementarBtn = document.getElementById("incrementar");
const decrementarBtn = document.getElementById("decrementar");
const reiniciarBtn = document.getElementById("reset");

function incrementar(){
    if(contador < LIMITE_MAX){
        contador++;
        contadorElement.textContent = contador;
    }
}

function decrementar(){
    if(contador > LIMITE_MIN){
        contador--;
        contadorElement.textContent = contador;
    }
}

function reiniciar(){
    contador = 0;
    contadorElement.textContent = contador;
}

incrementarBtn.addEventListener("click", incrementar);
decrementarBtn.addEventListener("click", decrementar);
reiniciarBtn.addEventListener("click", reiniciar);

document.addEventListener("keydown", function(event){
    // console.log(event);
    console.log(event.key);
    if(event.key === "ArrowUp"){
        incrementar();
    }else if(event.key === "ArrowDown"){
        decrementar();
    }else if(event.key === " "){
        reiniciar();
    }
});