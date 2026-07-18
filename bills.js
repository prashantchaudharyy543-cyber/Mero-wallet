/* ==========================================
   NEPPAY WALLET
   BILLS & RECHARGE
   PART 13.3
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // ELEMENTS
    // ==========================

    const backBtn = document.querySelector(".back-btn");
    const searchBox = document.getElementById("billSearch");
    const cards = document.querySelectorAll(".bill-card");
    const historyList = document.getElementById("billHistory");

    // ==========================
    // BACK BUTTON
    // ==========================

    backBtn.onclick = () => {

        history.back();

    };

    // ==========================
    // SEARCH
    // ==========================

    searchBox.addEventListener("keyup", function(){

        const keyword = this.value.toLowerCase();

        cards.forEach(card=>{

            const name = card.innerText.toLowerCase();

            if(name.includes(keyword)){

                card.style.display = "block";

            }else{

                card.style.display = "none";

            }

        });

    });

    // ==========================
    // LOAD HISTORY
    // ==========================

    let payments = JSON.parse(

        localStorage.getItem("billPayments")

    ) || [];

    renderHistory();

    function renderHistory(){

        historyList.innerHTML = "";

        if(payments.length===0){

            historyList.innerHTML =

            "<li>No bill payments yet.</li>";

            return;

        }

        payments.slice(0,8).forEach(item=>{

            const li = document.createElement("li");

            li.innerHTML =

            `<span>${item.service}</span>

            <strong>Rs. ${item.amount}</strong>`;

            historyList.appendChild(li);

        });

    }

    // ==========================
    // PAYMENT
    // ==========================

    cards.forEach(card=>{

        card.onclick = ()=>{

            const service =

            card.querySelector("h4").innerText;

            const amount = prompt(

                "Enter amount for " + service

            );

            if(amount===null) return;

            const value = parseFloat(amount);

            if(isNaN(value) || value<=0){

                alert("Please enter a valid amount.");

                return;

            }

            const payment = {

                service: service,

                amount: value,

                date: new Date().toLocaleString()

            };

            payment.txn =

            "NPB" +

             Date.now();

            localStorage.setItem(

            "lastBillPayment",

            JSON.stringify(payment)

            );

            payments.unshift(payment);

            localStorage.setItem(

                "billPayments",

                JSON.stringify(payments)

            );

            renderHistory();

            window.location.href =

            "bill-success.html";

                "✅ " + service +

                " payment successful!\n\nRs. " +

                value.toLocaleString()

            );

        };

    });

});

/* ==========================================
PART 13.5
QUICK BILL PAYMENT
========================================== */

const payBillBtn =
document.getElementById("payBillBtn");

if(payBillBtn){

payBillBtn.onclick = ()=>{

const provider =
document.getElementById("provider").value;

const number =
document.getElementById("consumerNumber").value.trim();

const amount =
parseFloat(document.getElementById("billAmount").value);

if(number===""){

alert("Enter Consumer / Mobile Number");

return;

}

if(isNaN(amount) || amount<=0){

alert("Enter Valid Amount");

return;

}

/* Wallet Balance */

let wallet =
parseFloat(localStorage.getItem("walletBalance")) || 25000;

if(wallet < amount){

alert("Insufficient Wallet Balance");

return;

}

wallet -= amount;

localStorage.setItem(

"walletBalance",

wallet

);

/* Save Payment */

const payment={

service:provider,

consumer:number,

amount:amount,

date:new Date().toLocaleString(),

txn:"NPB"+Date.now()

};

let payments=

JSON.parse(

localStorage.getItem("billPayments")

)||[];

payments.unshift(payment);

localStorage.setItem(

"billPayments",

JSON.stringify(payments)

);

localStorage.setItem(

"lastBillPayment",

JSON.stringify(payment)

);

window.location.href=

"bill-success.html";

};

}