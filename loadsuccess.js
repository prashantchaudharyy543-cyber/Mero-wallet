/* ==========================================
PART 8.7
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

const amount=

localStorage.getItem("loadMoney") || "0";

document.getElementById("receiptAmount").innerHTML=

"Rs. "+amount;

document.getElementById("receiptDate").innerHTML=

new Date().toLocaleString();

const txn=

"NP"+

Math.floor(

100000000+

Math.random()*900000000

);

document.getElementById("txnId").innerHTML=

txn;

// HOME

document.getElementById("homeBtn")

.onclick=()=>{

window.location.href="../index.html";

};

// SHARE

document.getElementById("shareReceipt")

.onclick=()=>{

if(navigator.share){

navigator.share({

title:"NepPay Receipt",

text:

"Load Money Successful\nAmount : Rs."+amount+

"\nTransaction : "+txn

});

}else{

alert("Sharing not supported.");

}

};

// PDF

document.getElementById("downloadReceipt")

.onclick=()=>{

const {jsPDF}=window.jspdf;

const pdf=new jsPDF();

pdf.setFontSize(22);

pdf.text("NepPay Receipt",20,20);

pdf.setFontSize(14);

pdf.text("Transaction : "+txn,20,45);

pdf.text("Amount : Rs."+amount,20,60);

pdf.text("Bank : Everest Bank",20,75);

pdf.text("Status : SUCCESS",20,90);

pdf.text("Date : "+new Date(),20,105);

pdf.save("NepPay_Receipt.pdf");

};

});