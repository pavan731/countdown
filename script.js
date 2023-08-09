// Set the target date and time for the video launch today at 6 PM
const targetDate = new Date();
targetDate.setHours(18); // 6 PM
targetDate.setMinutes(0); // 00 minutes
targetDate.setSeconds(0); // 00 seconds
targetDate.setMilliseconds(0); // 000 milliseconds

// Update the countdown every second
const countdown = setInterval(function() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the element with id "countdown"
  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (timeRemaining <= 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = 'YouTube video launching now!';
  }
}, 1000);
