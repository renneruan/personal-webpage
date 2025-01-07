const navbar = document.getElementById('navbarNav');
const overlay = document.querySelector('.overlay');

navbar.addEventListener('show.bs.collapse', () => {
overlay.classList.add('active');
});

navbar.addEventListener('hide.bs.collapse', () => {
overlay.classList.remove('active');
});


document.addEventListener('click', function (event) {
    const navbar = document.getElementById('navbarNav'); // The collapsible navbar
    const toggleButton = document.querySelector('.navbar-toggler'); // The toggle button
  
    // Check if the navbar is open
    if (navbar.classList.contains('show')) {
      // If the click is outside the navbar and toggle button
      if (!navbar.contains(event.target) && !toggleButton.contains(event.target)) {
        // Manually hide the navbar
        bootstrap.Collapse.getInstance(navbar).hide();
      }
    }

    if (event.target.tagName === 'A' && navbar.contains(event.target)) {
        bootstrap.Collapse.getInstance(navbar).hide();
      }
  });
  