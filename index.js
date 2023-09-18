
    const images = document.querySelectorAll('.image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
        setTimeout(showNextImage, 3000); // Cambia de imagen cada 3 segundos
    }

    showNextImage();

