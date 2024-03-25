// Dark Mode
const darkModeSwitch = document.getElementById('darkModeSwitch');
const body = document.body;
darkModeSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});
function toggleDarkMode() {
    var darkModeSwitch = document.getElementById('darkModeSwitch');
    document.body.classList.toggle('dark-mode', darkModeSwitch.checked);
  }
// Dark Mode End

