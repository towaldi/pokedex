// Global variables
let allPokemons = []    // Array for API load
let startCounterLoading = 1;        // Start counter at 1
let endCounterLoading = 51;         // Stop Counter at 10

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
            pokemonCards.innerHTML += templateRenderPokemonCard(i, currentPokemon);
            renderPokemonTypes(i, currentPokemon);
            renderBgrColor(i, currentPokemon);
        }
    }
}


// Render pokemon types
function renderPokemonTypes(i, currentPokemon) {
    let types = document.getElementById(`pokemon-types-${i}`);   // Select `pokemon-types` at position `i` to render the 1 or 2 types
    let pokemon = currentPokemon[i];    // `currentPokemon` at position `i` in array is assigned to the variable `pokemon`
    for (let i = 0; i < pokemon['types'].length; i++) {     // Iteration through the array `pokemon`
        const type = pokemon['types'][i]['type']['name'];   // 
        types.innerHTML += /*html*/ `   <div>
                                            <p class="p-c-type-chip">${type}</p>
                                        </div>`;
    }
}


// Render pokemon card background color 
function renderBgrColor(i, currentPokemon) {
    let bgrColor = currentPokemon[i]['types'][0]['type']['name'];   // The `name` in `type`(e.g. grass) of the pokemon is assigned to the variable `bgrColor`
    document.getElementById(`pokemon-${i}`).classList.add(bgrColor);    // .classList adds the corresponding background color to the pokemon
}


// Open dialog pokemon card 
function openDialogPokemonCard(i) {
    let dialogCard = document.getElementById('dialog-card-container');
    dialogCard.classList.remove('d-none');    // Removes css class .d-none form element
    let currentPokemon = allPokemons[i];
    dialogCard.innerHTML += templateDialogPokemonCard(i, currentPokemon);   // Runs `templateDialogPokemonCard()`

    renderBgrColorDialogPokemonCard(i, currentPokemon);     // Runs `renderBgrColorDialogPokemonCard(i, currentPokemon);`
    renderDialogPokemonTypes(i, currentPokemon);     // Runs `renderDialogPokemonTypes(i, currentPokemon);`
    renderAboutDialogPokemonCard(i);     // Runs `renderAboutDialogPokemonCard(i);`
}


// Render pokemon types of dialog pokemon card
function renderDialogPokemonTypes(i, currentPokemon) {
    let types = document.getElementById(`dialog-pokemon-types-${i}`);  // Select `dialog-pokemon-types` at position `i` to render the 1 or 2 types
    let pokemon = allPokemons[i];    // `allPokemons` at position `i` in array is assigned to the variable `pokemon`
    for (let i = 0; i < pokemon['types'].length; i++) {     // Iteration through the array `pokemon`
        const type = pokemon['types'][i]['type']['name'];
        types.innerHTML += /*html*/ `   <div>
                                            <p class="p-c-type-chip">${type}</p>
                                        </div>`;
    }
}


// Render background color of dialog pokemon card
function renderBgrColorDialogPokemonCard(i, currentPokemon) { 
    let bgrColor = currentPokemon['types'][0]['type']['name'];
    document.getElementById(`pokemon-dialog${i}`).classList.add(bgrColor);
}


// Render about of dialog pokemon card
function renderAboutDialogPokemonCard(i) {
    document.getElementById('nav-item-1').classList.add('active');      // Add class `active` to `nav-item-1`
    document.getElementById('nav-item-2').classList.remove('active');   // Removes class `active` from `nav-item-2`

    let details = document.getElementById('detailed-info');      // Select `detailed-info` to render all detailed information (about)
    details.innerHTML = '';     // Clear/delete container 
    let currentPokemon = allPokemons[i];    // `allPokemons` at position `i` in array is assigned to the variable `currentPokemon`
    details.innerHTML += templateDialogAbout(currentPokemon);      // Runs `templateDialogAbout()` function
    renderAbilities(currentPokemon);    // Runs `renderAbilities()` function
}


// Render abilities of dialog pokemon card 
function renderAbilities(currentPokemon) {
    let abilities = document.getElementById('poke-abilities');      // Select `poke-abilities` to render all detailed abilities
    abilities.innerHTML = '';   // Clear/delete container
    for (let i = 0; i < currentPokemon['abilities'].length; i++) {      // Iteration through the array `currentPokemon`
        const ability = currentPokemon['abilities'][i]['ability']['name'];

        abilities.innerHTML +=  /*html*/    `<div class="td-secondary">${ability}</div>`;
    }
    
}


// Render stats of dialog pokemon card
function renderStatsDialogPokemonCard(i) {
    document.getElementById('nav-item-1').classList.remove('active');   // Removes class `active` to `nav-item-1`
    document.getElementById('nav-item-2').classList.add('active');      // Add class `active` to `nav-item-2`

    let details = document.getElementById('detailed-info');     // Select `detailed-info` to render all detailed information (stats)
    details.innerHTML = '';     // Clear/delete container
    let currentPokemon = allPokemons[i];    // `allPokemons` at position `i` in array is assigned to the variable `currentPokemon`
    details.innerHTML += templateDialogStats(currentPokemon);
}



