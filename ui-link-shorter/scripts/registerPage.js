const $emailRegister = document.getElementById("emailReg");
const $passwordRegister = document.getElementById("passwordReg");
const $registerBtn = document.getElementById("register");

$registerBtn.addEventListener('click', register);

async function register(event) {
    event.preventDefault();
    if (!isValidEmail($emailRegister.value)) {
        console.log('Incorrect Email');
        return;
    }
    if ($passwordRegister.value.length < 8) {
        console.log('Short password');
        return;
    }
    const data = await request('register', 'POST', {email: $emailRegister.value, password: $passwordRegister.value});
    alert(data.message)
    resetFields();
}

function resetFields() {
    $emailRegister.value = '';
    $passwordRegister.value = '';
}

