let balance = 0;

const rewardBtn = document.getElementById("rewardBtn");
const balanceText = document.querySelector(".card p");

rewardBtn.addEventListener("click", function () {
    balance += 10;
    balanceText.innerHTML = balance + " Coins";
    alert("🎉 You received 10 Coins!");
});
