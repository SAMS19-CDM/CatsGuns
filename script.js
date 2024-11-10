// Variables para el balance y el tiempo
let balance = 0.000;  // Balance inicial
let miningTime = 4 * 60 * 60;  // 4 horas en segundos

// Elementos de la página
const startButton = document.getElementById("start-btn");
const claimButton = document.getElementById("claim-btn");
const timerDisplay = document.getElementById("timer");
const balanceDisplay = document.getElementById("balance");
const welcomeContainer = document.getElementById("welcome-container");
const mainContainer = document.getElementById("main-container");

// Mostrar el contador de minería
startButton.addEventListener("click", function() {
    welcomeContainer.style.display = "none"; // Ocultar la página de bienvenida
    mainContainer.style.display = "block"; // Mostrar la página de minería
    startMining(); // Iniciar la minería
});

// Función para manejar la minería y la cuenta regresiva
function startMining() {
    let timer = miningTime;

    const interval = setInterval(function() {
        // Cálculos para horas, minutos y segundos
        let hours = Math.floor(timer / 3600);
        let minutes = Math.floor((timer % 3600) / 60);
        let seconds = Math.floor(timer % 60);

        // Mostrar el tiempo restante en el formato adecuado
        timerDisplay.textContent =
            (hours < 10 ? "0" + hours : hours) + ":" +
            (minutes < 10 ? "0" + minutes : minutes) + ":" +
            (seconds < 10 ? "0" + seconds : seconds);

        // Actualizar el balance por segundo
        balance += 0.002; // 0.002 CG por segundo
        balanceDisplay.textContent = "Balance: " + balance.toFixed(3) + " CG";

        // Reducir el tiempo del contador
        if (--timer < 0) {
            clearInterval(interval); // Detener el temporizador
            alert("¡Tiempo finalizado! Puedes reclamar tus ganancias.");
        }
    }, 1000);
}

// Función para reclamar las ganancias
claimButton.addEventListener("click", function() {
    balance += 0.000; // Aquí puedes agregar lo que desees que ocurra cuando "Claim" se presione, como transferir el balance al "wallet"
    balanceDisplay.textContent = "Balance: " + balance.toFixed(3) + " CG"; // Actualizar el balance
    welcomeContainer.style.display = "block"; // Volver a mostrar la página de bienvenida
    mainContainer.style.display = "none"; // Ocultar la minería
});
