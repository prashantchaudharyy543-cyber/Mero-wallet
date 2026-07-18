document.addEventListener("DOMContentLoaded",()=>{

const history=

JSON.parse(

localStorage.getItem("merchantPayments")

)||[];

if(history.length){

const last=history[0];

document.getElementById("merchantName").innerHTML=

last.merchant;

document.getElementById("amountPaid").innerHTML=

"Rs. "+last.amount;

document.getElementById("paymentDate").innerHTML=

last.date;

}

document.getElementById("shareBtn").onclick=()=>{

alert("Receipt shared successfully.");

};

document.getElementById("printBtn").onclick=()=>{

window.print();

};

document.getElementById("homeBtn").onclick=()=>{

window.location.href="../index.html";

};

});