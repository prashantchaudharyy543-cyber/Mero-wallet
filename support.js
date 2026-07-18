/* ==========================================
   NepPay Wallet
   Support Center
   Part 5.3
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // BACK BUTTON
    // =====================================

    const backBtn = document.querySelector(".back-btn");

    if(backBtn){

        backBtn.addEventListener("click",()=>{

            window.history.back();

        });

    }

    // =====================================
    // SEARCH BUTTON
    // =====================================

    const searchBtn = document.querySelector(".support-search");

    if(searchBtn){

        searchBtn.addEventListener("click",()=>{

            const keyword = prompt("Search Help Topic");

            if(keyword){

                alert("Searching for : " + keyword);

            }

        });

    }

    // =====================================
    // LIVE CHAT
    // =====================================

    document.getElementById("liveChat")

    .addEventListener("click",()=>{

        alert(

`🤖 NepPay AI Assistant

Hello 👋

How can we help you today?

• Payment Issue
• Wallet Issue
• QR Payment
• Bank Transfer

(Live Chat UI Coming Soon)`

        );

    });

    // =====================================
    // CALL SUPPORT
    // =====================================

    document.getElementById("callSupport")

    .addEventListener("click",()=>{

        if(confirm("Call Customer Support?")){

            window.location.href="tel:+9779800000000";

        }

    });

    // =====================================
    // EMAIL SUPPORT
    // =====================================

    document.getElementById("emailSupport")

    .addEventListener("click",()=>{

        window.location.href=

"mailto:support@neppay.com?subject=Support Request";

    });

    // =====================================
    // FAQ
    // =====================================

    document.getElementById("faq")

    .addEventListener("click",()=>{

        alert(

`Frequently Asked Questions

1. Forgot MPIN

2. Wallet Verification

3. Failed Transaction

4. Refund Policy

5. Bank Linking

6. QR Payment

7. Cashback

8. Security`

        );

    });

    // =====================================
    // HELP TOPICS
    // =====================================

    const topics =

    document.querySelectorAll(".help-item");

    topics.forEach(item=>{

        item.addEventListener("click",()=>{

            const title=

            item.querySelector("span").innerText;

            alert(

title +

"\n\nSupport Article Coming Soon."

            );

        });

    });

    // =====================================
    // CARD ANIMATION
    // =====================================

    const cards=

    document.querySelectorAll(".support-card");

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transition=".3s";

        });

    });

    // =====================================
    // PAGE READY
    // =====================================

    console.log("Support Center Ready");

});