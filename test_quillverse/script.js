
// navbar scroll change

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled')
    }
})

// sign-up toggle

const container = document.getElementById('log-in-container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// slider

const carousel = document.querySelector(".book-wrapper");
const arrowBtn = document.querySelectorAll(".book-wrapper i");
const firstCardWidth = carousel.querySelector(".book-content").offsetWidth;


arrowBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});