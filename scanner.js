/* ==========================================
   NepPay Wallet
   QR Scanner
   Part 4.3
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // ELEMENTS
    // ==========================

    const backBtn = document.querySelector(".back-btn");
    const historyBtn = document.querySelector(".history-btn");
    const flashBtn = document.getElementById("flashBtn");
    const galleryBtn = document.getElementById("galleryBtn");

    const merchantName =
    document.querySelector(".merchant-card h3");

    const merchantStatus =
    document.querySelector(".merchant-card p");

    // ==========================
    // BACK
    // ==========================

    backBtn.addEventListener("click", () => {

        history.back();

    });

    // ==========================
    // HISTORY
    // ==========================

    historyBtn.addEventListener("click", () => {

        alert("Scan History Coming Soon");

    });

    // ==========================
    // FLASH (Demo)
    // ==========================

    let flash = false;

    flashBtn.addEventListener("click", () => {

        flash = !flash;

        if (flash) {

            flashBtn.innerHTML =
            '<i class="fa-solid fa-bolt"></i> Flash ON';

            flashBtn.style.background = "#14B85C";

        } else {

            flashBtn.innerHTML =
            '<i class="fa-solid fa-bolt"></i> Flash';

            flashBtn.style.background =
            "rgba(255,255,255,.08)";
        }

    });

    // ==========================
    // GALLERY (Demo)
    // ==========================

    galleryBtn.addEventListener("click", () => {

        alert("Gallery QR Scanner Coming Soon");

    });

    // ==========================
    // CREATE CAMERA
    // ==========================

    const scanner =
    new Html5QrcodeScanner(

        "reader",

        {

            fps:10,

            qrbox:220

        },

        false

    );

    // ==========================
    // SUCCESS
    // ==========================

    function onScanSuccess(decodedText){

        scanner.clear();

        merchantName.innerHTML =
        "NepPay Merchant";

        merchantStatus.innerHTML =
        decodedText;

        setTimeout(()=>{

            const amount =
            prompt("Enter Amount (NPR)");

            if(amount){

                const pin =
                prompt("Enter 4 Digit MPIN");

                if(pin==="1234"){

                    alert(

`Payment Successful

Amount : NPR ${amount}

Merchant :

NepPay Merchant`

                    );

                }

                else{

                    alert("Invalid MPIN");

                }

            }

        },500);

    }

    // ==========================
    // ERROR
    // ==========================

    function onScanFailure(){

        // Ignore

    }

    // ==========================
    // START CAMERA
    // ==========================

    scanner.render(

        onScanSuccess,

        onScanFailure

    );

});

/* ==========================================
   PART 4.4C
   PAYMENT SHEET LOGIC
========================================== */

// ==========================
// ELEMENTS
// ==========================

const paymentSheet = document.getElementById("paymentSheet");

const payAmount = document.getElementById("payAmount");

const totalAmount = document.getElementById("totalAmount");

const payNow = document.getElementById("payNow");

const merchantName = document.getElementById("merchantName");

const merchantId = document.getElementById("merchantId");

// ==========================
// OPEN PAYMENT SHEET
// ==========================

function openPaymentSheet(name,id){

    merchantName.innerText = name;

    merchantId.innerText = "Merchant ID : " + id;

    payAmount.value = "";

    totalAmount.innerHTML = "Rs. 0";

    paymentSheet.classList.add("active");

}

// ==========================
// CLOSE SHEET
// ==========================

function closePaymentSheet(){

    paymentSheet.classList.remove("active");

}

// Close when clicking outside

paymentSheet.addEventListener("click",(e)=>{

    if(e.target===paymentSheet){

        closePaymentSheet();

    }

});

// ==========================
// LIVE TOTAL UPDATE
// ==========================

payAmount.addEventListener("input",()=>{

    let amount = Number(payAmount.value);

    if(isNaN(amount)) amount=0;

    totalAmount.innerHTML="Rs. "+amount.toLocaleString();

});

// ==========================
// QR SCAN SUCCESS
// ==========================

