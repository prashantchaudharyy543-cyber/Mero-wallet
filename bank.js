/* ==========================================
   NepPay Wallet
   Bank Linking Module
   Part 8.3
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // ELEMENTS
    // =====================================

    const backBtn = document.querySelector(".back-btn");
    const addBankBtn = document.getElementById("addBank");
    const searchInput = document.getElementById("bankSearch");
    const bankList = document.querySelector(".bank-list");
    const loadMoneyBtn = document.querySelector(".load-money-btn");

    // =====================================
    // DEFAULT BANKS
    // =====================================

    let banks = JSON.parse(localStorage.getItem("linkedBanks")) || [

        {
            name: "Everest Bank",
            account: "****45896321"
        },

        {
            name: "Nabil Bank",
            account: "****87452123"
        },

        {
            name: "Global IME Bank",
            account: "****63251489"
        }

    ];

    // =====================================
    // SAVE
    // =====================================

    function saveBanks(){

        localStorage.setItem(

            "linkedBanks",

            JSON.stringify(banks)

        );

    }

    // =====================================
    // RENDER
    // =====================================

    function renderBanks(list){

        bankList.innerHTML="";

        list.forEach((bank,index)=>{

            bankList.innerHTML += `

            <div class="bank-card">

                <div class="bank-icon">

                    <i class="fa-solid fa-building-columns"></i>

                </div>

                <div class="bank-info">

                    <h3>${bank.name}</h3>

                    <p>${bank.account}</p>

                </div>

                <span class="verified">

                    Verified

                </span>

            </div>

            `;

        });

    }

    renderBanks(banks);

    saveBanks();

    // =====================================
    // SEARCH
    // =====================================

    searchInput.addEventListener("keyup",()=>{

        const keyword =

        searchInput.value.toLowerCase();

        const filtered =

        banks.filter(bank=>{

            return bank.name

            .toLowerCase()

            .includes(keyword);

        });

        renderBanks(filtered);

    });

    /* =====================================
   MODAL
===================================== */

const modal =
document.getElementById("bankModal");

const closeModal =
document.getElementById("closeModal");

const form =
document.getElementById("bankForm");

addBankBtn.onclick=()=>{

modal.classList.add("active");

};

closeModal.onclick=()=>{

modal.classList.remove("active");

};

window.onclick=(e)=>{

if(e.target===modal){

modal.classList.remove("active");

}

};

/* =====================================
   BANK VERIFICATION
===================================== */

const otpModal =
document.getElementById("otpModal");

const loading =
document.getElementById("loadingScreen");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=
document.getElementById("bankName").value;

const holder=
document.getElementById("holderName").value;

const account=
document.getElementById("accountNumber").value;

const mobile=
document.getElementById("bankMobile").value;

if(name===""){

alert("Select Bank");

return;

}

if(holder.length<3){

alert("Invalid Holder Name");

return;

}

if(account.length<8){

alert("Invalid Account Number");

return;

}

if(!/^98\d{8}$/.test(mobile)){

alert("Invalid Mobile Number");

return;

}

modal.classList.remove("active");

loading.classList.add("active");

setTimeout(()=>{

loading.classList.remove("active");

otpModal.classList.add("active");

},2000);

});

/* =====================================
   OTP AUTO FOCUS
===================================== */

const otpInputs=
document.querySelectorAll(".bank-otp");

otpInputs.forEach((box,index)=>{

box.addEventListener("input",()=>{

if(box.value && index<5){

otpInputs[index+1].focus();

}

});

});

/* =====================================
   VERIFY OTP
===================================== */

document.getElementById("verifyBankOtp")

.onclick=()=>{

let otp="";

otpInputs.forEach(i=>{

otp+=i.value;

});

if(otp.length!=6){

alert("Enter OTP");

return;

}

if(otp==="123456"){

otpModal.classList.remove("active");

banks.push({

name:
document.getElementById("bankName").value,

account:"****"+

document.getElementById("accountNumber").value.slice(-4)

});

saveBanks();

renderBanks(banks);

form.reset();

otpInputs.forEach(i=>i.value="");

alert("🎉 Bank Linked Successfully");

}else{

alert("Invalid OTP");

}

};

    // =====================================
    // LOAD MONEY
    // =====================================

    loadMoneyBtn.addEventListener("click",()=>{

        alert(

"Opening Load Money Screen..."

        );

        window.location.href="load-money.html";

    });

    // =====================================
    // BACK
    // =====================================

    backBtn.addEventListener("click",()=>{

        history.back();

    });

    // =====================================
    // READY
    // =====================================

    console.log("Bank Module Ready");

});