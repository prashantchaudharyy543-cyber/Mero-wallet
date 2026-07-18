/* ==========================================
   NepPay Wallet
   Statement Page
   Part 3.3
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
    // SEARCH TRANSACTION
    // =====================================

    const searchInput = document.querySelector(".statement-search input");
    const transactions = document.querySelectorAll(".transaction");

    if(searchInput){

        searchInput.addEventListener("keyup", function(){

            const keyword = this.value.toLowerCase();

            transactions.forEach(transaction => {

                const title = transaction.querySelector("h4").innerText.toLowerCase();
                const date = transaction.querySelector("p").innerText.toLowerCase();
                const amount = transaction.querySelector(".amount").innerText.toLowerCase();

                if(
                    title.includes(keyword) ||
                    date.includes(keyword) ||
                    amount.includes(keyword)
                ){

                    transaction.style.display = "flex";

                }else{

                    transaction.style.display = "none";

                }

            });

        });

    }

    // =====================================
    // FILTER BUTTON
    // =====================================

    const filterBtn = document.querySelector(".filter-btn");

    if(filterBtn){

        filterBtn.addEventListener("click",()=>{

            alert(
`Transaction Filter

• Today
• Yesterday
• Last 7 Days
• Last 30 Days

(Filter UI Coming Soon)`
            );

        });

    }

    // =====================================
    // TRANSACTION DETAILS
    // =====================================

    transactions.forEach(transaction=>{

        transaction.addEventListener("click",()=>{

            const title =
            transaction.querySelector("h4").innerText;

            const date =
            transaction.querySelector("p").innerText;

            const amount =
            transaction.querySelector(".amount").innerText;

            alert(

`Transaction Details

Type : ${title}

Date : ${date}

Amount : ${amount}

Status : Successful`

            );

        });

    });

    // =====================================
    // SUMMARY CARD ANIMATION
    // =====================================

    const summary =
    document.querySelector(".summary-card");

    if(summary){

        summary.animate([

            {
                transform:"translateY(-15px)",
                opacity:0
            },

            {
                transform:"translateY(0)",
                opacity:1
            }

        ],{

            duration:600

        });

    }

    // =====================================
    // CARD HOVER EFFECT
    // =====================================

    transactions.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transition=".3s";

        });

    });

    // =====================================
    // PAGE READY
    // =====================================

    console.log("Statement Page Ready");

});