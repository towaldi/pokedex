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
    let pokeId = currentPokemon[i]['id'];
    return /*html*/ `   <div id="pokemon-${i}" class="pokemon-card">
                            <div class="p-c-header">
                                <h2>${pokeName}</h2>
                                <p>${pokeId}</p>
                            </div>
                        </div>`;
}