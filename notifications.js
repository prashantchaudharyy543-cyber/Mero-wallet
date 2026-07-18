/* ==========================================
   NEPPAY WALLET
   NOTIFICATION CENTER
   PART 10.3
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchNotification");
    const markAllBtn = document.getElementById("markAll");
    const cards = document.querySelectorAll(".notification-card");
    const backBtn = document.querySelector(".back-btn");

    // ===============================
    // BACK BUTTON
    // ===============================

    backBtn.addEventListener("click", () => {

        history.back();

    });

    // ===============================
    // SEARCH
    // ===============================

    searchInput.addEventListener("keyup", function () {

        let keyword = this.value.toLowerCase();

        cards.forEach(card => {

            let text = card.innerText.toLowerCase();

            if(text.includes(keyword)){

                card.style.display = "flex";

            }else{

                card.style.display = "none";

            }

        });

    });

    // ===============================
    // MARK ALL READ
    // ===============================

    markAllBtn.addEventListener("click", () => {

        cards.forEach(card => {

            card.classList.remove("unread");

        });

        localStorage.setItem("notificationRead","true");

        alert("✅ All notifications marked as read.");

    });

    // ===============================
    // RESTORE READ STATUS
    // ===============================

    if(localStorage.getItem("notificationRead")==="true"){

        cards.forEach(card=>{

            card.classList.remove("unread");

        });

    }

    // ===============================
    // CLICK TO READ
    // ===============================

    cards.forEach(card=>{

        card.addEventListener("click",()=>{

            card.classList.remove("unread");

        });

    });

    // ===============================
    // DELETE (DOUBLE CLICK)
    // ===============================

    cards.forEach(card=>{

        card.addEventListener("dblclick",()=>{

            if(confirm("Delete this notification?")){

                card.style.opacity="0";

                card.style.transform="translateX(100px)";

                setTimeout(()=>{

                    card.remove();

                    checkEmpty();

                },300);

            }

        });

    });

    // ===============================
    // EMPTY STATE
    // ===============================

    function checkEmpty(){

        const list=document.getElementById("notificationList");

        if(list.children.length===0){

            list.innerHTML=`

            <div class="empty-state">

                <i class="fa-regular fa-bell-slash"></i>

                <h3>No Notifications</h3>

                <p>You're all caught up.</p>

            </div>

            `;

        }

    }

});

/* ===============================
   NOTIFICATION COUNTER
=============================== */

function updateCounter(){

    const count=document.querySelectorAll(".notification-card.unread").length;

    const badge=document.getElementById("notificationCount");

    badge.innerHTML=count;

}

updateCounter();

cards.forEach(card=>{

    card.addEventListener("click",updateCounter);

});

markAllBtn.addEventListener("click",updateCounter);

/* ==========================================
PART 10.4
FILTER + DARK MODE
========================================== */

const filters =
document.querySelectorAll(".filter-btn");

filters.forEach(btn=>{

btn.onclick=()=>{

filters.forEach(f=>f.classList.remove("active"));

btn.classList.add("active");

const type=btn.dataset.filter;

cards.forEach(card=>{

if(type==="all"){

card.style.display="flex";

return;

}

const icon=
card.querySelector(".notify-icon");

if(icon.classList.contains(type)){

card.style.display="flex";

}else{

card.style.display="none";

}

});

};

});

/* ==========================
DARK MODE
========================== */

const darkBtn=
document.getElementById("darkModeBtn");

if(localStorage.getItem("darkMode")==="on"){

document.body.classList.add("dark");

}

darkBtn.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("darkMode","on");

}else{

localStorage.removeItem("darkMode");

}

};

/* ==========================
PIN NOTIFICATION
========================== */

cards.forEach(card=>{

card.addEventListener("contextmenu",(e)=>{

e.preventDefault();

card.classList.toggle("pinned");

});

});

/* ==========================
AUTO DEMO
========================== */

setTimeout(()=>{

const list=

document.getElementById("notificationList");

const div=document.createElement("div");

div.className="notification-card unread";

div.innerHTML=`

<div class="notify-icon reward">

<i class="fa-solid fa-gift"></i>

</div>

<div class="notify-content">

<h4>Bonus Reward</h4>

<p>You received 50 bonus points.</p>

<small>Just now</small>

</div>

`;

list.prepend(div);

updateCounter();

},10000);