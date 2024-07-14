const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Call your login API or authentication function here
    console.log(`Username: ${username}, Password: ${password}`);
});
