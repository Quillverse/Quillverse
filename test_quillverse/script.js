const container = document.getElementById('log-in-container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled')
    }
})
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function myFun() {
    var divs = document.getElementById('dropdown');
    divs.classList.toggle('show');
}