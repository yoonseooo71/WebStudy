//axios를 사용 하면 .json() 을 안해도 json으로 값을 받을수 있음 
//받은 json 에 .data 부분에 원하는 값이 있음 

//v1
// axios.get("https://catfact.ninja/facts")
//   .then((res)=>{console.log(res.data);}) 
//   .catch((err)=>{console.log(err);}) 



//V2 
// async function getData() {
//   try{
//     const res = await axios.get("https://catfact.ninja/facts");
//     console.log(res.data);
//   } catch(err) {
//     console.log(err); 
//   }
  
// }
// getData();



//axios 헤더 사용 법 axios.get 에 두번째 매게변수로 헤더 와 정보를 입력한 객체를 넣어줌
async function getData() {
  try{
    const config = {headers: {Accept: "application/json"}}
    const res = await axios.get("https://icanhazdadjoke.com",config);
    console.log(res.data);
  } catch(err) {
    console.log(err); 
  }
  
}
getData();