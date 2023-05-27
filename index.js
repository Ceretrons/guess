let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 20;
let highestscore = 0;
document.querySelector(".score").textContent = score;
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (score > 0) {
    if (!guess) {
      document.querySelector(".start").textContent = "🔴PLEASE PICK A NUMBER🔴";
    } else if (guess === secretNumber) {
      document.querySelector(".quest").textContent = secretNumber;
      document.querySelector(".start").textContent = "✅🔊YOU WIN🔊✅";
      document.querySelector("body").style.backgroundColor = "green";
      if (score > highestscore) {
        document.querySelector(".high").textContent = score;
        document.querySelector(".prev").textContent = score;
      }
    } else if (guess > secretNumber) {
      document.querySelector(".start").textContent = "🟡🟡Number too high🟡🟡";
      document.querySelector(".score").textContent = score;
      score--;
    } else {
      document.querySelector(".start").textContent = "🟡🟡Number too low🟡🟡";
      document.querySelector(".score").textContent = score;
      score--;
    }
  } else {
    document.querySelector(".start").textContent = "YOU have lost the game";
    document.querySelector(".score").textContent = 0;
  }
});
document.querySelector(".reset").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".start").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".quest").textContent = "?";
  document.querySelector("body").style.backgroundColor = "Black";
});
