# Game Searcher - CSS and JavaScript Code Explanation

This README explains all the **CSS** and **JavaScript** code for the "Game Searcher" application. The application lets users search a list of video games, toggle between light and dark themes, and tracks how long the user has stayed on the page.

---

## CSS Explanation

The CSS code is responsible for the look and feel of the application:

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
const Games = [ ... ];
```
- An array of game objects, each with a title, rating, description, image, and link.
- Used as the main data source for rendering/searching.

---

### 3. Rendering Games

```js
function renderGames(Games){
    ...
    // Clear previous results
    // If no games, show "No Games found"
    // For each game, create a card (div), add image, title, rating, description, link
    // Add all game cards to the page at once
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
    // Don't start another timer if one exists
    // Starts at 0 seconds, updates every second
    // Shows "Time on page: Xm Ys" at the bottom of the page
    // Stores time in sessionStorage so it resets when tab is closed
    // After 5 minutes, shows a message encouraging a break
    // Message can be dismissed with a button
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

## Summary

- **CSS** handles layout, colors, transitions, and responsiveness.
- **JavaScript** manages user interaction:
  - Welcoming users with cookies
  - Searching/filtering games
  - Toggling light/dark themes (remembered for next visit)
  - Tracking how long users spend on the page, with a break reminder

All logic is designed to make the game search experience interactive and user-friendly, encouraging users to take breaks and giving them a customizable UI.

---
