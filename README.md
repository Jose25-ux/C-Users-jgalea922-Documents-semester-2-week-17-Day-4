# C-Users-jgalea922-Documents-semester-2-week-17-Day-4

# Game Searcher - CSS and JavaScript Code Explanation

This README explains all the **CSS** and **JavaScript** code for the "Game Searcher" application. The application lets users search a list of video games, toggle between light and dark themes and tracks how long the user has stayed on the page.

---
## CSS Explanation

The CSS code is responsible for the look and feel of the application:

```css
body {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    color: black;
    transition: background-color 0.3s, color 0.3s;
}

body.dark {
    background-color: black;
    color: white;
}

.container {
    margin-bottom: 20px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.header img {
    width: 180px;
    height: 180px;
}

.Game-card {
    background-color: black;
    color: white;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, color 0.3s;
}

.Game-card:hover {
    background-color: white;
    color: black;
    transform: translateY(-5px);
}

#resultsContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

input {
    padding: 8px;
    font-size: 16px;
    width: 300px;
    margin-bottom: 10px;
}

button {
    padding: 8px 16px;
    font-size: 16px;
    background-color: cyan;
    color: black;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s, transform 0.3s;
}

button:hover {
    background-color: darkcyan;
    transform: scale(1.1);
}

footer {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
}
```

- `body`  
  - Uses a clean Arial font, sets a max width, centers the content, and adds padding.
  - By default, background is white and text is black.
  - When `.dark` class is added to the `<body>`, background becomes black and text becomes white.
  - Smooth transitions for color/background-color changes.

- `.container`  
  - Adds space below containers.

- `.header`  
  - Flexbox layout: aligns logo, title, and theme button in a row, spaced apart.
  - Adds space below the header.

- `.header img`  
  - Controls logo size.

- `.Game-card`  
  - Each game card has a black background, white text, padding, margin, rounded corners, and a slight shadow.
  - On hover: background turns white, text turns black, and the card moves up a bit (`transform: translateY(-5px)`).

- `#resultsContainer`  
  - Uses CSS grid to lay out game cards in a 4-column grid with gaps.

- `input`  
  - Styles the search box for padding, font, and width.

- `button`  
  - Button styling: cyan background, black text, rounded corners, no border.
  - On hover: background turns dark cyan, button grows slightly.

- `footer`  
  - Simple centered footer text.

---

## JavaScript Explanation

All logic is handled in several scripts (shown here combined for explanation):

### 1. Greet User with Cookie

```js
function greetUser(){
    // Check if the "vistedBefore" cookie exists
    const hasVistedBefore = document.cookie.includes('vistedBefore=true');
    if(hasVistedBefore){
        alert("👋 Welcome back to Game Search!");
    }else{
        // Set cookie to expire in 7 days
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate()+ 7);
        document.cookie = `vistedBefore=true;
        expires=${expiryDate.toUTCString()}; path=/`
        alert("⭐ Welcome to Game Search!");
    }
}
greetUser();
```
- Shows a welcome message on the user's first visit, and a different one if they've been here before.
- Sets a cookie that lasts for 7 days.

---

### 2. The List of Games

