// Error message
function templatePokeApiNotLoaded() {
    return /*html*/ `   <div class="error-message">
                            <h5>Ooops...</h5>
                            <p>Something went wrong while loading pokemons form the PokeAPI.</p>               
                        </div>`;
}

// Pokemon card
function templateRenderPokemonCard(i, currentPokemon) {
    let pokeName = currentPokemon[i]['name'];
    let pokeId = currentPokemon[i]['id'];       // Id gets converted into a string + added 0s to fill a total length of 3 (added as additional variable or inside the html code) -> let pokeIdAsString = pokeId.toString().padStart(3, '0');
    let pokeImg = currentPokemon[i]['sprites']['other']['official-artwork']['front_default'];
    return /*html*/ `   <div id="pokemon-${i}" class="pokemon-card">
                            <div class="row-space-between">
                                <h5>${pokeName}</h5>
                                <p>#${pokeId.toString().padStart(3, '0')}</p>
                            </div>
                            <div class="row-space-between">
                                <p id="pokemon"></p>
                                <img class="p-c-image" src="${pokeImg}" alt="pokemon img">
                            </div>
                        </div>`;
}