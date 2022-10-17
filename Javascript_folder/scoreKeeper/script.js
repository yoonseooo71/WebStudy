let gameFinish = true ;
const maxScoreSelect = document.querySelector("#maxScore");
let maxScore = 0 ;
const resetBtn = document.querySelector("#reset");  
const p1 = {
  score : 0 ,
  btn : document.querySelector("#p1-btn"),
  display : document.querySelector("#p1-score")
}
const p2 = {
  score : 0 ,
  btn : document.querySelector("#p2-btn"),
  display : document.querySelector("#p2-score")
}
const players = [p1,p2];


function updateScore(p) {
  if (p.score !== maxScore && !gameFinish) {
    p.score += 1 ; 
    p.display.innerText = p.score;
    if (p.score === maxScore) {
      gameFinish = true;
      if (p1.score > p2.score) {addColor(p1,p2);}
      else {addColor(p2,p1);}
    }
  }
}

function resetScore() {
  p1.score = 0 ; 
  p2.score = 0 ;
  p1.display.innerText = 0 ;
  p2.display.innerText = 0 ;
  gameFinish = false ;  
  p1.display.classList.remove("winner","loser");
  p2.display.classList.remove("winner","loser");
  p1.btn.disabled = false ; 
  p2.btn.disabled = false ; 
}
function addColor(val,val2) { 
  val.display.classList.add("winner"); 
  val2.display.classList.add("loser");
  p1.btn.disabled = true ; 
  p2.btn.disabled = true ; 
}

for (let player of players) {
  player.btn.addEventListener("click",()=> {
    updateScore(player);
  });
}

resetBtn.addEventListener("click", resetScore); 


maxScoreSelect.addEventListener("change",() => {
  resetScore() 
  maxScore = parseInt(maxScoreSelect.value) ; 
})
