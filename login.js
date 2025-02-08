const username = document.getElementById("username");
console.log(username)

const password = document.getElementById("password");
console.log(password)

const usernameError = document.getElementById("username-error")
console.log(usernameError)

const passwordError = document.getElementById("password-error")
console.log(passwordError)



function logIn() {

    if (username.value == "") {
        console.log("Username is empty")
    }

    if (password.value == "") {
        console.log("Password is empty")
    }

    if (username.value.length < 8 || username.value.length > 16) {
        usernameError.textContent = "Username must be between 8 and 16 characters"
    } else {
        usernameError.textContent = ""
    }

    if (password.value.length < 12 || password.value.length > 16) {
        passwordError.textContent = "Password must be between 12 and 16 characters"
    } else {
       passwordError.textContent = ""
    }

    if (!usernameError.textContent && !passwordError.textContent) {
        alert("LogIn Sucessful")
    }


}