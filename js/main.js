let emailLogin = document.getElementById("emailLogin");
let passLogin = document.getElementById("passLogin");
let warnning = document.getElementById("empty");
let incorrect = document.getElementById("incorrect");
let incorrectPass = document.getElementById("incorrectPass");
let imgColor = document.getElementById("imgColor");
let logInBtn = document.getElementById("logInBtn");
let listOfUsers;

if (localStorage.getItem("users") == null) {
    listOfUsers = [];
} else {
    listOfUsers = JSON.parse(localStorage.getItem("users"));
}

function logIn() {
    if (!isEmpty()) {
        validEmail(); validPass();
        if (validEmail() && validPass()) {
            checkEmailAndPass();
            EmailIsIn();
        }
    }
}

function EmailIsIn() {
    for (let i = 0; i < listOfUsers.length; i++) {
        if (emailLogin.value == listOfUsers[i].email) {
            emailLogin.classList.add("border-info");
            emailLogin.classList.remove("border-danger");
            emailLogin.classList.add("is-valid");
            emailLogin.classList.remove("is-invalid");
            incorrect.classList.add("d-none");
            incorrect.classList.remove("d-block");
            incorrectPass.classList.remove("d-none");
            incorrectPass.classList.add("d-block");
            return true
        }

    }
    return false;
}

function checkEmailAndPass() {
    for (let i = 0; i < listOfUsers.length; i++) {
        if (emailLogin.value == listOfUsers[i].email && passLogin.value == listOfUsers[i].pass) {
            clearInputs();
            localStorage.setItem("userEnter", JSON.stringify(listOfUsers[i].name))
            logInBtn.setAttribute("href", "welcome.html")

            return true;
        }

    }
    emailLogin.classList.remove("border-info");
    emailLogin.classList.add("border-danger");
    passLogin.classList.remove("border-info");
    passLogin.classList.add("border-danger");
    emailLogin.classList.add("is-invalid");
    passLogin.classList.add("is-invalid");
    imgColor.classList.remove("bg-info");
    imgColor.classList.add("bg-danger");
    incorrect.classList.remove("d-none");
    incorrect.classList.add("d-block");
    incorrectPass.classList.add("d-none");
    incorrectPass.classList.remove("d-block");
    return false;
}

function clearInputs() {
    emailLogin.value = "";
    passLogin.value = "";
}

function isEmpty() {
    if (emailLogin.value == "" || passLogin.value == "") {
        if (emailLogin.value == "") {
            emailLogin.classList.add("is-invalid");
            emailLogin.classList.remove("border-info");
            emailLogin.classList.add("border-danger");
        } else {
            emailLogin.classList.remove("is-invalid");
            emailLogin.classList.add("border-info");
            emailLogin.classList.remove("border-danger");
        }
        if (passLogin.value == "") {
            passLogin.classList.add("is-invalid");
            passLogin.classList.remove("border-info");
            passLogin.classList.add("border-danger");
        } else {
            passLogin.classList.remove("is-invalid");
            passLogin.classList.add("border-info");
            passLogin.classList.remove("border-danger");
        }
        warnning.classList.remove("d-none");
        warnning.classList.add("d-block");
        imgColor.classList.add("bg-danger");
        imgColor.classList.remove("bg-info");

        return true;
    } else {
        emailLogin.classList.remove("is-invalid");
        emailLogin.classList.add("border-info");
        emailLogin.classList.remove("border-danger");
        passLogin.classList.remove("is-invalid");
        passLogin.classList.add("border-info");
        passLogin.classList.remove("border-danger");
        warnning.classList.add("d-none");
        warnning.classList.remove("d-block");
        imgColor.classList.remove("bg-danger");
        imgColor.classList.add("bg-info");
        return false;
    }
}


function validEmail() {
    let regex = /^[A-Za-z0-9.]{2,}@(yahoo|gmail)\.com$/;
    if (regex.test(emailLogin.value) == true) {
        emailLogin.classList.remove("is-invalid");
        emailLogin.classList.add("border-info");
        emailLogin.classList.remove("border-danger");
        return true;
    }
    emailLogin.classList.add("is-invalid");
    return false;
}
function validPass() {
    let regex = /^[A-Za-z0-9]{6,}$/;
    if (regex.test(passLogin.value) == true) {
        passLogin.classList.remove("is-invalid");
        passLogin.classList.add("border-info");
        passLogin.classList.remove("border-danger");
        return true;
    }
    passLogin.classList.add("is-invalid");

    return false;
}

logInBtn.addEventListener("click", logIn);