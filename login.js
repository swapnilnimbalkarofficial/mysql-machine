
document.body.innerHTML = `
    <div style="text-align:center; margin-top:25px;">

       <input type="text" id="email" placeholder="email"
        style="border:2px solid black; padding:15px; border-radius:15px;"><br><br>

        <input type="password" id="password" placeholder="password"
        style="border:2px solid black; padding:15px; border-radius:15px;"><br><br>


        <button onclick="login()">login</button>

        <div id="result" style="margin-top:20px;"></div>

    </div>
`;

function login() {

    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let emailRegex = /^([a-zA-Z0-9]([a-zA-Z0-9._+-]*[a-zA-Z0-9])?)@([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;

    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=!]).{8,}$/;

    let msg = "";

    if (email === "") {
        msg += "Please enter email<br>";
        emailBox.style.border = "2px solid red";
    }
    else if (!emailRegex.test(email)) {
        msg += "Invalid email<br>";
        emailBox.style.border = "2px solid red";
    }
    else {
        emailBox.style.border = "2px solid green";
    }

    // Password validation

    if (pass === "") {
        msg += "Please enter password<br>";
        passBox.style.border = "2px solid red";
    }
    else if (!passRegex.test(pass)) {
        msg += "Invalid pass<br>";
        passBox.style.border = "2px solid red";
    }
    else {
        passBox.style.border = "2px solid green";
    }

    if (emailRegex.test(email) && passRegex.test(pass)) {
        msg = "Valid data";
    }


    document.getElementById("result").innerHTML = msg;
}
