const cards = document.querySelectorAll('.plan__card');
const prevButton = document.querySelector('.carousel__button-prev');
const nextButton = document.querySelector('.carousel__button-next');
let currentIndex = 1;

function showCard(index) {
    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.remove('d-none');
        } else {
            card.classList.add('d-none');
        }
    })
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
})

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
})

showCard(currentIndex);