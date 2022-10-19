const req = new XMLHttpRequest(); 
//정상적으로 처리 되었을때
req.onload = function(){
  console.log("onload");
  //this.responseText 는 필요한 json 문자열 
  const catFactJson = JSON.parse(req.responseText);
  console.log(catFactJson);
  // console.log(catFactJson["fact"]);
  console.log(catFactJson.fact);
};
//에러났을때 
req.onerror = function(){
  console.log("onerror");
  const catFactJson = null ; 
  console.log(catFactJson);
}

req.open("GET","https://catfact.ninja/fact"); 
req.send(); 
