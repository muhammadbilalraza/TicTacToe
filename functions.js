function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');

    }else{
        alert('Error on login');
    }
}


// function setFormMessage(formElement, type, message) {
//     const messageElement = formElement.querySelector(".form__message");

//     messageElement.textContent = message;
//     messageElement.classList.remove("form__message--success", "form__message--error");
//     messageElement.classList.add(`form__message--${type}`);
// }

// function setInputError(inputElement, message) {
//     inputElement.classList.add("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
// }

// function clearInputError(inputElement) {
//     inputElement.classList.remove("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
// }

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    // loginForm.addEventListener("submit", e => {
    //     e.preventDefault();

    //     // Perform your AJAX/Fetch login

    //     setFormMessage(loginForm, "error", "Invalid username/password combination");
    // });

    // document.querySelectorAll(".form__input").forEach(inputElement => {
    //     inputElement.addEventListener("blur", e => {
    //         if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
    //             setInputError(inputElement, "Username must be at least 10 characters in length");
    //         }
    //     });

    //     inputElement.addEventListener("input", e => {
    //         clearInputError(inputElement);
    //     });
    // });
});