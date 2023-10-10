const settingsMenu = document.querySelector('.user-setting-menu');
const darkButton = document.getElementById('dark-button');

function userProfileMenu() {
  settingsMenu.classList.toggle('user-setting-menu-height');
}

darkButton.onclick = function() {
  darkButton.classList.toggle('dark-button-on');
  document.body.classList.toggle('dark-theme');

  // Corrected the logic to store the theme in localStorage
  if (localStorage.getItem('theme') === 'light') {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Check for the stored theme in localStorage on page load
if (localStorage.getItem('theme') === 'dark') {
  darkButton.classList.add('dark-button-on');
  document.body.classList.add('dark-theme');
} else {
  darkButton.classList.remove('dark-button-on');
  document.body.classList.remove('dark-theme');
}

// Add an event listener to the settings menu element
settingsMenu.addEventListener('click', userProfileMenu);















