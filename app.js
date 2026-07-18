/* ==========================================
   NepPay Wallet
   app.js
   Part 1.3
==========================================*/

// ---------- APP READY ----------

document.addEventListener("DOMContentLoaded", () => {

    console.log("NepPay Wallet Loaded Successfully");

});

// ==========================================
// BALANCE SHOW / HIDE
// ==========================================

const eyeBtn = document.getElementById("eyeBtn");
const balance = document.getElementById("balance");

let hidden = false;
const actualBalance = "NPR 12,500.00";

eyeBtn.addEventListener("click", () => {

    hidden = !hidden;

    if(hidden){

        balance.innerHTML = "NPR •••••••";

        eyeBtn.innerHTML =
        '<i class="fa-regular fa-eye-slash"></i>';

    }

    else{

        balance.innerHTML = actualBalance;

        eyeBtn.innerHTML =
        '<i class="fa-regular fa-eye"></i>';

    }

});

// ==========================================
// BOTTOM NAVIGATION
// ==========================================

const navItems = document.querySelectorAll(".nav");

navItems.forEach(item=>{

item.addEventListener("click",()=>{

navItems.forEach(nav=>{

nav.classList.remove("active");

});

item.classList.add("active");

});

});

// ==========================================
// QUICK ACTION
// ==========================================

const actions=document.querySelectorAll(".action");

actions.forEach(action=>{

action.addEventListener("click",()=>{

const name=
action.querySelector("p").innerText;

alert(name+" feature coming soon.");

});

});

// ==========================================
// SERVICES
// ==========================================

const services=document.querySelectorAll(".service");

services.forEach(service=>{

service.addEventListener("click",()=>{

const title=
service.querySelector("p").innerText;

console.log(title);

});

});

// ==========================================
// TRAVEL
// ==========================================

const travel=document.querySelectorAll(".travel-card");

travel.forEach(card=>{

card.addEventListener("click",()=>{

const text=
card.querySelector("p").innerText;

alert(text+" booking coming soon.");

});

});

// ==========================================
// OFFER BUTTON
// ==========================================

const claimBtn=
document.querySelector(".offer button");

claimBtn.addEventListener("click",()=>{

alert("🎉 Cashback Activated!");

});

// ==========================================
// QR BUTTON
// ==========================================

const qrBtn=
document.querySelector(".qr");

qrBtn.addEventListener("click",()=>{

alert("Opening QR Scanner...");

});

// ==========================================
// HEADER ICONS
// ==========================================

const icons=
document.querySelectorAll(".header-icons i");

icons[0].addEventListener("click",()=>{

alert("Search");

});

icons[1].addEventListener("click",()=>{

alert("Notifications");

});

// ==========================================
// CARD HOVER SOUND (Demo)
// ==========================================

document.querySelectorAll(

".action,.service,.travel-card"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".25s";

});

});

// ==========================================
// SCROLL HEADER EFFECT
// ==========================================

window.addEventListener("scroll",()=>{

const header=
document.querySelector(".header");

if(window.scrollY>20){

header.style.boxShadow=
"0 10px 25px rgba(0,0,0,.15)";

}

else{

header.style.boxShadow="none";

}

});

// ==========================================
// QR PULSE
// ==========================================

setInterval(()=>{

qrBtn.animate([

{

transform:"translateX(-50%) scale(1)"

},

{

transform:"translateX(-50%) scale(1.08)"

},

{

transform:"translateX(-50%) scale(1)"

}

],{

duration:700

});

},3500);

// ==========================================
// WELCOME MESSAGE
// ==========================================

setTimeout(()=>{

console.log(

"Welcome to NepPay Wallet"

);

},1000);

// Insurance

document.querySelectorAll(".insurance-item").forEach(item => {

    item.addEventListener("click", () => {

        const name = item.querySelector("p").innerText;

        alert(name + " Insurance");

    });

});


// Financial Payments

document.querySelectorAll(".finance-item").forEach(item => {

    item.addEventListener("click", () => {

        const name = item.querySelector("p").innerText;

        alert(name + " Payment");

    });

});