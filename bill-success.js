document.addEventListener("DOMContentLoaded",()=>{

const payment=

JSON.parse(

localStorage.getItem("lastBillPayment")

);

if(payment){

document.getElementById("serviceName").innerHTML=

payment.service;

document.getElementById("paidAmount").innerHTML=

"Rs. "+payment.amount;

document.getElementById("paidDate").innerHTML=

payment.date;

document.getElementById("txnId").innerHTML=

payment.txn;

}

document.getElementById("shareReceipt").onclick=()=>{

alert("Receipt Shared Successfully.");

};

document.getElementById("printReceipt").onclick=()=>{

window.print();

};

document.getElementById("homeBtn").onclick=()=>{

window.location.href="../index.html";

};

});