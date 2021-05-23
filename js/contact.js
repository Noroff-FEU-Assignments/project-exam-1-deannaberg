const form = document.querySelector(".contactForm");
const nameInput = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm(event){
    
    event.preventDefault();
    
    if (checkLength(nameInput.value, 5) === true){
    }else {
        nameError.style.color = 'var(--red)';
    }
    if (validateEmail(email.value, 0) === true){
        emailError.style.display = 'none';
    }else {
        emailError.style.display = 'inline-block';
    }
    if (checkLength(subject.value, 15) === true){
    }else {
        subjectError.style.color = 'var(--red)';
    }
    if (checkLength(message.value, 25) === true){
    }else {
        messageError.style.color = 'var(--red)';
    }
};

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len){
        return true;
    }else{
        return false;
    }
};

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
};
