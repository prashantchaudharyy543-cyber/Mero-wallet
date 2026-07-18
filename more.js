/* ==========================================
   NepPay Wallet
   More Page
   Part 6.3
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // ELEMENTS
    // =====================================

    const body = document.body;
    const darkToggle = document.getElementById("darkToggle");
    const backBtn = document.querySelector(".back-btn");
    const settingsBtn = document.querySelector(".settings-btn");

    // =====================================
    // LOAD DARK MODE
    // =====================================

    const darkMode = localStorage.getItem("darkMode");

    if(darkMode === "enabled"){

        body.classList.add("dark");
        darkToggle.checked = true;

    }

    // =====================================
    // DARK MODE
    // =====================================

    darkToggle.addEventListener("change",()=>{

        if(darkToggle.checked){

            body.classList.add("dark");

            localStorage.setItem(

                "darkMode",

                "enabled"

            );

        }else{

            body.classList.remove("dark");

            localStorage.setItem(

                "darkMode",

                "disabled"

            );

        }

    });

    // =====================================
    // BACK
    // =====================================

    backBtn.addEventListener("click",()=>{

        history.back();

    });

    // =====================================
    // SETTINGS
    // =====================================

    settingsBtn.addEventListener("click",()=>{

        alert(

`Settings

• Notification

• Privacy

• App Lock

• About App

(Coming Soon)`

        );

    });

    // =====================================
    // PROFILE
    // =====================================

    document.getElementById("profile")

    .addEventListener("click",()=>{

        alert(

`User Profile

Name : Prashant Chaudhary

Wallet Status : Verified

KYC : Complete`

        );

    });

    // =====================================
    // BANKS
    // =====================================

    document.getElementById("banks")

    .addEventListener("click",()=>{

        alert(

`Linked Banks

✔ Everest Bank

✔ Nabil Bank

✔ Global IME

(Add New Bank Coming Soon)`

        );

    });

    // =====================================
    // SAVED CARDS
    // =====================================

    document.getElementById("cards")

    .addEventListener("click",()=>{

        alert(

`Saved Cards

Visa ****4586

Mastercard ****8521`

        );

    });

    // =====================================
    // REWARDS
    // =====================================

    document.getElementById("reward")

    .addEventListener("click",()=>{

        alert(

`Rewards

🎁 Cashback : Rs.245

⭐ Reward Points : 1,250`

        );

    });

    // =====================================
    // SECURITY
    // =====================================

    document.getElementById("security")

    .addEventListener("click",()=>{

        alert(

`Security

✔ Change MPIN

✔ Biometric Login

✔ Device Management

✔ Login History`

        );

    });

    // =====================================
    // LANGUAGE
    // =====================================

    document.getElementById("language")

    .addEventListener("click",()=>{

        const lang = prompt(

"Choose Language\n\nEnglish / Nepali"

        );

        if(lang){

            alert(

"Language Changed to : " + lang

            );

        }

    });

    // =====================================
    // LOGOUT
    // =====================================

    document.getElementById("logout")

    .addEventListener("click",()=>{

        const confirmLogout = confirm(

"Are you sure you want to logout?"

        );

        if(confirmLogout){

            alert("Logged Out Successfully");

            window.location.href="../index.html";

        }

    });

    // =====================================
    // PAGE READY
    // =====================================

    console.log("More Page Ready");

});