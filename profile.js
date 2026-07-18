/* ==========================================
   NEPPAY WALLET
   PROFILE & SETTINGS
   PART 11.3
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // ELEMENTS
    // ==========================

    const backBtn = document.querySelector(".back-btn");
    const editBtn = document.getElementById("editProfile");

    const name = document.getElementById("userName");
    const phone = document.getElementById("mobile");
    const email = document.getElementById("email");

    const profilePhoto = document.getElementById("profilePhoto");
    const cameraBtn = document.querySelector(".camera-icon");

    const settings = document.querySelectorAll(".setting-item");

    // ==========================
    // LOAD SAVED PROFILE
    // ==========================

    if(localStorage.getItem("profileName")){

        name.textContent =
        localStorage.getItem("profileName");

    }

    if(localStorage.getItem("profilePhone")){

        phone.textContent =
        localStorage.getItem("profilePhone");

    }

    if(localStorage.getItem("profileEmail")){

        email.textContent =
        localStorage.getItem("profileEmail");

    }

    if(localStorage.getItem("profilePhoto")){

        profilePhoto.src =
        localStorage.getItem("profilePhoto");

    }

    // ==========================
    // BACK BUTTON
    // ==========================

    backBtn.onclick = () => {

        history.back();

    };

    // ==========================
    // EDIT PROFILE
    // ==========================

    editBtn.onclick = () => {

        const newName = prompt(
            "Enter Full Name",
            name.textContent
        );

        if(newName){

            name.textContent = newName;

            localStorage.setItem(
                "profileName",
                newName
            );

        }

        const newPhone = prompt(
            "Enter Mobile Number",
            phone.textContent
        );

        if(newPhone){

            phone.textContent = newPhone;

            localStorage.setItem(
                "profilePhone",
                newPhone
            );

        }

        const newEmail = prompt(
            "Enter Email",
            email.textContent
        );

        if(newEmail){

            email.textContent = newEmail;

            localStorage.setItem(
                "profileEmail",
                newEmail
            );

        }

        alert("✅ Profile Updated");

    };

    // ==========================
    // CHANGE PHOTO (Demo)
    // ==========================

    cameraBtn.onclick = () => {

        const img = prompt(
            "Paste Profile Image URL"
        );

        if(img){

            profilePhoto.src = img;

            localStorage.setItem(
                "profilePhoto",
                img
            );

        }

    };

    // ==========================
    // SETTINGS
    // ==========================

    settings.forEach(item=>{

        item.onclick = ()=>{

            const text =
            item.innerText.trim();

            if(text.includes("Change PIN")){

                alert("🔒 Change PIN module coming in Part 11.4");

            }

            else if(text.includes("Biometric")){

                alert("👆 Biometric Login Enabled");

            }

            else if(text.includes("Language")){

                alert("🌐 Language Module Coming Soon");

            }

            else if(text.includes("Notifications")){

                alert("🔔 Notification Settings Coming Soon");

            }

            else if(text.includes("Logout")){

                const ok = confirm(
                    "Are you sure you want to logout?"
                );

                if(ok){

                    alert("👋 Logged Out Successfully");

                    window.location.href =
                    "../login.html";

                }

            }

        };

    });

});

/* ==========================================
PART 11.4
ADVANCED SETTINGS
========================================== */

const darkToggle =
document.getElementById("darkToggle");

const notifyToggle =
document.getElementById("notifyToggle");

const bioToggle =
document.getElementById("bioToggle");

const language =
document.getElementById("languageSelect");

/* Restore Settings */

darkToggle.checked =
localStorage.getItem("darkMode") === "true";

notifyToggle.checked =
localStorage.getItem("notify") !== "false";

bioToggle.checked =
localStorage.getItem("biometric") === "true";

language.value =
localStorage.getItem("language") || "en";

/* Dark Mode */

if(darkToggle.checked){

document.body.classList.add("dark");

}

darkToggle.onchange=()=>{

document.body.classList.toggle("dark");

localStorage.setItem(

"darkMode",

darkToggle.checked

);

};

/* Notifications */

notifyToggle.onchange=()=>{

localStorage.setItem(

"notify",

notifyToggle.checked

);

};

/* Biometric */

bioToggle.onchange=()=>{

localStorage.setItem(

"biometric",

bioToggle.checked

);

alert(

bioToggle.checked ?

"✅ Biometric Enabled"

:

"❌ Biometric Disabled"

);

};

/* Language */

language.onchange=()=>{

localStorage.setItem(

"language",

language.value

);

alert(

language.value==="np"

?

"नेपाली भाषा चयन गरियो"

:

"English Selected"

);

};

/* ==========================================
PART 11.5
ABOUT & SECURITY
========================================== */

document.getElementById("changePassword").onclick=()=>{

alert("🔑 Change Password screen will open.");

};

document.getElementById("appLock").onclick=()=>{

const ok=confirm(

"Enable App Lock?"

);

if(ok){

alert("🔒 App Lock Enabled");

}

};

document.getElementById("privacyPolicy").onclick=()=>{

alert(

"NepPay protects your personal information and transaction data."

);

};

document.getElementById("helpCenter").onclick=()=>{

alert(

"Help Center\n\nEmail : support@neppay.com\nPhone : 1660-01-00000"

);

};

document.getElementById("rateApp").onclick=()=>{

alert(

"⭐⭐⭐⭐⭐\nThank you for rating NepPay."

);

};

document.getElementById("aboutApp").onclick=()=>{

alert(

"NepPay Wallet\n\nVersion : 1.0.0\n\nDeveloped with HTML, CSS & JavaScript."

);

};