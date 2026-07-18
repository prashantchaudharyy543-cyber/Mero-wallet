document.addEventListener("DOMContentLoaded",()=>{

const pointText=

document.getElementById("myPoints");

let points=parseInt(

localStorage.getItem("rewardPoints")

)||1250;

pointText.innerHTML=

points.toLocaleString();

document

.querySelectorAll(".redeem-card button")

.forEach(btn=>{

btn.onclick=()=>{

const card=

btn.parentElement;

const cost=parseInt(

card.dataset.points

);

const reward=

card.querySelector("h3").innerText;

if(points<cost){

alert(

"Not enough reward points."

);

return;

}

const ok=

confirm(

"Redeem "+reward+" ?"

);

if(!ok) return;

points-=cost;

localStorage.setItem(

"rewardPoints",

points

);

pointText.innerHTML=

points.toLocaleString();

alert(

"🎉 "+reward+

" redeemed successfully."

);

};

});

document

.querySelector(".back-btn")

.onclick=()=>{

history.back();

};

});