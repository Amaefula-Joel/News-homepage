const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const backOpacity = document.querySelector(".back-opacity");

openNav.addEventListener("click", function () {
   backOpacity.classList.add("show"); 
});

closeNav.addEventListener("click", function () {
   backOpacity.classList.remove("show"); 
});