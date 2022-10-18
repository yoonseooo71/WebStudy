const body = document.querySelector("body"); 

function changeColor(color,delay) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      body.style.backgroundColor = color ; 
      resolve(); 
    },delay*1000)
    reject("err");
  }) 
}


//version1
// changeColor("red",1)
//   .then(()=>{
//     changeColor("orange",1)
//       .then(()=>{
//         changeColor("yellow",1)
//           .then(()=>{
//             changeColor("green",1)
//             .then(()=>{
//               changeColor("blue",1)
//                 .then(()=>{
//                   changeColor("purple",1)
//                 })  
//             })
//           })  
//       })  
//   })
//   .catch((e)=>console.log(e))


//version2 
// then 안에 함수에서 return 빼면 안됨 뺄거면 중괄호 대신 소괄호로
// changeColor("red",1) 
//   .then(()=>{return changeColor("orange",1)})
//   .then(()=>{return changeColor("yellow",1)})
//   .then(()=>{return changeColor("green",1)})
//   .then(()=>{return changeColor("blue",1)})
//   .then(()=>{return changeColor("purple",1)})
//   .catch((e)=>console.log(e))



//version3
//async 함수 사용 await 으로 값나오는 걸 기다림  try catch문으로 에러 잡음
async function printRainbow(){
  try {
    await changeColor("red",1)
    await changeColor("orange",1)
    await changeColor("yellow",1)
    await changeColor("green",1)
    await changeColor("blue",1)
    await changeColor("purple",1)
  }
  catch(e) {
    console.log(e);
  }
}
printRainbow()