const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; 
const container = document.querySelector("#container");
const createBtn = document.querySelector("#create-btn");
let pokemonCnt = 0 ; 
function createPokemon(){
  if (pokemonCnt === 905) { alert("포켓몬을 더 만들수 없습니다.")}
  else{
    pokemonCnt+=1;
    let pokemon = document.createElement("div"); 
    pokemon.classList.add("pokemon");
    let pokemonNo = document.createElement("span");
    pokemonNo.innerText = `No.${pokemonCnt}`; 
    let PokemonImg = document.createElement("img");
    PokemonImg.src = `${baseURL}${pokemonCnt}.png` ;
    pokemon.appendChild(PokemonImg);
    pokemon.appendChild(pokemonNo); 
    container.appendChild(pokemon); 
  }
}

createBtn.addEventListener("click",createPokemon);
for(let i=0;i<904;i++) createPokemon();