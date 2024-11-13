let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;
const autoAdvanceTime = 3000;

function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
}

setInterval(nextImage, autoAdvanceTime);