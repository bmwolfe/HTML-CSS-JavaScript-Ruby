let emailInput = document.getElementById("emailInput");
let passInput = document.getElementById("passwordInput");
const toggleButton = document.getElementById("togglePassword");

//This code toggles showing and hiding your password and updates the button to do so accordingly
function changeBox() {
    if (passInput.type === "password") {
        passInput.type = "text";
        toggleButton.textContent = "Hide Password";
    } else {
        passInput.type = "password";
        toggleButton.textContent = "Show Password";
    }
}

function openGoogle(){
    // TODO: Use Google's OAuth 2.0 for sign in
    window.open('https://accounts.google.com/v3/signin/identifier?dsh=S1812573153%3A1655944654029516&flowEntry=ServiceLogin&flowName=WebLiteSignIn&ifkv=AX3vH39E0iYVTmn-NoMNM_C35EPrno8LWsRx2Qhr0HApkVLZ-Zc_Vql8ouaSQOiXzEmthrpOPAV5');
}

function login(){
    // TODO: Check a database for login information and login if a valid account is found
}
