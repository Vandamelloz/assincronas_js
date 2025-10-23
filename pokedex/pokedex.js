
async function buscarPokemon(){
    try{
        const resposta= await fetch("https://pokeapi.co/api/v2/pokemon?offset=10&");
        const dados= await resposta.json();
        const pokemons = dados.results;
        const pokemon1=pokemons[0];
        console.log("Nome", pokemon1.name)
      
        for (let i=0; i<pokemons.length; i++){
            console.log("Nome", pokemons[i].name);
        }
    }
        catch(erro){
        console.log("Deu erro", erro);
    }

}
buscarPokemon();