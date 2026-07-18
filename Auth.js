/* ==========================================
   NepPay Wallet
   Authentication
   Part 7.3
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // ELEMENTS
    // =====================================

    const loginForm = document.getElementById("loginForm");
    const mobile = document.getElementById("mobile");
    const password = document.getElementById("password");
    const togglePassword = document.querySelector(".togglePassword");
    const rememberMe = document.querySelector(".login-options input");
    const fingerLogin = document.getElementById("fingerLogin");
    const faceLogin = document.getElementById("faceLogin");

    // =====================================
    // LOAD SAVED MOBILE
    // =====================================

    const savedMobile = localStorage.getItem("savedMobile");

    if(savedMobile){

        mobile.value = savedMobile;
        rememberMe.checked = true;

    }

    // =====================================
    // SHOW / HIDE MPIN
    // =====================================

    togglePassword.addEventListener("click",()=>{

        if(password.type==="password"){

            password.type="text";

            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");

        }else{

            password.type="password";

            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");

        }

    });

    // =====================================
    // LOGIN VALIDATION
    // =====================================

    loginForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const phone = mobile.value.trim();
        const pin = password.value.trim();

        // Mobile Validation

        if(!/^98\d{8}$/.test(phone)){

            alert("Please enter a valid Nepali mobile number.");

            mobile.focus();

            return;

        }

        // MPIN Validation

        if(!/^\d{4}$/.test(pin)){

            alert("MPIN must be exactly 4 digits.");

            password.focus();

            return;

        }

        // Remember Me

        if(rememberMe.checked){

            localStorage.setItem("savedMobile", phone);

        }else{

            localStorage.removeItem("savedMobile");

        }

        // Demo Login

        if(phone==="9800000000" && pin==="1234"){

            alert("Login Successful ✅");

            // Redirect to Home

            window.location.href="../index.html";

        }else{

            alert("Invalid Mobile Number or MPIN");

        }

    });

    // =====================================
    // FINGERPRINT LOGIN
    // =====================================

    fingerLogin.addEventListener("click",()=>{

        alert(
`Fingerprint Login

Demo Mode

Biometric authentication will be available
after backend integration.`
        );

    });

    // =====================================
    // FACE ID LOGIN
    // =====================================

    faceLogin.addEventListener("click",()=>{

        alert(
`Face ID Login

Demo Mode

Face authentication will be available
after backend integration.`
        );

    });

    // =====================================
    // PAGE READY
    // =====================================

    console.log("Authentication Ready");

});

/* ==========================================
   PART 7.4
   REGISTRATION
========================================== */

const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",(e)=>{

e.preventDefault();

const name =
document.getElementById("fullName").value.trim();

const mobile =
document.getElementById("regMobile").value.trim();

const email =
document.getElementById("email").value.trim();

const pin =
document.getElementById("createPin").value.trim();

const confirm =
document.getElementById("confirmPin").value.trim();

const terms =
document.getElementById("terms");

if(name.length<3){

alert("Please enter your full name.");

return;

}

if(!/^98\d{8}$/.test(mobile)){

alert("Invalid mobile number.");

return;

}

if(pin.length!==4){

alert("MPIN must be 4 digits.");

return;

}

if(pin!==confirm){

alert("MPIN does not match.");

return;

}

if(!terms.checked){

alert("Please accept Terms & Conditions.");

return;

}

/* Demo Save */

localStorage.setItem("userName",name);

localStorage.setItem("userMobile",mobile);

localStorage.setItem("userEmail",email);

localStorage.setItem("userPin",pin);

alert("Registration Successful ✅");

window.location.href="otp.html";

});

}

/* ==========================================
   PART 7.5
   OTP
========================================== */

const otpForm=document.getElementById("otpForm");

if(otpForm){

const inputs=document.querySelectorAll(".otp-box");

inputs.forEach((input,index)=>{

input.addEventListener("input",()=>{

if(input.value && index<5){

inputs[index+1].focus();

}

});

input.addEventListener("keydown",(e)=>{

if(e.key==="Backspace" && !input.value && index>0){

inputs[index-1].focus();

}

});

});

// Countdown

let time=60;

const countdown=document.getElementById("countdown");

const timer=setInterval(()=>{

time--;

countdown.innerHTML=time;

if(time<=0){

clearInterval(timer);

countdown.innerHTML="0";

}

},1000);

// Resend

document.getElementById("resendOtp")

.addEventListener("click",(e)=>{

e.preventDefault();

alert("OTP Sent Successfully");

});

// Verify

otpForm.addEventListener("submit",(e)=>{

e.preventDefault();

let otp="";

inputs.forEach(box=>{

otp+=box.value;

});

if(otp.length!==6){

alert("Please enter valid OTP");

return;

}

// Demo OTP

if(otp==="123456"){

alert("OTP Verified Successfully");

window.location.href="../index.html";

}else{

alert("Invalid OTP");

}

});

}