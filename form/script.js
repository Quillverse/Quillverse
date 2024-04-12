window.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('logInContainer');
    const registerBtn = document.getElementById('registerBtn');
    const loginBtn = document.getElementById('loginBtn');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
    const urlParams = new URLSearchParams(window.location.search);
    const showSignUp = urlParams.get('showSignUp');

    // Toggle the form based on the query parameter
    if (showSignUp === "true") {
        container.classList.add("active");
        registerBtn.classList.add("active");
        loginBtn.classList.remove("active");
    } else {
        container.classList.remove("active");
        registerBtn.classList.remove("active");
        loginBtn.classList.add("active");
    }
});

