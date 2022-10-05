const displaySeconds = document.querySelector('#seconds');
const displayMinutes = document.querySelector('#minutes');
const displayHours = document.querySelector('#hours');
const displayDays = document.querySelector('#days');

function start() {
  setTimeout(() => {
    let seconds = Number(displaySeconds.textContent);

    if (seconds == 0) {
      seconds = 60;

      let minutes = Number(displayMinutes.textContent);

      if (minutes == 0) {
        minutes = 60;

        let hours = Number(displayHours.textContent);

        if (hours == 0) {
          hours = 24;

          let days = Number(displayDays.textContent);

          if (days == 0) {
            return;
          }
          days--;
          displayDays.textContent = String(days).padStart(2, '0');
        }

        hours--;
        displayHours.textContent = String(hours).padStart(2, '0');
      }

      minutes--;

      displayMinutes.textContent = String(minutes).padStart(2, '0');
    }
    seconds--;
    displaySeconds.textContent = String(seconds).padStart(2, '0');
    start();
  }, 1000);
}

start();
