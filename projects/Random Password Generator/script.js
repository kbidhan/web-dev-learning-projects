const passwordBox = document.getElementById('password');
const genBtn = document.getElementById('generate');
const userNum = document.getElementById('userNum');


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const numbers = '0123456789';
const symbols = '@#$%&*(){}p[]/<>+-=^_~';

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = '';
    let length = userNum.value ? parseInt(userNum.value) : 8; // Default 8

    for (let i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

genBtn.addEventListener('click', createPassword);


function copyPassword() {
    passwordBox.select();

    document.execCommand('copy');
    alert('Password copied!');
}