function onScanSuccess(decodedText){

    console.log(decodedText);

    openPaymentSheet(

        "NepPay Merchant",

        "NP458621"

    );

}

// ==========================
// CONTINUE PAYMENT
// ==========================

payNow.addEventListener("click",()=>{

    let amount=payAmount.value;

    if(amount==""){

        alert("Please enter amount.");

        return;

    }

    closePaymentSheet();

    document.getElementById("pinModal").style.display="flex";

});

// ==========================
// DEMO BUTTONS
// ==========================

document.getElementById("flashBtn")

.addEventListener("click",()=>{

console.log("Flash Toggle");

});

document.getElementById("galleryBtn")

.addEventListener("click",()=>{

alert("Gallery Scanner Coming Soon");

});

/* ==========================================
   PART 4.4D
========================================== */

const verifyPayment =
document.getElementById("verifyPayment");

verifyPayment.addEventListener("click",()=>{

const pin=
document.getElementById("scannerPin").value;

if(pin!="1234"){

alert("Invalid MPIN");

return;

}

document.getElementById("pinModal")

.style.display="none";

document.getElementById("successModal")

.style.display="flex";

document.getElementById("receiptAmount")

.innerHTML=

"Rs."+payAmount.value;

});

document.getElementById("fingerBtn")

.onclick=()=>{

alert("Fingerprint Authentication (Demo)");

};

document.getElementById("faceBtn")

.onclick=()=>{

alert("Face ID Authentication (Demo)");

};

document.getElementById("shareReceipt")

.onclick=()=>{

alert("Share Receipt Coming Soon");

};

document.getElementById("downloadReceipt")

.onclick=()=>{

alert("Download PDF Coming Soon");

};

document.getElementById("finishPayment")

.onclick=()=>{

location.reload();

};

/* ==========================================
   PART 4.4E
========================================== */

// =============================
// SUCCESS ANIMATION
// =============================

if(document.getElementById("successAnimation")){

lottie.loadAnimation({

container:

document.getElementById("successAnimation"),

renderer:"svg",

loop:false,

autoplay:true,

path:"https://assets10.lottiefiles.com/packages/lf20_jbrw3hcz.json"

});

}

// =============================
// QR SCAN SOUND
// =============================

const beep=new Audio(

"https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg"

);

// =============================

function playScanSound(){

beep.play();

}

// =============================
// HISTORY
// =============================

let scanHistory=

JSON.parse(

localStorage.getItem("scanHistory")

)||[];

// Save

function saveHistory(

merchant,

amount

){

scanHistory.unshift({

merchant,

amount,

date:new Date().toLocaleString()

});

localStorage.setItem(

"scanHistory",

JSON.stringify(scanHistory)

);

}

// =============================
// AFTER SUCCESS
// =============================

verifyPayment.addEventListener("click",()=>{

saveHistory(

merchantName.innerHTML,

payAmount.value

);

playScanSound();

});

// =============================
// PDF RECEIPT
// =============================

downloadReceipt.onclick=()=>{

const{

jsPDF

}=window.jspdf;

const pdf=new jsPDF();

pdf.setFontSize(22);

pdf.text(

"NepPay Receipt",

20,

20

);

pdf.setFontSize(14);

pdf.text(

"Merchant : "+merchantName.innerHTML,

20,

50

);

pdf.text(

"Amount : Rs."+payAmount.value,

20,

65

);

pdf.text(

"Status : SUCCESS",

20,

80

);

pdf.text(

"Date : "+new Date(),

20,

95

);

pdf.save(

"Receipt.pdf"

);

};

// =============================
// SHARE
// =============================

shareReceipt.onclick=()=>{

if(navigator.share){

navigator.share({

title:"NepPay Receipt",

text:

"Payment Successful\nAmount : Rs."+payAmount.value

});

}else{

alert("Sharing not supported");

}

};

// =============================
// GALLERY
// =============================

galleryBtn.onclick=()=>{

galleryInput.click();

};

galleryInput.onchange=()=>{

alert(

"Gallery QR Scan Ready"

);

};