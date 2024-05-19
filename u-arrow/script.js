//Hamburger
window.onload = function () { 
  const navIcon = document.querySelector('.nav-icon');
  const offScreenMenu = document.querySelector('.off-screen-menu');
  console.log(offScreenMenu)
  navIcon.addEventListener("click", () => {
    navIcon.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });
} ;

