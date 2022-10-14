const problemAnswer = Math.ceil(Math.random()*100) ; 
const stopAnswers = ["gg","그만","포기","멈춰"];
let userAnswer = prompt("숫자가 정해졌습니다. 숫자를 맞추어 보세요!");

while (true) {
  if (parseInt(userAnswer) > problemAnswer){
    userAnswer = prompt("좀더 작은수입니다.다시 맞추어보세요");
  }
  else if (parseInt(userAnswer) < problemAnswer){
    userAnswer = prompt("좀더 큰수입니다.다시 맞추어보세요");
  }
  else if (parseInt(userAnswer) === problemAnswer){
    alert(`정답입니다!! 축하드려요!! 정답: ${problemAnswer}`);
    break; 
  }
  else if (stopAnswers.indexOf(userAnswer.toLowerCase()) !== -1) {
    alert("포기하셨습니다.");
    break; 
  }
  else {
    userAnswer = prompt("잘못된 값을 입력하셨습니다. 다시 입력해주세요!");
  }
}