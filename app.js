const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})

 document.addEventListener("DOMContentLoaded", function() {
           const form = document.querySelector("form");
           const toast = document.getElementById("toast");

           form.addEventListener("submit", function(event) {
           event.preventDefault();

           // Show toast (fade in)
           toast.style.visibility = "visible";
           toast.style.opacity = "1";

          // Hide after 3 seconds (fade out)
          setTimeout(() => {
          toast.style.opacity = "0";
          setTimeout(() => { toast.style.visibility = "hidden"; }, 500);
          }, 3000);

          form.reset(); // optional: clear form
          });
          });