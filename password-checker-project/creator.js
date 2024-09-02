let emailInput = document.getElementById("emailInput2");
let passInput = document.getElementById("passInput2");
let passConfirm = document.getElementById("passConfirmInput");

const requirements = document.querySelectorAll(".requirements");
const passMatchMessage = document.querySelector(".pass-match.js");

//defining our passwords requirements
const passwordRequirements = {
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    number: /[0-9]/,
    special: /[!@#$%^&*(),.?":{}|<>]/,
    length: /.{8,}/
};

//ensuring we always check if our current inputs are valid
emailInput.addEventListener("input", validatePassword);
passInput.addEventListener("input", validatePassword);
passConfirm.addEventListener("input", validatePassword);

function validatePassword() {
    let email = emailInput.value;
    let password = passInput.value
    let confirmPassword = passConfirm.value;
    let valid = true;

    let emailValid = validateEmail(email);

    //here we check that each requirement is met
    requirements.forEach((req, index) => {
        let regex;
        switch (index) {
            case 0:
                regex = passwordRequirements.uppercase;
                break;
            case 1:
                regex = passwordRequirements.lowercase;
                break;
            case 2:
                regex = passwordRequirements.number;
                break;
            case 3:
                regex = passwordRequirements.special;
                break;
            case 4:
                regex = passwordRequirements.length;
                break;
        }

        if (regex.test(password)) {
            req.classList.add('completed');
            req.classList.remove('incomplete');
            req.style.textDecoration = "none";
        } else {
            req.classList.add('incomplete');
            req.classList.remove('completed');
            req.style.textDecoration = "none";
            valid = false;
        }
    });

    //here we determine if your password matches your confirmation
    if (password === confirmPassword && confirmPassword !== "") {
        document.querySelector('.message-js').innerHTML = "Passwords match!";
        document.querySelector('.message-js').style.color = "green";
    } else if (confirmPassword !== "") {
        document.querySelector('.message-js').innerHTML = "Passwords do not match!";
        document.querySelector('.message-js').style.color = "red";
        valid = false;
    } else {
        document.querySelector('.message-js').innerHTML = "Passwords do not match!";
        document.querySelector('.message-js').style.color = "red";
        valid = false;
    }

    //here we check if the email is valid
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    //Here we enable the button if we provide valid info for an account
    if(valid === true && emailValid === true){
        document.getElementById("createButton").disabled = false;
    } else{
        document.getElementById("createButton").disabled = true;
    }
}

//here we reset the page and display a new message after a successful account creation
function createAccount(){
    emailInput.value = "";
    passInput.value = "";
    passConfirm.value = "";

    requirements.forEach(req => {
        req.style.color = "";
        req.style.textDecoration = "none"; 
        req.classList.remove("completed"); 
    });

    createAccountButton.disabled = true;

    document.querySelector('.message-js').innerHTML = "Account created successfully!";
    document.querySelector('.message-js').style.color = "green";

    

    // TODO: Add accounts to a data base so users can login

}
