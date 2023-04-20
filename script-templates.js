// Error message
function templatePokeApiNotLoaded() {
    return /*html*/ `   <div class="error-message">
                            <h5>Ooops...</h5>
                            <p>Something went wrong while loading pokemons form the PokeAPI.</p>               
                        </div>`;
}


// Pokemon card
function templateRenderPokemonCard(i, currentPokemon) {
    let pokeName = currentPokemon[i]['name'];   // Name of pokemon is assigned to the variable `pokeName` 
    let pokeId = currentPokemon[i]['id'];       // Id of pokeomon is assigned to the variable `pokeId` (id gets converted into a string + added 0s to fill a total length of 3 (added as additional variable or inside the html code) -> let pokeIdAsString = pokeId.toString().padStart(3, '0');)
    let pokeImg = currentPokemon[i]['sprites']['other']['official-artwork']['front_default'];   // Image of pokeomon is assigned to the variable `pokeImg`
    return /*html*/ `   <div onclick="openDialogPokemonCard(${i})" id="pokemon-${i}" class="pokemon-card column-space-between">
                            <div class="row-space-between">
                                <h5>${pokeName}</h5>
                                <p>#${pokeId.toString().padStart(3, '0')}</p>
                            </div>
                            <div class="row-space-between-bottom">
                                <div id="pokemon-types-${i}" class="column-gap-8px"></div>
                                <img class="p-c-image" src="${pokeImg}" alt="pokemon img">
                            </div>
                        </div>`;
}


/* Pokemon type
function templateRenderPokemonType(i, currentPokemon) {
    let pokeType = currentPokemon['types'][i]['type']['name'];
    return          `   <div class="">
                            <p class="p-c-type-chip">${poketype}</p>
                        </div>`;
}*/


// Pokemon dialog 
function templateDialogPokemonCard(i, currentPokemon) {
    let pokeName = currentPokemon['name'];   // Name of pokemon is assigned to the variable `pokeName` 
    let pokeId = currentPokemon['id'];       // Id of pokeomon is assigned to the variable `pokeId` (id gets converted into a string + added 0s to fill a total length of 3 (added as additional variable or inside the html code) -> let pokeIdAsString = pokeId.toString().padStart(3, '0');)
    let pokeImg = currentPokemon['sprites']['other']['official-artwork']['front_default'];   // Image of pokeomon is assigned to the variable `pokeImg`
    
    let bgrColor = currentPokemon['types'][0]['type']['name'];
    document.getElementById(`pokemon-${i}`).classList.add(bgrColor);

    return /*html*/ `   <div class="dialog-pokemon-card">
                            <div id="pokemon-${i}" class="d-p-c-basic">
                                <!-- -->
                                <div class="row-space-between">
                                    <div class="column-space-between">
                                        <h5>${pokeName}</h5>
                                        <p>#${pokeId.toString().padStart(3, '0')}</p>
                                    </div>
                                    <img class="icon-button" src="./img/close_24px_white.svg" alt="close">
                                </div>
                                <!-- Types -->
                                <div class="row-space-between">
                                    <div id="pokemon-types-${i}" class="column-gap-8px"></div>
                                </div>
                                <!-- Nav arrows + img -->
                                <div class="row-space-between">
                                    <img class="icon-button" src="./img/arrow_back_24px_white.svg" alt="arrow back">
                                    <img class="d-p-c-image" src="${pokeImg}" alt="pokemon img">
                                    <img class="icon-button" src="./img/arrow_forward_24px_white.svg" alt="arrow forward">
                                </div>
                            </div>
                        </div>`;
}