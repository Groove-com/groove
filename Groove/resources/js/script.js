/* function validation() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirm-password');
    var error_message = document.getElementById('error_message');
    var success_message = document.getElementById('success_message');
    var text;

    //get value sfrom the inputs
    var nameValue = name.value;
    var emailValue = email.value;
    var passwordValue = password.value;
    var confirmPasswordValue = confirmPassword.value; 
    
    error_message.style.padding = "12px"

    if (nameValue.length < 5) {
        text = "Please enter a valid name";
        error_message.innerHTML = text;
        return false
    }

    if (emailValue.indexOf("@") == -1 || email.length < 6) {
        text = "Please enter a valid email";
        error_message.innerHTML = text;
        return false
    }

    if (passwordValue <= 6 ) {
        text = "Password must be above 6 character";
        error_message.innerHTML = text;
        return false
    }

    if (confirmPasswordValue !== passwordValue) {
        text = "Password must match";
        error_message.innerHTML = text;
        return false
    }
    return true
} */