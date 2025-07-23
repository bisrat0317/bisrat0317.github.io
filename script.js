function setupThemeToggle() {
  const themeSwitch = document.getElementById('theme-switch');
  if (themeSwitch) {
    themeSwitch.addEventListener('change', function () {
      document.body.classList.toggle('dark-theme');
      document.body.classList.toggle('light-theme');
    });
  }
}

window.addEventListener('DOMContentLoaded', setupThemeToggle);

// If header is loaded dynamically, call setupThemeToggle after loading:
const headerPlaceholder = document.getElementById('header-placeholder');
if (headerPlaceholder) {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      headerPlaceholder.innerHTML = data;
      setupThemeToggle();
    });
}


function setupThemeToggle() {
  const themeSwitch = document.getElementById('theme-switch');
  if (!themeSwitch) return;

  // Load saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    themeSwitch.checked = true;
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    themeSwitch.checked = false;
  }

  // Listen for toggle changes
  themeSwitch.addEventListener('change', function () {
    const newTheme = themeSwitch.checked ? 'dark' : 'light';
    if (newTheme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('theme', newTheme);
  });
}
