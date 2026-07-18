/* ==========================================
   NepPay Wallet
   Send Money Page
   Part 2.3
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // BACK BUTTON
    // =====================================

    const backBtn = document.querySelector(".back-btn");

    if(backBtn){

        backBtn.addEventListener("click", () => {

            window.history.back();

        });

    }

    // =====================================
    // CONTACT SEARCH
    // =====================================

    const searchInput = document.querySelector(".search-box input");
    const contacts = document.querySelectorAll(".contact");

    if(searchInput){

        searchInput.addEventListener("keyup", function(){

            const keyword = this.value.toLowerCase();

            contacts.forEach(contact=>{

                const name = contact.querySelector("h4")
                .innerText.toLowerCase();

                const phone = contact.querySelector("span")
                .innerText.toLowerCase();

                if(name.includes(keyword) || phone.includes(keyword)){

                    contact.style.display = "flex";

                }

                else{

                    contact.style.display = "none";

                }

            });

        });

    }

    // =====================================
    // CONTACT CLICK
    // =====================================

    contacts.forEach(contact=>{

        contact.addEventListener("click",()=>{

            const name =
            contact.querySelector("h4").innerText;

            const phone =
            contact.querySelector("span").innerText;

            alert(

`Recipient Selected

Name : ${name}

Phone : ${phone}

Next Step:
Enter Amount`

);

        });

    });

    // =====================================
    // RECENT USERS
    // =====================================

    const recentUsers =
    document.querySelectorAll(".recent-user");

    recentUsers.forEach(user=>{

        user.addEventListener("click",()=>{

            const name =
            user.querySelector("p").innerText;

            alert(

`Quick Send

${name}

Coming Soon`

);

        });

    });

    // =====================================
    // SEARCH FOCUS
    // =====================================

    const searchBox =
    document.querySelector(".search-box");

    if(searchInput){

        searchInput.addEventListener("focus",()=>{

            searchBox.style.border =
            "2px solid #14B85C";

        });

        searchInput.addEventListener("blur",()=>{

            searchBox.style.border =
            "2px solid transparent";

        });

    }

    // =====================================
    // PAGE LOADED
    // =====================================

    console.log("Send Money Page Ready");

});

// ==========================================
// SEND MONEY MODAL
// ==========================================

const modal = document.getElementById("sendModal");

const closeModal =
document.getElementById("closeModal");

contacts.forEach(contact=>{

contact.addEventListener("click",()=>{

modal.style.display="flex";

document.getElementById("recipientName").innerHTML=
contact.querySelector("h4").innerHTML;

document.getElementById("recipientPhone").innerHTML=
contact.querySelector("span").innerHTML;

document.getElementById("recipientImage").src=
contact.querySelector("img").src;

});

});

closeModal.addEventListener("click",()=>{

modal.style.display="none";

});

document.getElementById("continueBtn")

.addEventListener("click",()=>{

const amount=
document.getElementById("amount").value;

if(amount==""){

alert("Please Enter Amount");

return;

}

alert(

"Amount : NPR "+amount+

"\n\nNext Step : PIN Verification"

);

});

// ===========================
// PIN VERIFICATION
// ===========================

const pinModal =
document.getElementById("pinModal");

const successModal =
document.getElementById("successModal");

document
.getElementById("continueBtn")

.addEventListener("click",()=>{

const amount =
document.getElementById("amount").value;

if(amount==""){

alert("Enter Amount");

return;

}

modal.style.display="none";

pinModal.style.display="flex";

});

// ===========================

document
.getElementById("verifyPin")

.addEventListener("click",()=>{

const pin =
document.getElementById("mpin").value;

if(pin!="1234"){

alert("Invalid MPIN");

return;

}

pinModal.style.display="none";

successModal.style.display="flex";

const name =
document.getElementById("recipientName").innerHTML;

const amount =
document.getElementById("amount").value;

document
.getElementById("receiptText")

.innerHTML=

`
Successfully sent

<b>NPR ${amount}</b>

to

<b>${name}</b>

`;

});

// ===========================

document
.getElementById("shareReceipt")

.addEventListener("click",()=>{

alert("Receipt Sharing Coming Soon");

});

// ===========================

document
.getElementById("doneBtn")

.addEventListener("click",()=>{

successModal.style.display="none";

location.reload();

});