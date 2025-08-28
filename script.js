
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');

            // Alterar ícone do hamburger para X quando aberto
            const icon = menuToggle.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Fechar menu ao clicar em um link (opcional)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
});




// Script para garantir que o vídeo funcione corretamente em dispositivos móveis
        document.addEventListener('DOMContentLoaded', function() {
            const video = document.querySelector('video');
            
            function checkVideo() {
                if (video.paused) {
                    video.play().catch(e => {
                        console.log('Autoplay prevented:', e);
                    });
                }
            }  
            
            setInterval(checkVideo, 2000);
        });