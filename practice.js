
const container = document.getElementById('conatiner');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () =>{
    container.classList.add("active");
});

loginBtnBtn.addEventListener('click', () =>{
    container.classList.remove("active");
});