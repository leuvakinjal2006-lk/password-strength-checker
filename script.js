function checkPassword() {

    let password = document.getElementById("password").value;
    let result = document.getElementById("result");
    let btn = document.getElementById("checkBtn");

    let score = 0;

    // Length Check
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;

    // Character Checks
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    // Weak
    if (score <= 2) {

        result.innerHTML =
        "❌ Weak Password <br><small>Use uppercase, numbers and special characters.</small>";

        result.style.color = "#ff3b30";

        btn.style.background = "#ff3b30";
        btn.style.color = "white";
    }

    // Medium
    else if (score <= 4) {

        result.innerHTML =
        "⚠️ Medium Password <br><small>Add more complexity for better security.</small>";

        result.style.color = "#ffcc00";

        btn.style.background = "#ffcc00";
        btn.style.color = "black";
    }

    // Strong
    else {

        result.innerHTML =
        "✅ Strong Password <br><small>Excellent! Your password is secure.</small>";

        result.style.color = "#00ff99";

        btn.style.background = "#00ff99";
        btn.style.color = "black";
    }
}
