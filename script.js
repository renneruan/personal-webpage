// window.addEventListener('scroll', function () {
//     const navbar = document.querySelector('.navbar');
//     const scrollPosition = window.scrollY;

//     if (scrollPosition > 150) {
//         navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)'; 
//     } else {
//         navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'; 
//     }
// });

// document.querySelector('.experience-btn').addEventListener('click', function () {
//     const dropdown = document.querySelector('.dropdown-text');
//     dropdown.classList.toggle('show'); // Add or remove the 'show' class
//   });
  
// let prevScrollpos = window.scrollY;
// window.onscroll = function () {
//   let currentScrollPos = window.scrollY;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector("nav").style.top = "0"; // Show navbar
//   } else {
//     document.querySelector("nav").style.top = "-70px"; // Hide navbar
//   }
//   prevScrollpos = currentScrollPos;
// };