let balance = 0;
let claimed = false;

const rewardBtn = document.getElementById("rewardBtn");
const balanceText = document.querySelector(".card p");

rewardBtn.addEventListener("click", function () {

    if (claimed === false) {
        balance += 10;
        balanceText.innerHTML = balance + " Coins";
        alert("🎉 You received 10 Coins!");
        claimed = true;
        rewardBtn.innerHTML = "✅ Reward Claimed";
    } else {
        alert("⏳ You already claimed today's reward!");
    }

});
const referralBtn = document.getElementById("referralBtn");
const referralLink = document.getElementById("referralLink");

referralBtn.addEventListener("click", function(){

    referralLink.innerHTML =
    "🔗 Your Referral Link:<br>https://t.me/viralvault2_bot?start=12345";

});
const taskBtn = document.getElementById("taskBtn");
const taskBox = document.getElementById("taskBox");

taskBtn.addEventListener("click", function(){

    taskBox.innerHTML = `
    <div class="card">
        <h3>📢 Join Our Channel</h3>
        <p>Complete task and earn 20 Coins</p>
        <button onclick="completeTask()">Complete</button>
    </div>
    `;

});


function completeTask(){

    balance += 20;
    balanceText.innerHTML = balance + " Coins";
    alert("🎉 Task Completed! You earned 20 Coins");

}
const adsBtn = document.getElementById("adsBtn");
const adsBox = document.getElementById("adsBox");

adsBtn.addEventListener("click", function(){

    adsBox.innerHTML = `
    <div class="card">
        <h3>📺 Watching Ad...</h3>
        <p>Please wait 5 seconds</p>
    </div>
    `;

    setTimeout(function(){

        balance += 5;
        balanceText.innerHTML = balance + " Coins";

        adsBox.innerHTML = `
        <div class="card">
        🎉 Ad Completed! +5 Coins
        </div>
        `;

    },5000);

});
