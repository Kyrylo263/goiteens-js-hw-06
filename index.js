let firstP = document.querySelector('.p1-1');
let oneP = document.querySelector('.p1-2');
firstP = firstP.textContent;
oneP = oneP.textContent;
const firstButton = document.querySelector('.button1');
firstButton.addEventListener("click", () => {
    if (firstP.length > 0 && oneP.length > 0) {
        console.log('Обидва поля заповнені')
    } else {
        console.log('Не всі поля заповнені')
    }
});

let secondP = document.querySelector('.p2-1');
let twoP = document.querySelector('.p2-2');
secondP = secondP.textContent;
twoP = twoP.textContent;
secondP = Number(secondP);
twoP = Number(twoP);
const secondButton = document.querySelector('.button2');
secondButton.addEventListener("click", () => {
    if ((secondP + twoP) > 10) {
        console.log('Сума більша за 10')
    } else {
        console.log('Сума менша або дорівнює 10')
    }
});

let thirdP = document.querySelector('.p3');
thirdP = thirdP.textContent;
const thirdButton = document.querySelector('.button3');
thirdButton.addEventListener("click", () => {
    if (thirdP.includes('JavaScript')) {
        console.log('Текст містить слово JavaScript')
    } else {
        console.log('Текст не містить слово JavaScript')
    }
});

let fourthP = document.querySelector('.p4');
fourthP = fourthP.textContent;
fourthP = Number(fourthP);
const fourthButton = document.querySelector('.button4');
fourthButton.addEventListener("click", () => {
    if (10 < fourthP && fourthP < 20) {
        console.log('Число входить в діапазон від 10 до 20')
    } else {
        console.log('Число не входить в діапазон від 10 до 20')
    }
});

const inputName = document.querySelector('.input-name');
const inputMail = document.querySelector('.input-mail');
const inputPass = document.querySelector('.input-pass');
const fifthButton = document.querySelector('.button5');
fifthButton.addEventListener("click", () => {
    if (inputName.value.length < 3) {
        alert('Error')
    } else if (!inputMail.value.includes("@")) {
        alert('Error')
    } else if (!inputMail.value.includes(".")) {
        alert('Error')
    } else if (inputPass.value.length < 6) {
        alert('Error')
    } else {
        window.location.href = ('new.html')
    }
});