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
                                <h5 class="text-capitalize">${pokeName}</h5>
                                <p>#${pokeId.toString().padStart(3, '0')}</p>
                            </div>
                            <div class="row-space-between-bottom">
                                <div id="pokemon-types-${i}" class="column-gap-8px text-capitalize"></div>
                                <img class="p-c-image" src="${pokeImg}" alt="pokemon img">
                            </div>
                        </div>`;
}


// Pokemon dialog 
function templateDialogPokemonCard(i, currentPokemon) {
    let pokeName = currentPokemon['name'];   // Name of pokemon is assigned to the variable `pokeName` 
    let pokeId = currentPokemon['id'];       // Id of pokeomon is assigned to the variable `pokeId` (id gets converted into a string + added 0s to fill a total length of 3 (added as additional variable or inside the html code) -> let pokeIdAsString = pokeId.toString().padStart(3, '0');)
    let pokeImg = currentPokemon['sprites']['other']['official-artwork']['front_default'];   // Image of pokeomon is assigned to the variable `pokeImg`

    return /*html*/ `   <div onclick="closeDialogPokemonCardBgr(event)" class="dialog-pokemon-card">
                            <div id="pokemon-dialog${i}" class="d-p-c-basic column-center-gap-8px text-capitalize">
                                <!-- Name + id-->
                                <div class="row-space-between">
                                    <div class="column-space-between">
                                        <h5 class="text-capitalize">${pokeName}</h5>
                                        <p>#${pokeId.toString().padStart(3, '0')}</p>
                                    </div>
                                    <img onclick="closeDialogPokemonCard()" class="icon-button" src="./img/close_24px_white.svg" alt="close">
                                </div>
                                <!-- Types -->
                                <div class="row-space-between">
                                    <div id="dialog-pokemon-types-${i}" class="row-gap-8px"></div>
                                </div>
                                <!-- Nav arrows + img -->
                                <div class="row-space-between">
                                    <img onclick="previousPokemon(${i})" class="icon-button" src="./img/arrow_back_24px_white.svg" alt="arrow back">
                                    <img class="d-p-c-image" src="${pokeImg}" alt="pokemon img">
                                    <img onclick="followingPokemon(${i})" class="icon-button" src="./img/arrow_forward_24px_white.svg" alt="arrow forward">
                                </div>
                                <!-- Tabs -->
                                <ul class="nav">
                                    <li onclick="renderAboutDialogPokemonCard(${i})" id="nav-item-1" class="nav-item">About</li>
                                    <li onclick="renderStatsDialogPokemonCard(${i})" id="nav-item-2" class="nav-item">Stats</li>
                                </ul>
                                <!-- Additional info -->
                                <div id="detailed-info" class="detailed-info"></div>
                            </div>
                        </div>`;
}


// Render detailed info -> about
function templateDialogAbout(currentPokemon) {
    let height = currentPokemon['height'];      // Height of pokemon is assigned to the variable `height`  
    height = height / 10;       // Value devided by 10 -> meter
    height = height.toString().replace('.', ',');   // Convert to sting + replace `.` with `,`

    let weight = currentPokemon['weight'];      // Weight of pokemon is assigned to the variable `weight`
    weight = weight / 10;       // Value devided by 10 -> kilogram
    weight = weight.toString().replace('.', ',');       // Convert to sting + replace `.` with `,`

    return /*html*/ `   <table>
                            <tr class>
                                <td class="td-primary">Height</td>
                                <td class="td-secondary">${height} m</td>
                            </tr>
                            <tr class>
                                <td class="td-primary">Weight</td>
                                <td class="td-secondary">${weight} kg</td>
                            </tr>
                            <tr class>
                                <td class="td-primary">Abilities</td>
                                <td id="poke-abilities" class="row-gap-4px"></td>
                            </tr>
                        </table>`;
}


// Render detailed info -> stats
function templateDialogStats(currentPokemon) {
    // HP
    let hp = currentPokemon['stats'][0]['base_stat'];
    hp = Math.round(hp / 150 * 100);
    // Attack
    let attack = currentPokemon['stats'][1]['base_stat'];
    attack = Math.round(attack / 150 * 100);
    // Special attack
    let specialAttack = currentPokemon['stats'][3]['base_stat'];
    specialAttack = Math.round(specialAttack / 150 * 100);
    // Defense
    let defense = currentPokemon['stats'][2]['base_stat'];
    defense = Math.round(defense / 150 * 100);
    // Special defense
    let specialDefense = currentPokemon['stats'][4]['base_stat'];
    specialDefense = Math.round(specialDefense / 150 * 100);
    // Speed
    let speed = currentPokemon['stats'][5]['base_stat'];
    speed = Math.round(speed / 150 * 100);

    return /*html*/ `   <table>
                            <!-- Table row -->
                            <tr>
                                <td class="td-primary">HP</td>
                                <!-- bootstrap progress bar -->
                                <td>
                                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar" style="width: ${hp}%">${hp}%</div>
                                    </div>
                                </td>
                            </tr>
                            <!-- Table row -->
                            <tr>
                                <td class="td-primary">Attack</td>
                                <!-- bootstrap progress bar -->
                                <td>
                                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar" style="width: ${attack}%">${attack}%</div>
                                    </div>
                                </td>
                            </tr>
                            <!-- Table row -->
                            <tr>
                                <td class="td-primary">Sp. Attack</td>
                                <!-- bootstrap progress bar -->
                                <td>
                                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar" style="width: ${specialAttack}%">${specialAttack}%</div>
                                    </div>
                                </td>
                            </tr>
                            <!-- Table row -->
                            <tr>
                                <td class="td-primary">Defense</td>
                                <!-- bootstrap progress bar -->
                                <td>
                                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar" style="width: ${defense}%">${defense}%</div>
                                    </div>
                                </td>
                            </tr>
                            <!-- Table row -->
                            <tr>
                                <td class="td-primary">Sp. Defense</td>
                                <!-- bootstrap progress bar -->
                                <td>
                                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar" style="width: ${specialDefense}%">${specialDefense}%</div>
                                    </div>
                                </td>
                            </tr>
                            <!-- Table row -->
                            <tr>
                                <td class="td-primary">Speed</td>
                                <!-- bootstrap progress bar -->
                                <td>
                                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar" style="width: ${speed}%">${speed}%</div>
                                    </div>
                                </td>
                            </tr>
                        </table>`;
}