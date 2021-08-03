const $email = document.getElementById('email');
const $btnSubmit = document.getElementById('btnSubmit');

$btnSubmit.addEventListener('click', resetPassword);

async function resetPassword(event) {
    event.preventDefault();
    if(!isValidEmail($email.value)){
        alert("mail is not in correct form")
        return;
    }
    await request('reset-password', 'POST', {email: $email.value});
}