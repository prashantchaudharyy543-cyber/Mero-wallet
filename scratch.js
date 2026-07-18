document.addEventListener("DOMContentLoaded",()=>{

const cover=document.querySelector(".scratch-cover");

const reward=document.getElementById("rewardText");

const btn=document.getElementById("scratchBtn");

const rewards=[

{type:"points",value:50},

{type:"points",value:100},

{type:"points",value:150},

{type:"cash",value:10},

{type:"cash",value:20},

{type:"cash",value:50}

];

btn.onclick=()=>{

const today=new Date().toDateString();

const last=

localStorage.getItem("scratchDate");

if(last===today){

alert("Today's scratch already used.");

return;

}

const prize=

rewards[Math.floor(Math.random()*rewards.length)];

if(prize.type==="points"){

reward.innerHTML=

"+"+prize.value+" Reward Points";

let pts=parseInt(

localStorage.getItem("rewardPoints")

)||1250;

pts+=prize.value;

localStorage.setItem(

"rewardPoints",

pts

);

}else{

reward.innerHTML=

"Rs. "+prize.value+" Cashback";

let cash=parseInt(

localStorage.getItem("cashbackAmount")

)||520;

cash+=prize.value;

localStorage.setItem(

"cashbackAmount",

cash

);

}

cover.classList.add("hide");

localStorage.setItem(

"scratchDate",

today

);

setTimeout(()=>{

alert("🎉 Congratulations!");

},700);

};

});