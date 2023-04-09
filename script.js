// Global variables
let allPokemons = []    // Array for API load
let startCounterLoading = 1;        // Start counter at 1
let endCounterLoading = 21;         // Stop Counter at 10

// Load all pokemons form PokeAPI
async function loadPokemons() {
    for (let i = startCounterLoading; i < endCounterLoading; i++) {     // Iteration to load first 9 pokemons 
        let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;      // Url of the API
        let response = await fetch(url)     // Request to server -> loading data
        pokemons = await response.json();   // Transfer test into JSON
        allPokemons.push(pokemons);     // Push JSON in array `allPokemons`
    }
    renderPokemons(allPokemons);    // Run renderPokemons with function parameter `allPokemons` (after for loop -> execute only ones for performance reasons)
}


// Render pokemon cards
function renderPokemons(currentPokemon) {
    let pokemonCards = document.getElementById('cards-container');      // Select `cards-container` to render all cards
    pokemonCards.innerHTML = '';    // Clear/delete container

    if (allPokemons == 0) {     // If/else statement
        pokemonCards.innerHTML += templatePokeApiNotLoaded();   // Error case -> loading from API failed
    } else {
        for (let i = 0; i < currentPokemon.length; i++) {   // Iteration -> render all pokemon cards inside array `allPokemons`
            pokemonCards.innerHTML += templateRenderPokemonCard(i, currentPokemon)
        }
    }
}


// Render pokemon types
function renderPokemonTypes(i, currentPokemon) {
    let types = document.getElementById('pokemon-types${i}');   // Select `pokemon-types` at position `i` to render the 1 or 2 types
    let pokemon = currentPokemon[i];    // `currentPokemon` at position `i` in array is assigned to the variable `pokemon`
    for (let i = 0; i < pokemon.length; i++) {     // Iteration through the array `pokemon`
        const type = pokemon['types'][i]['type']['name'];
        types.innerHTML += ``;
    }
}