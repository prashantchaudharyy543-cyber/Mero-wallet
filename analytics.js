/* ==========================================
   NEPPAY WALLET
   ANALYTICS DASHBOARD
   PART 14.3
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

// ==========================
// ELEMENTS
// ==========================

const backBtn=document.querySelector(".back-btn");

const walletBalance=document.getElementById("walletBalance");

const incomeAmount=document.getElementById("incomeAmount");

const expenseAmount=document.getElementById("expenseAmount");

const savingAmount=document.getElementById("savingAmount");

const progressBar=document.getElementById("progressBar");

const budgetPercent=document.getElementById("budgetPercent");

const budgetText=document.getElementById("budgetText");

const filter=document.getElementById("filter");

// ==========================
// BACK
// ==========================

backBtn.onclick=()=>{

history.back();

};

// ==========================
// LOAD DATA
// ==========================

let wallet=

parseFloat(

localStorage.getItem("walletBalance")

)||25000;

walletBalance.innerHTML=

"Rs. "+wallet.toLocaleString();

// Demo Income

const income=50000;

// ==========================
// EXPENSE
// ==========================

let expense=0;

// Merchant Payments

const merchant=

JSON.parse(

localStorage.getItem("merchantPayments")

)||[];

merchant.forEach(item=>{

expense+=Number(item.amount);

});

// Bill Payments

const bills=

JSON.parse(

localStorage.getItem("billPayments")

)||[];

bills.forEach(item=>{

expense+=Number(item.amount);

});

// ==========================
// UPDATE UI
// ==========================

incomeAmount.innerHTML=

"Rs. "+income.toLocaleString();

expenseAmount.innerHTML=

"Rs. "+expense.toLocaleString();

const saving=

income-expense;

savingAmount.innerHTML=

"Rs. "+saving.toLocaleString();

// ==========================
// BUDGET
// ==========================

const budget=50000;

let percent=

(expense/budget)*100;

if(percent>100){

percent=100;

}

progressBar.style.width=

percent+"%";

budgetPercent.innerHTML=

Math.round(percent)+"%";

budgetText.innerHTML=

"Rs. "+expense.toLocaleString()

+" spent out of Rs. "

+budget.toLocaleString();

// ==========================
// FILTER
// ==========================

filter.onchange=()=>{

alert(

"Analytics Filter : "

+filter.value

);

};

});