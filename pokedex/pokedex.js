

document.addEventListener('DOMContentLoaded', () => {
    const pokedexGrid = document.getElementById('pokedex-grid');


async function buscarPokemon() {
    try {
      
        const listaResponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
        const listaDados = await listaResponse.json();
        const pokemons = listaDados.results;

  
        pokedexGrid.innerHTML = ''; 


        const detailPromises = pokemons.map(pokemon => fetch(pokemon.url).then(res => res.json()));
        
      
        const detailedPokemons = await Promise.all(detailPromises);
    
        detailedPokemons.forEach(createPokemonCard);

    } catch (erro) {
        console.error("Deu erro ao buscar ou renderizar os Pokémon:", erro);
    
        pokedexGrid.innerHTML = `<p style="color: red;">Falha ao carregar os Pokémon. Verifique sua conexão.</p>`;
    }
}

/**

 * @param {Object} pokemon 
 */
function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    const imageUrl = pokemon.sprites.front_default;
    const pokemonName = pokemon.name;
    const pokemonId = pokemon.id.toString().padStart(3, '0'); 

    card.innerHTML = `
        <span class="pokemon-id">#${pokemonId}</span>
        <img src="${imageUrl}" alt="${pokemonName}" loading="lazy">
        <h2 class="pokemon-name">${pokemonName}</h2>
    `;

    pokedexGrid.appendChild(card);
}

// Inicia a função para buscar e exibir os Pokémon
buscarPokemon();
});