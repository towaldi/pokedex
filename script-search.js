// Search for pokemon
function searchPokemon() {
    let searchInput = document.getElementById('search-input').value;
    searchInput = searchInput.toLowerCase();
    let pokemonCards = document.getElementById('cards-container');      // Select `cards-container` to render all cards
    pokemonCards.innerHTML = '';    // Clear/delete all
    filteredPokemons = [];      // Clear "filter" array

    for (let i = 0; i < allPokemons.length; i++) {
        let searchedPokemon = allPokemons[i]['name'];
        if (searchedPokemon.toLowerCase().includes(searchInput)) {      //
            let selectedPokemon = allPokemons[i];      
            filteredPokemons.push(selectedPokemon);     // Pushes filtered pokemons into 'filteredPokemons' array
        }
    }
    renderPokemons(filteredPokemons);
    document.getElementById('load-more-btn').classList.add('d-none');   // Hides load button
    document.getElementById('footer').classList.add('position-absolute-bottom');    // Adds position-absolute-bottom
}


// Reset search 
function resetSearch() {
    let searchInput = document.getElementById('search-input');
    if (searchInput.value != '') {
        searchInput.value = '';
        searchPokemon();
    }
    document.getElementById('load-more-btn').classList.remove('d-none');   // Shows load button
    document.getElementById('footer').classList.remove('position-absolute-bottom');    // Removes position-absolute-bottom
}