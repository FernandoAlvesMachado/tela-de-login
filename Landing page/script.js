function sobre(){
    window.location.href = "sobre.html";
}

function home(){
            window.location.href = "index.html";
}

function portifolio(){
    window.location.href = "portifolio.html";
}

// Rerion carrossel
const carouselImages = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const imageSize = 700; // Tamanho das imagens do carrossel

let posicao = 0; // Posição atual do carrossel

nextButton.addEventListener('click', () => {
  // Verifica se ainda há imagens para avançar
  if (posicao < carouselImages.children.length - 1) {
    posicao++;
    carouselImages.style.transform = `translateX(-${posicao * imageSize}px)`;
  }
});

prevButton.addEventListener('click', () => {
  // Verifica se ainda há imagens para retroceder
  if (posicao > 0) {
    posicao--;
    carouselImages.style.transform = `translateX(-${posicao * imageSize}px)`;
  }
});
// Endregion // 