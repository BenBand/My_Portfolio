function formValidation()v {
    const userName = document.getElementById("name").Value;
    const userEmail = document.getElementById("email").value;
    const userNumber = document.getElementById("namber").value;

    const errorName = document.getElementById("error-name");
    const errorEmail = document.getElementById("error-email");
    const erroNumber = document.getElementById("error-number");

    errorName.textContent = "";
    errorEmail.textContent = "";
    erroNumber.textContent = "";

    let isValid = true;

    if(userName === ""){
        errorName.textContent = "Please enter your name";
        isValid = false;
    }
    if(userEmail === ""){
        errorEmail.textContent = "Please enter your email";
        isValid = false;
    }
    if(!userEmail.inclueds("@")){
        errorEmail.textContent = "Please enter your email properly";
        isValid = false;
    }
    if(userNumber === ""){
        erroNumber.textContent = "Please enter your phone number";
    }
    return isValid;
}