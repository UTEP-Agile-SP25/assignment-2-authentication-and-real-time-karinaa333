import { signUp } from "./auth"

const signUpForm = document.querySelector("#signUpForm")
signUpForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    const firstname = document.getElementById("firstName").value
    const lastname = document.getElementById("lastName").value
    const email = document.getElementById("signupEmail").value
    const password = document.getElementById("signupPassword").value

    signUp(firstname, lastname, email, password)
})