// Sign Up Form
//show and hide password
let pass = document.getElementById('password');
let hidePassword = document.querySelector('.fa-eye');
let showPassword = document.querySelector('.fa-eye-slash'); 

function show() {
    pass.type = "text";
    hidePassword.style.display = "inline";
    showPassword.style.display = "none";
}

function hide() {
    pass.type = "password";
    hidePassword.style.display = "none";
    showPassword.style.display = "inline";
    }

//input errors
let errorMessage1 = document.querySelector(".error-message1");
let errorMessage2 = document.querySelector(".error-message2");
let errorMessage3 = document.querySelector(".error-message3");

document.querySelectorAll(".input").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        if (e.target.id === "name" && e.target.value.length > 0 && e.target.value.length < 6) {
            errorMessage1.innerHTML = "Username must be at least 6 characters in length";
            errorMessage1.style.display = "block";
        }
        if (e.target.id === "password" && e.target.value.length > 0 && e.target.value.length < 8) {
            errorMessage2.innerHTML = "Password must be at least 8 characters in length";
            errorMessage2.style.display = "block";
        }
    });

    inputElement.addEventListener("input", e => {
        if (e.target.id === "name") {
            errorMessage1.style.display = "none";
        }
        if (e.target.id === "password") {
            errorMessage2.style.display = "none";
        }
        if (e.target.id === "password-confirm") {
            errorMessage3.style.display = "none";
        }
    });
});

//submit function

document.querySelector("#create-account").addEventListener("submit", e => {
    e.preventDefault();
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    let c = document.getElementById("password").value;
    let d = document.getElementById("password-confirm").value;
    if (c === d){
        if (a.length >=6 && b.length > 0 && c.length > 0 && d.length > 0) {
            alert("\n               Sign in Sucessfully!!");
            // window.location.assign("home.html");
            document.location.href= "home.html";
        }
    } else {
        errorMessage3.innerHTML = "Password didn't match";
        errorMessage3.style.display = "block";
    }
}); 
//Sign up form end
