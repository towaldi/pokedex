// Runs search by click on 'search' button
let searchInput = document.getElementById('search-input');     // Get input from input field
searchInput.addEventListener('keypress', function (event) {     // Adds an `Event-Listener` (event kind + function)
    if (event.key === 'Enter') {    // Checks if user is pressing 'Enter'
        event.preventDefault();     // Blocks the standard browser behavior ('Enter' = restart webpage)
        document.getElementById('search-button').click();   // Runs 'click()' function (simulates click on button)
    }
});


//
function searchPokemon() {
    let search = document.getElementById('search-input').value;
    search = search.toLowerCase();
}