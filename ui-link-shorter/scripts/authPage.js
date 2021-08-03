const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $loginBtn = document.getElementById("login");
const $validation = document.getElementById('validation');

$loginBtn.addEventListener('click', login);

async function login(event) {
    event.preventDefault();

    if(!isValidEmail($email.value)){
        alert("mail is not in correct form")
        return;
    }
    const data = await request('login', 'POST', {email: $email.value, password: $password.value});

    if(data.token){
        localStorage.setItem('token', data.token);
        sendFurtherToList();
    } else {
        $validation.innerHTML = data.message;
    }
}

function sendFurtherToList() {
    window.location.href="./pages/homePage.html";
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Loaded');
    if (hasToken()) {
        sendFurtherToList();
    }
});
