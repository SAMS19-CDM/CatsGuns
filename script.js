// Variables para el balance y el tiempo
let balance = 0.000;  // Balance inicial
let miningTime = 4 * 60 * 60;  // 4 horas en segundos

// Elementos de la página
const startButton = document.getElementById("start-btn");
const claimButton = document.getElementById("claim-btn");
const timerDisplay = document.getElementById("timer");
const balanceDisplay = document.getElementById("balance");
const welcomeContainer = document.getElementById("welcome-container");
const miningContainer = document.getElementById("mining-container");
const mineFreeButton = document.getElementById("mine-free-btn");
const friendsButton = document.getElementById("friends-btn");
const walletButton = document.getElementById("wallet-btn");

// Función para mostrar la página de minería
startButton.addEventListener("click", function() {
    welcomeContainer.style.display = "none"; // Ocultar la página de bienvenida
    miningContainer.style.display = "block"; // Mostrar la página de minería
    startMining(); // Comienza la minería
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
    balance += 0.000; // Puedes realizar más operaciones al "claim" si lo necesitas
    balanceDisplay.textContent = "Balance: " + balance.toFixed(3) + " CG"; // Actualizar el balance
    resetMining(); // Reiniciar el proceso de minería
});

// Función para reiniciar la minería
function resetMining() {
    balance = 0.000;  // Resetear balance
    timerDisplay.textContent = "4:00:00"; // Resetear tiempo
    startMining();  // Iniciar nuevamente la minería
}

// Funciones para los botones adicionales
mineFreeButton.addEventListener("click", function() {
    alert("Estás en la página de minería gratuita.");
    // Aquí puedes redirigir o agregar más funcionalidades
});

friendsButton.addEventListener("click", function() {
    alert("Aquí podrás ver los amigos que has invitado.");
    // Agregar funciones de amigos o redirigir a otra página
});

walletButton.addEventListener("click", function() {
    alert("Coming soon...");
    // Aquí puedes agregar la funcionalidad de la wallet más tarde
});
