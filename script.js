const captcha_generator = () => {
    let char = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let char_length = 6;
    let captcha = "";
    for (let i = 0; i < char_length; i++) {
        let randomIndex = Math.floor(Math.random() * char.length);
        captcha += char.charAt(randomIndex);
    }

    document.getElementById("captcha").innerHTML = captcha;
    document.getElementById("wrapper_input").value = "";
    document.getElementById("result").innerHTML = "";
}
captcha_generator();

const validate = () => {
    let input = document.getElementById("wrapper_input").value;
    let captcha = document.getElementById("captcha").innerHTML;
    let result_text = document.getElementById("result");
    if (input === captcha) {
        result_text.innerHTML = "You! Enter value correctly.";
        result_text.style.color = "green";
    }
    else {
        result_text.innerHTML = "Invalid, please try again.";
        result_text.style.color = "red";
    }
}