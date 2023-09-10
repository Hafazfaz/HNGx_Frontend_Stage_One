// JavaScript code to display the current day of the week and UTC time
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const currentDay = daysOfWeek[today.getUTCDay()];
const currentUTCTime = today.getTime();

// Display current day of the week
const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
dayOfWeekElement.textContent = `Current Day of the Week: ${currentDay}`;

// Display current UTC time
const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
utcTimeElement.textContent = `Current UTC Time (milliseconds): ${currentUTCTime}`;