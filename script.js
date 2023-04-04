// Global variables
let allPokemons = []    // Array for API load
let counter = 0;        // Starts counter at 0


// Load all pokemons form PokeAPI
async function loadPokemons() {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=${counter}&limit=21`;      // Url of the API
    let response = await fetch(url)     // Request to server -> loading data
    pokemons = await response.json();   // Transfer test into JSON
    allPokemons.push(pokemons);     // Push JSON in array `allPokemons`

    console.log('loaded pokemons', allPokemons)

}


// Render pokemon cards
function renderPokemons() {
    let pokemonCards = document.getElementById('cards-container');      // Select `cards-container` to render all cards
    pokemonCards.innerHTML = '';    // Clear/delete container

    if (allPokemons == 0) {     // If/else statement for error case: loading from API failed
        pokemonCards.innerHTML += /*html*/ `    <div class="error-message">
                                                    
                                                </div>`;
    } else {
        
    }
}