/* ==========================================
   NEPPAY WALLET
   INVESTMENT & SAVINGS
   PART 15.3
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       ELEMENTS
    ========================== */

    const backBtn = document.querySelector(".back-btn");

    const portfolioValue = document.getElementById("portfolioValue");

    const fdAmount = document.getElementById("fdAmount");
    const mfAmount = document.getElementById("mfAmount");
    const goldAmount = document.getElementById("goldAmount");

    const goalBar = document.getElementById("goalBar");
    const goalPercent = document.getElementById("goalPercent");
    const goalText = document.getElementById("goalText");

    /* ==========================
       BACK BUTTON
    ========================== */

    if(backBtn){

        backBtn.onclick = () => history.back();

    }

    /* ==========================
       LOAD DATA
    ========================== */

    const walletBalance = Number(
        localStorage.getItem("walletBalance")
    ) || 25000;

    const fd = Number(
        localStorage.getItem("fdInvestment")
    ) || 15000;

    const mutualFund = Number(
        localStorage.getItem("mutualFundInvestment")
    ) || 8000;

    const gold = Number(
        localStorage.getItem("goldInvestment")
    ) || 5000;

    /* ==========================
       PORTFOLIO
    ========================== */

    const portfolio = fd + mutualFund + gold;

    portfolioValue.textContent =
        "Rs. " + portfolio.toLocaleString();

    fdAmount.textContent =
        "Rs. " + fd.toLocaleString();

    mfAmount.textContent =
        "Rs. " + mutualFund.toLocaleString();

    goldAmount.textContent =
        "Rs. " + gold.toLocaleString();

    /* ==========================
       SAVINGS GOAL
    ========================== */

    const goal = 50000;

    const saved = portfolio;

    let percent = (saved / goal) * 100;

    if(percent > 100){

        percent = 100;

    }

    goalBar.style.width = percent + "%";

    goalPercent.textContent =
        Math.round(percent) + "%";

    goalText.textContent =
        `Rs. ${saved.toLocaleString()} of Rs. ${goal.toLocaleString()} Saved`;

    /* ==========================
       SAVE SUMMARY
    ========================== */

    const summary = {

        wallet: walletBalance,

        portfolio: portfolio,

        goal: goal,

        updated: new Date().toLocaleString()

    };

    localStorage.setItem(

        "investmentSummary",

        JSON.stringify(summary)

    );

});