```js
    const Games = [
        {
            id: 1,
            Title: "Marvel Rivals",
            Rating: "★★★★☆",
            Description: "Released in December 6, 2024.",
            img:"images/marvel.jpg",
            link: "https://en.wikipedia.org/wiki/Marvel_Rivals"
        },
        {
            id: 2,
            Title: "Call of Duty",
            Rating: "★★★★☆",
            Description: "It began in 2003 and continues to evolve.",
            img:"images/call a duty.jfif",
            link: "https://en.wikipedia.org/wiki/Call_of_Duty"
        },
        {
            id: 3,
            Title: "Mario Party",
            Rating: "★★★☆☆",
            Description: "Released in October 17, 2024.",
            img:"images/party.jfif",
            link: "https://en.wikipedia.org/wiki/Super_Mario_Party_Jamboree"
        },
        {
            id: 4 ,
            Title: "Clash Royale",
            Rating: "★★★★★",
            Description: "Released in March 2, 2016.",
            img:"images/clash.jfif",
            link: "https://en.wikipedia.org/wiki/Clash_Royale"
        },
        {
            id: 5,
            Title: "Fortnite",
            Rating: "★★★★☆",
            Description: "Released in July 21, 2017.",
            img:"images/fortnite.jfif",
            link: "https://en.wikipedia.org/wiki/Fortnite"
        },
        {
            id: 6,
            Title: "Brawl Stars",
            Rating: "★★★★☆",
            Description: "Released in June 15, 2017.",
            img:"images/brawl.png",
            link: "https://en.wikipedia.org/wiki/Brawl_Stars"
        },
        {
            id: 7,
            Title: "Mortal Kombat.",
            Rating: "★★★☆☆",
            Description: "Released in June 15, 2017.",
            img:"images/mortal combat.jfif",
            link: "https://en.wikipedia.org/wiki/Mortal_Kombat"
        },
        {
            id: 8,
            Title: "Minecraft",
            Rating: "★★★★★",
            Description: "Released in May 17, 2009.",
            img:"images/mincraft.jfif",
            link: "https://en.wikipedia.org/wiki/Minecraft"
        },
        {
            id: 9,
            Title: "GTA 5",
            Rating: "★★★★★",
            Description: "Released in June 15, 2017.",
            img:"images/gta5.jfif",
            link: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_V"
        },
        {
            id: 10,
            Title: "Street Fighter 6",
            Rating: "★★★☆☆",
            Description: "Released in June 2, 2023.",
            img:"images/fighter.jfif",
            link: "https://en.wikipedia.org/wiki/Street_Fighter_6"
        },
        {
            id: 11,
            Title: "Dragon Ball Sparking Zero",
            Rating: "★★★☆☆",
            Description: "Released in October 11, 2024.",
            img:"images/dragon.jfif",
            link: "https://en.wikipedia.org/wiki/Dragon_Ball:_Sparking!_Zero"
        },
        {
            id: 12,
            Title: "Smash Bros",
            Rating: "★★★★☆",
            Description: "Released in December 7, 2018.",
            img:"images/bros.jfif",
            link: "https://en.wikipedia.org/wiki/Super_Smash_Bros.#:~:text=three%20months%20later.-,Super%20Smash%20Bros.,prior%20to%20the%20game's%20release."
        },
        
        {
            id: 13,
            Title: "Rematch",
            Rating: "★★★★★",
            Description: "Will be Released in June 19, 2025.",
            img:"images/rematch.jfif",
            link: "https://www.playrematch.com/faqs."

        },
        {
            id: 14,
            Title: "Pacman",
            Rating: "★★☆☆☆",
            Description: "Released in May 22, 1980.",
            img:"images/pac.jfif",
            link: "https://en.wikipedia.org/wiki/Pac-Man"

        },
        {
            id: 15,
            Title: "Elden Ring",
            Rating: "★★★★★",
            Description: "Released in February 25, 2022.",
            img:"images/ring.jfif",
            link: "https://en.wikipedia.org/wiki/Elden_Ring#:~:text=It%20was%20directed%20by%20Hidetaka,to%20be%20released%20in%202025."


        },
        {
            id: 16,
            Title: "Elden Ring NightReign",
            Rating: "★★★★★",
            Description: "Will Be Released in May 30, 2025.",
            img:"images/night.jfif",
            link: "https://en.wikipedia.org/wiki/Elden_Ring_Nightreign"
            

        },
        {
            id: 17,
            Title: "God Of War",
            Rating: "★★★★★",
            Description: "Released in April 20, 2018.",
            img:"images/Goat.jfif",
            link: "https://en.wikipedia.org/wiki/God_of_War_(franchise)#:~:text=God%20of%20War%20was%20released,on%20a%20non%2DPlayStation%20platform."
            

        },
        {
            id: 18,
            Title: "God Of War Ragnarok",
            Rating: "★★★★★",
            Description: "Released in November 9, 2022.",
            img:"images/Retired.jfif",
            link: "https://en.wikipedia.org/wiki/God_of_War_Ragnar%C3%B6k"
            

        },
        {
            id: 19,
            Title: "Spider-Man 2",
            Rating: "★★★★☆",
            Description: "Released in October 20, 2023.",
            img:"images/spider.jfif",
            link: "https://en.wikipedia.org/wiki/Spider-Man_2_(2023_video_game)#:~:text=Release-,Marvel's%20Spider%2DMan%202%20was%20released%20for%20the%20PlayStation%205,made%20available%20for%20the%20game."
            

        },
        {
            id: 20,
            Title: "Doom The Dark Ages",
            Rating: "★★★★★",
            Description: "Released in May 15, 2025.",
            img:"images/doom.jfif",
            link: "https://en.wikipedia.org/wiki/Doom:_The_Dark_Ages#:~:text=Doom%3A%20The%20Dark%20Ages%20will,Ages%20until%20May%2021%2C%202025."
            

        }








    ];
    



```
- An array of game objects, each with a title, rating, description, image, and link.
- Used as the main data source for rendering/searching.

---

### 3. Rendering Games

```js
function renderGames(Games){
    ...
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
```
- Clears previous search results.
- If no games match, shows a "No Games found" message.
- For each game, creates a card with its details and a "Details" button linking to more info.
- Adds all cards to the grid.

---

### 4. Search Functionality

