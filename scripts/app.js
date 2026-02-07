let currentMessageIndex = 0;
let isLastMessage = false;

// Elementos del DOM
const messageText = document.getElementById('message-text');
const actionBtn = document.getElementById('action-btn');
const screenContainer = document.getElementById('screen-container');
const celebrationScreen = document.getElementById('celebration-screen');
const restaurantInfo = document.getElementById('restaurant-info');

// Inicializar la aplicación
function init() {
    startHeartAnimation();
    actionBtn.addEventListener('click', handleButtonClick);
}

// Manejar click en el botón
function handleButtonClick() {
    if (isLastMessage) {
        showCelebration();
    } else {
        nextMessage();
    }
}

// Mostrar siguiente mensaje
function nextMessage() {
    currentMessageIndex++;
    
    if (currentMessageIndex >= messages.length) {
        return;
    }
    
    // Animación de salida
    messageText.classList.add('fade-out');
    
    setTimeout(() => {
        messageText.textContent = messages[currentMessageIndex];
        messageText.classList.remove('fade-out');
        messageText.classList.add('fade-in');
        
        // Si es el último mensaje
        if (currentMessageIndex === messages.length - 1) {
            isLastMessage = true;
            actionBtn.textContent = '¡SÍ! 💕';
            actionBtn.classList.add('shake');
        }
        
        setTimeout(() => {
            messageText.classList.remove('fade-in');
        }, 800);
    }, 500);
}

// Mostrar celebración
function showCelebration() {
    screenContainer.classList.add('fade-out');
    
    setTimeout(() => {
        screenContainer.classList.add('hidden');
        celebrationScreen.classList.remove('hidden');
        celebrationScreen.classList.add('fade-in');
        
        // Iniciar fuegos artificiales
        celebrationFireworks();
        
        // Mostrar info del restaurante después de 3 segundos
        setTimeout(() => {
            showRestaurantInfo();
        }, 3000);
    }, 500);
}

// Mostrar información del restaurante
function showRestaurantInfo() {
    document.getElementById('restaurant-name').textContent = restaurantData.name;
    document.getElementById('restaurant-address').textContent = restaurantData.address;
    document.getElementById('restaurant-link').href = restaurantData.mapsUrl;
    
    restaurantInfo.classList.remove('hidden');
    restaurantInfo.classList.add('fade-in');
}

// Iniciar cuando cargue el DOM
document.addEventListener('DOMContentLoaded', init);