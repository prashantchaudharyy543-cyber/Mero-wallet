/* ==========================================
   NEPPAY WALLET
   MERCHANT PAYMENT
   PART 12.3
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // ELEMENTS
    // ==========================

    const backBtn = document.querySelector(".back-btn");
    const payBtn = document.getElementById("payNow");
    const favoriteBtn = document.getElementById("favoriteBtn");

    const amountInput = document.getElementById("amount");
    const remarksInput = document.getElementById("remarks");

    const merchantName = document.querySelector(".merchant-card h2").textContent;

    // ==========================
    // BACK BUTTON
    // ==========================

    backBtn.onclick = () => {

        history.back();

    };

    // ==========================
    // FAVORITE MERCHANT
    // ==========================

    let favorite = localStorage.getItem("favoriteMerchant") === merchantName;

    updateFavorite();

    favoriteBtn.onclick = () => {

        favorite = !favorite;

        if(favorite){

            localStorage.setItem(
                "favoriteMerchant",
                merchantName
            );

        }else{

            localStorage.removeItem(
                "favoriteMerchant"
            );

        }

        updateFavorite();

    };

    function updateFavorite(){

        if(favorite){

            favoriteBtn.innerHTML =
            '<i class="fa-solid fa-heart"></i> Added to Favorites';

            favoriteBtn.style.background = "#16A34A";
            favoriteBtn.style.color = "#fff";

        }else{

            favoriteBtn.innerHTML =
            '<i class="fa-regular fa-heart"></i> Add to Favorites';

            favoriteBtn.style.background = "";
            favoriteBtn.style.color = "";

        }

    }

    // ==========================
    // PAY NOW
    // ==========================

    payBtn.onclick = () => {

        const amount = parseFloat(amountInput.value);

        const remarks = remarksInput.value.trim();

        if(isNaN(amount) || amount <= 0){

            alert("Please enter a valid amount.");

            amountInput.focus();

            return;

        }

        const payment = {

            merchant: merchantName,

            amount: amount,

            remarks: remarks || "No Remarks",

            date: new Date().toLocaleString(),

            status: "Success"

        };

        let history = JSON.parse(

            localStorage.getItem("merchantPayments")

        ) || [];

        history.unshift(payment);

        localStorage.setItem(

            "merchantPayments",

            JSON.stringify(history)

        );

    localStorage.setItem(
    "lastMerchantPayment",
    JSON.stringify(payment)
);

window.location.href =
"payment-success.html";


`✅ Payment Successful!

Merchant : ${payment.merchant}

Amount : Rs. ${payment.amount}

Remarks : ${payment.remarks}

Status : ${payment.status}`

        );

        amountInput.value = "";

        remarksInput.value = "";

    };

});

/* ==========================================
PART 12.5
DASHBOARD
========================================== */

const walletText =
document.getElementById("walletBalance");

let wallet = parseFloat(
localStorage.getItem("walletBalance")
) || 25000;

walletText.innerHTML =
"Rs. " + wallet.toLocaleString();

/* ==========================
PAYMENT DEDUCTION
========================== */

payBtn.addEventListener("click",()=>{

const amt =
parseFloat(amountInput.value);

if(!isNaN(amt) && amt>0){

wallet -= amt;

if(wallet<0){

wallet = 0;

}

localStorage.setItem(

"walletBalance",

wallet

);

}

});

/* ==========================
LOAD HISTORY
========================== */

const historyList =
document.getElementById("transactionHistory");

const recentList =
document.getElementById("recentMerchants");

const history =
JSON.parse(
localStorage.getItem("merchantPayments")
)||[];

history.slice(0,5).forEach(item=>{

const li=document.createElement("li");

li.innerHTML=

`<span>${item.merchant}</span>

<strong>Rs. ${item.amount}</strong>`;

historyList.appendChild(li);

});

const merchants=[

...new Set(

history.map(x=>x.merchant)

)

];

merchants.forEach(name=>{

const li=document.createElement("li");

li.innerHTML=

`<span>${name}</span>

<i class="fa-solid fa-store"></i>`;

recentList.appendChild(li);

});

/* ==========================
SEARCH
========================== */

document

.getElementById("merchantSearch")

.addEventListener("keyup",function(){

const key=

this.value.toLowerCase();

document

.querySelectorAll("#recentMerchants li")

.forEach(li=>{

li.style.display=

li.innerText

.toLowerCase()

.includes(key)

?

"flex"

:

"none";

});

});