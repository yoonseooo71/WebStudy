
//V1
// fetch("https://catfact.ninja/facts")
//   .then((req)=>{
//     //req.json 도 프로미스 로 반환 
//     req.json().then((data)=>{
//       console.log(data);
//     }) 
//   })
//   .catch((err)=>{
//     console.log(err);
//   })



//V2 응용 버전
// fetch("https://catfact.ninja/facts")
//   .then((req)=>{
//     //req.json 도 프로미스 로 반환 
//     return req.json()
//   })
//   .then((data)=>{
//     console.log(data);
//     console.log(data.data[0]);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })


//V3 비동기함수 버전 
// async function getData(){
//   try {
//     const req = await fetch("https://catfact.ninja/facts");
//     const data = await req.json() ; 
//     console.log(data);
//   }
//   catch(err) {
//     console.log(err);
//   }
  
// }
// getData();


//한번에 적는게 되는지 해봤는대  소괄호가 씌워 지면서 동작이 됨 
async function getData(){
  try {
    const data = await (await fetch("https://catfact.ninja/facts")).json();
    console.log(data);
  }
  catch(err) {
    console.log(err);
  }
  
}
getData();