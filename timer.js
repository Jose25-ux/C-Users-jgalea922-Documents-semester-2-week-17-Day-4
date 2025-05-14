






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













