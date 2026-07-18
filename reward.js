/* ==========================================
   NEPPAY WALLET
   REWARDS MODULE
   PART 9.3
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // ELEMENTS
    // ===========================

    const rewardPoints = document.getElementById("rewardPoints");
    const cashback = document.getElementById("cashback");
    const dailyBonus = document.getElementById("dailyBonus");
    const backBtn = document.querySelector(".back-btn");
    const rewardItems = document.querySelectorAll(".reward-item");

    // ===========================
    // LOCAL STORAGE
    // ===========================

    let points = parseInt(localStorage.getItem("rewardPoints")) || 1250;
    let cash = parseInt(localStorage.getItem("cashbackAmount")) || 520;
    let lastClaim = localStorage.getItem("dailyBonusDate") || "";

    rewardPoints.textContent = points.toLocaleString();
    cashback.textContent = cash;

    // ===========================
    // DAILY BONUS
    // ===========================

    dailyBonus.addEventListener("click", () => {

        const today = new Date().toDateString();

        if (lastClaim === today) {

            alert("🎉 Daily bonus already claimed today!");

            return;

        }

        points += 20;
        cash += 5;

        rewardPoints.textContent = points.toLocaleString();
        cashback.textContent = cash;

        localStorage.setItem("rewardPoints", points);
        localStorage.setItem("cashbackAmount", cash);
        localStorage.setItem("dailyBonusDate", today);

        lastClaim = today;

        alert("✅ Daily Bonus Claimed!\n\n+20 Reward Points\n+Rs.5 Cashback");

    });

    // ===========================
    // MENU ACTIONS
    // ===========================

    rewardItems.forEach(item => {

        item.addEventListener("click", () => {

            const title = item.innerText.trim();

            switch(title){

                case "Coupons":
                    alert("🎟️ Promo & Coupons page coming soon.");
                    break;

                case "Cashback":
                    alert("💸 Cashback History page coming soon.");
                    break;

                case "Daily Bonus":
                    dailyBonus.click();
                    break;

                case "Redeem":
                    alert("🎁 Reward Redemption page coming soon.");
                    break;

                default:
                    alert(title);

            }

        });

    });

    // ===========================
    // BACK BUTTON
    // ===========================

    backBtn.addEventListener("click", () => {

        history.back();

    });

});

/* ==========================================
PART 9.6
LEVEL SYSTEM
========================================== */

const progress =
document.getElementById("progressFill");

const progressText =
document.getElementById("progressText");

const level =
document.getElementById("levelName");

if(progress){

const total = 5000;

const percent = Math.min(

(points / total) * 100,

100

);

progress.style.width = percent + "%";

progressText.innerHTML =

points + " / " + total + " Points";

if(points >= 4000){

level.innerHTML = "Platinum 🏆";

}

else if(points >= 2500){

level.innerHTML = "Gold 🥇";

}

else{

level.innerHTML = "Silver 🥈";

}

}