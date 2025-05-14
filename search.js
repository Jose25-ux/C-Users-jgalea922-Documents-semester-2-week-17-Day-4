
   // function to handle search input and filter games
   function handleSearchInput() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase();

    // filter games based on the search query
    const filteredGames = Games.filter(game =>
        game.Title.toLowerCase().includes(query) ||
        game.Description.toLowerCase().includes(query)
    );

    // render the filtered games
    renderGames(filteredGames);
}

// attach event listener to the search input field
document.getElementById('searchInput').addEventListener('input', handleSearchInput);

// initial render of all games
renderGames(Games);


  

