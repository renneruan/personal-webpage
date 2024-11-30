// window.addEventListener('scroll', function () {
//     const navbar = document.querySelector('.navbar');
//     const scrollPosition = window.scrollY;

//     if (scrollPosition > 150) {
//         navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)'; 
//     } else {
//         navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'; 
//     }
// });

document.querySelector('.experience-btn').addEventListener('click', function () {
    const dropdown = document.querySelector('.dropdown-text');
    dropdown.classList.toggle('show'); // Add or remove the 'show' class
  });
  