const jokeBtn = document.querySelector("#jokeAddBtn");
const jokeList = document.querySelector("#jokeList"); 




async function addJoke() {
  const joke = await getData();
  const jokeLi = document.createElement("li");
  jokeLi.append(joke);
  jokeList.append(jokeLi); 
}



async function getData() {
  try{
    const config = {headers: {Accept: "application/json"}}
    const res = await axios.get("https://icanhazdadjoke.com",config);
    return res.data.joke ; 
  } catch(err) {
    return `오류 발생` ; 
  }
}

jokeBtn.addEventListener("click",addJoke);