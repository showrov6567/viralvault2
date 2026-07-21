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
