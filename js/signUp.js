let users;
let SignUp = document.getElementById("SignUp");
let nameSignUp = document.getElementById("nameSignUp");
let emailSignUp = document.getElementById("emailSignUp");
let passSignUp = document.getElementById("passSignUp");
let warnning = document.getElementById("empty");
let imgColor = document.getElementById("img-color");
let isExists = document.getElementById("isExists");

if (localStorage.getItem("users") == null) {
    users = [];
} else {
    users = JSON.parse(localStorage.getItem("users"));
}

function addUser() {
    if (!isEmpty()) {
        validName(); validPass(); validEmail();
        if (validName() && validPass() && validEmail()) {
            if (emailIsValid()) {
                let user = {
                    name: nameSignUp.value,
                    email: emailSignUp.value,
                    pass: passSignUp.value
                }
                users.push(user);
                localStorage.setItem("users", JSON.stringify(users));
                clearInputs();
            }
        }
    }
}


function clearInputs() {
    nameSignUp.value = "";
    emailSignUp.value = "";
    passSignUp.value = "";
}

function isEmpty() {
    if (nameSignUp.value == "" || passSignUp.value == "" || emailSignUp.value == "") {
        if (nameSignUp.value == "") {
            nameSignUp.classList.add("is-invalid");
            nameSignUp.classList.remove("border-info");
            nameSignUp.classList.add("border-danger");
        } else {
            nameSignUp.classList.remove("is-invalid");
            nameSignUp.classList.add("border-info");
            nameSignUp.classList.remove("border-danger");

        }
        if (passSignUp.value == "") {
            passSignUp.classList.add("is-invalid");
            passSignUp.classList.remove("border-info");
            passSignUp.classList.add("border-danger");
        } else {
            passSignUp.classList.remove("is-invalid");
            passSignUp.classList.add("border-info");
            passSignUp.classList.remove("border-danger");
        }
        if (emailSignUp.value == "") {
            emailSignUp.classList.add("is-invalid");
            emailSignUp.classList.remove("border-info");
            emailSignUp.classList.add("border-danger");
        } else {
            emailSignUp.classList.remove("is-invalid");
            emailSignUp.classList.add("border-info");
            emailSignUp.classList.remove("border-danger");
        }

        warnning.classList.remove("d-none");
        warnning.classList.add("d-block");
        imgColor.classList.add("bg-danger");
        imgColor.classList.remove("bg-info");

        return true;
    } else {

        warnning.classList.add("d-none");
        warnning.classList.remove("d-block");
        imgColor.classList.remove("bg-danger");
        imgColor.classList.add("bg-info");
        return false;
    }
}

function emailIsValid() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == emailSignUp.value) {
            emailSignUp.classList.add("is-invalid");
            imgColor.classList.add("bg-danger");
            emailSignUp.classList.remove("is-valid");
            imgColor.classList.remove("bg-success");
            isExists.classList.add("d-block");
            isExists.classList.remove("d-none");
            emailSignUp.classList.add("border-danger");

            return false;
        }
    }
    emailSignUp.classList.remove("is-invalid");
    imgColor.classList.remove("bg-danger");
    emailSignUp.classList.add("is-valid");
    imgColor.classList.add("bg-success");
    isExists.classList.remove("d-block");
    isExists.classList.add("d-none");
    return true;
}


function validName() {
    let regex = /^[A-Za-z]{2,}( [A-Za-z]{2,})?( [A-Za-z]{2,})?$/;
    if (regex.test(nameSignUp.value) == true) {
        nameSignUp.classList.remove("is-invalid");
        nameSignUp.classList.add("border-info");
        nameSignUp.classList.remove("border-danger");
        return true;
    }
    nameSignUp.classList.add("is-invalid");
    return false;
}
function validEmail() {
    let regex = /^[A-Za-z0-9.]{2,}@(yahoo|gmail)\.com$/;
    if (regex.test(emailSignUp.value) == true) {
        emailSignUp.classList.remove("is-invalid");
        emailSignUp.classList.add("border-info");
        emailSignUp.classList.remove("border-danger");
        return true;
    }
    emailSignUp.classList.add("is-invalid");
    return false;
}
function validPass() {
    let regex = /^[A-Za-z0-9]{6,}$/;
    if (regex.test(passSignUp.value) == true) {
        passSignUp.classList.remove("is-invalid");
        passSignUp.classList.add("border-info");
        passSignUp.classList.remove("border-danger");
        return true;
    }
    passSignUp.classList.add("is-invalid");
    return false;
}
SignUp.addEventListener("click", addUser);