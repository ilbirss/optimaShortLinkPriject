const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $loginBtn = document.getElementById("login");

$loginBtn.addEventListener('click', login);



async function login(event) {
    event.preventDefault();

    if (!$email.value) {
        console.log('Incorrect Email');
        return;
    }
    if (!$password.value) {
        console.log('Short password');
        return;
    }

    const data = await request('login', 'POST', {email: $email.value, password: $password.value});

    localStorage.setItem('token', data.token);
    alert(data.token)
    resetFields();
    sendFurtherToList()

}
function resetFields() {
    $email.value = '';
    $password.value = '';
}

function sendFurtherToList() {
    window.location.href="./pages/homePage.html";
}


/*
async function login(event) {
    event.preventDefault();


    if (!$email.value) {
        console.log('Incorrect Email');
        return;
    }
    if (!$password.value) {
        console.log('Short password');
        return;
    }*/