```js
function handleSearchInput() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase();

    // Filters games by title or description containing the search text
    const filteredGames = Games.filter(game =>
        game.Title.toLowerCase().includes(query) ||
        game.Description.toLowerCase().includes(query)
    );
    renderGames(filteredGames);
}
document.getElementById('searchInput').addEventListener('input', handleSearchInput);
```
- As the user types in the search box, the list of games is filtered in real time.
- Only games whose title or description matches the search are displayed.

---

### 5. Theme Toggle (Light/Dark Mode)

```js
const themeToggle = document.getElementById('themeToggle');
// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // Save preference
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
// Keyboard shortcut: Shift + D to toggle theme
document.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.key === 'D') {
        themeToggle.click();
    }
});
```
- Clicking the "Toggle Theme" button switches between light and dark mode, and remembers the choice for next time.
- Shift+D keyboard shortcut also toggles theme.

---

### 6. Session Timer

```js







function startTimer() {
    console.log('Starting session timer'); // Debug log

    // Check if timer already exists to prevent duplicates
    if (document.getElementById("sessionTimer")) {
        console.log('Timer already exists, not creating a new one');
        return;
    }

    //initialize seccion timer at 0 seconds
    let sessionSeconds = 0;


        //create timer display element 
const timerElement = document.createElement('div');
    timerElement.id = "sessionTimer";
    timerElement.style.marginTop = "20px";
    timerElement.style.color = "var(--primary-color)";
    timerElement.style.fontSize = "18px";
    timerElement.style.textAlign = "center";
    document.body.appendChild(timerElement);


        //update timer display initially
    updateTimerDisplay(timerElement, sessionSeconds);


         //update timer every second 
    let timerInterval = setInterval(() => {
        sessionSeconds++;
        updateTimerDisplay(timerElement, sessionSeconds);

        //store current time in sessionStrorage (automatically cleared when tab closes)
        sessionStorage.setItem('timeOnPage', sessionSeconds.toString());


    //trigger special message for long seccion (over 5 minutes)

        if (sessionSeconds === 300) { // 5 minutes
            showLongSessionMessage();
        }
    }, 1000);


        //when page is about to  unload stop the timer 

    window.addEventListener('beforeunload', () => {
        console.log('Page unloading, stopping timer'); // Debug log
        clearInterval(timerInterval);
    });
}


//helper fuction to format and display time 

function updateTimerDisplay(element, totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let timeText = `⏲️ Time on page: `;

    if (hours > 0) {
        timeText += `${hours}h `;
    }
    if (hours > 0 || minutes > 0) {
        timeText += `${minutes}m `;
    }

    timeText += `${seconds}s`;
    element.textContent = timeText;
}

//show message for users spending a long time on the site 

function showLongSessionMessage() {
    console.log('Showing long session message (5 minutes)'); // Debug log



        //check if message already exist to prevent duplicates
    if (document.getElementById('longSessionMessage')) {
        console.log('Long session message already exists');
        return;
    }

    const messageDiv = document.createElement('div');
    messageDiv.id = "longSessionMessage";
    messageDiv.style.padding = '10px';
    messageDiv.style.margin = '20px 0';
    messageDiv.style.backgroundColor = 'var(--primary-color)';
    messageDiv.style.color = 'var(--btn-text)';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.textAlign = 'center';
    messageDiv.innerHTML = `
    <p> 🎮 You've have been on Game Searcher for 5 minutes buddy touch grass! Thanks for your interest in Game Searcher. </p>
    <button id="dismissMessage" style="margin-top: 10px; padding: 5px 10px;
    background-color: var(--primary-color); color: var(--btn-text);
    border: none; border-radius: 4px; cursor: pointer;">
    Dismiss
    </button>
    `;

    //check if timer element exist 
    const timerElement = document.getElementById('sessionTimer');
    if (timerElement) {
        document.body.insertBefore(messageDiv, timerElement);
    } else {
        document.body.appendChild(messageDiv);
    }

    //add event listener to dimiss button 

    const dismissButton = document.getElementById('dismissMessage');
    if (dismissButton) {
        dismissButton.addEventListener('click', function () {
            const message = document.getElementById('longSessionMessage');
            if (message) {
                message.remove();
            }
        });
    }
}

startTimer();














```
- Shows how long the user has been on the page, updates each second.
- After 5 minutes, displays a friendly message to take a break ("touch grass!").
- The session timer and message are managed with helper functions:
  - `updateTimerDisplay` formats the timer.
  - `showLongSessionMessage` displays the break message and a dismiss button.

---

## File Organization

Assuming the code is split as referenced in the `<script src="..."></script>` tags:

- `greet.js` - User greeting and cookie logic
- `game.js`  - Game data array
- `render.js` - Rendering games to the page
- `search.js` - Search/filter logic
- `theme.js`  - Theme toggle and persistence
- `timer.js`  - Session timer and break reminder

---

