// render games render.js
function renderGames(Games){
    console.log('renderGames called with', Games.length, 'games');
    //Debug log
    const resultsContainer = document.getElementById('resultsContainer');

    //check if results container exist 
    if(!resultsContainer){
        console.error('Results container not found')
        return;
    }



    //clear the container 
    resultsContainer.innerHTML = '';

    //if no games found show message 
    if(Games.length === 0){
        console.log('No Games found, showing empty message'); //Debug log
        resultsContainer.innerHTML = `<p id=" noResults"> No Games found 🔍</p>`;
        return;
    }

    //instead of document fragment we can use an array to collect elements and then join them or create a container div
    const GameElements = [];
    Games.forEach(Game => {
        //validate game object
        if(!Game || typeof Game.Title !== 'string'){
            console.warn('Invaild Game object:', Game);
            return;

        }
        const GameDiv = document.createElement('div');
        GameDiv.className = 'Game-card';
        GameDiv.innerHTML = `

                <div class="game header">
                <img src="${Game.img || ''}" alt="play of ${Game.Title} class="game-img"> 

               
                    </div>
                    <h3>${Game.Title}</h3>

                    <p><strong>Rating:</strong> ${Game.Rating || 'unknown'}</p>
                    <p><strong>Description:</strong> ${Game.Description || 'unknown'}</p>
                    <a href="${Game.link || '#'}" target="_blank">
                    <button class="details-btn">Details</button>
                    </a>

        `;
        GameElements.push(GameDiv);
        
    });
    


 //append all games cards at once 
 GameElements.forEach(element =>{
    resultsContainer.appendChild(element);
});
console.log(`Successfully rendered ${Games.length} Games`); // Debug log
}
renderGames(Games);