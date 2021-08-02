const $email = document.getElementById("email");
const $password = document.getElementById("password");
const $message = document.getElementById("text");


/*const $modal = document.getElementById("modal");
const $btnModal = document.getElementById("modal-btn");
const $bodyView = document.getElementById("body");*/
const $registerBtn = document.getElementById("register");

$registerBtn.addEventListener('click', register);

async function register(event) {
    event.preventDefault();

    if (!isValidEmail($email.value)) {
        console.log('Incorrect Email');
        return;
    }
    if ($password.value.length < 8) {
        console.log('Short password');
        return;
    }

    const data = await request('register', 'POST', {email: $email.value, password: $password.value});
    alert(data.message)
    resetFields();
}

function resetFields() {
    $email.value = '';
    $password.value = '';
}

/*
async function test() {
    const res = await request();
    console.log(res);
}
async function request(e) {
    try {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            /!*mode: 'no-cors',*!/
            body: JSON.stringify({email:$email.value, password:$password.value}),
            headers: { 'Content-Type': 'application/json; charset=UTF-8'},

        };
        const res = await fetch('http://192.168.20.93:1207/register', requestOptions);
        console.log(res)
    }catch (e){
        console.error(e)
    }
}
*/

/*
console.log('Sync code');

setTimeout(() => {
    console.log('Async code')
}, 0);

console.log('End sync code')*/
