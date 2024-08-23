function formValidation() {
    const userName = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    const userNumber = document.getElementById("namber").value;
    const userMessage = document.getElementById("text_message").value;

    const errorName = document.getElementById("error-name");
    const errorEmail = document.getElementById("error-email");
    const erroNumber = document.getElementById("error-number");
    const erroTextMessage = document.getElementById("error-text-message");

    errorName.textContent = "";
    errorEmail.textContent = "";
    erroNumber.textContent = "";
    erroTextMessage.textContent = "";

    let isValid = true;

    if(userName === ""){
        errorName.textContent = "Please enter your name";
        isValid = false;
    }
    if(userEmail === ""){
        errorEmail.textContent = "Please enter your email";
        isValid = false;
    }
    if(!userEmail.includes("@")){
        errorEmail.textContent = "Please enter your email properly";
        isValid = false;
    }
    
    if(userNumber.length < 10 || userNumber.length > 13 ){
        erroNumber.textContent = "Please enter your correct phone number";
        isValid = false;
    }
    if(userMessage === ""){
        erroTextMessage.textContent = "Text field cannot be empty";
        isValid = false;
    }
    return isValid;
}