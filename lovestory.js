const startDate = new Date("2026-04-13T00:00:00");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCounter() {
  const now = new Date();
  const difference = now - startDate;

  if (difference < 0) {
    daysElement.textContent = 0;
    hoursElement.textContent = 0;
    minutesElement.textContent = 0;
    secondsElement.textContent = 0;
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;

  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);