// Crear corazones flotantes
function createHeart() {
    const heartsContainer = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.className = 'heart';
    
    // Posición aleatoria en el eje X (toda la pantalla)
    heart.style.left = Math.random() * 100 + '%';
    
    // Empiezan desde abajo
    heart.style.bottom = '-50px';
    
    // SIN retraso (o retraso mínimo)
    heart.style.animationDelay = '0s';  // Cambiado a 0
    
    // Duración MÁS lenta: 15-20 segundos
    const duration = 15 + Math.random() * 5;
    heart.style.animationDuration = duration + 's';
    
    heartsContainer.appendChild(heart);
    
    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, duration * 1000 + 2000);
}

// Crear fuegos artificiales
function createFirework(x, y) {
    const fireworksContainer = document.getElementById('fireworks-container');
    const colors = ['#ff0000', '#ff69b4', '#ff1493', '#ffd700', '#ff6347'];
    
    // Crear múltiples partículas
    for (let i = 0; i < 12; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        
        // Filtro de color aleatorio
        firework.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        
        // Posición inicial
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';
        
        // Dirección aleatoria
        const angle = (Math.PI * 2 * i) / 12;
        const velocity = 100 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        firework.style.setProperty('--tx', tx + 'px');
        firework.style.setProperty('--ty', ty + 'px');
        
        firework.style.animation = `explode${i} 1s ease-out forwards`;
        
        // Crear animación única para cada partícula
        const keyframes = `
            @keyframes explode${i} {
                0% {
                    opacity: 1;
                    transform: translate(0, 0) scale(0);
                }
                50% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                    transform: translate(${tx}px, ${ty}px) scale(1);
                }
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = keyframes;
        document.head.appendChild(style);
        
        fireworksContainer.appendChild(firework);
        
        // Eliminar después de la animación
        setTimeout(() => {
            firework.remove();
            style.remove();
        }, 1000);
    }
}

// Iniciar loop de corazones
function startHeartAnimation() {
    setInterval(createHeart, 1200);
}

// Crear múltiples fuegos artificiales
function celebrationFireworks() {
    const interval = setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createFirework(x, y);
    }, 200);
    
    // Detener después de 5 segundos
    setTimeout(() => {
        clearInterval(interval);
    }, 5000);
}