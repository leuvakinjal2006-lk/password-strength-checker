function checkPassword() {

    let password = document.getElementById("password").value;
    let result = document.getElementById("result");
    let btn = document.getElementById("checkBtn");

    // Conditions
    let hasUpper = /[A-Z]/.test(password);
    let hasLower = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[^A-Za-z0-9]/.test(password);
    let length = password.length;

    // Weak Password
    if (length < 8) {
        result.innerHTML =
            "❌ Weak Password<br><small>Minimum 8 characters required.</small>";

        result.style.color = "#ff3b30";
        btn.style.background = "#ff3b30";
        btn.style.color = "white";
    }

    // Strong Password
    else if (
        length >= 8 &&
        hasUpper &&
        hasLower &&
        hasNumber &&
        hasSpecial
    ) {
        result.innerHTML =
            "✅ Strong Password<br><small>Password is highly secure.</small>";

        result.style.color = "#00ff99";
        btn.style.background = "#00ff99";
        btn.style.color = "black";
    }

    // Medium Password
    else {
        result.innerHTML =
            "⚠️ Medium Password<br><small>Add uppercase, numbers or special characters for better security.</small>";

        result.style.color = "#ffcc00";
        btn.style.background = "#ffcc00";
        btn.style.color = "black";
    }
}
