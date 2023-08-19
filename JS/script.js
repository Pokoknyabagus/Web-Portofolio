const navButton = document.getElementById("hamburgerButton");
const tab = document.getElementById("navbar-menu");


navButton.addEventListener('click', function() {
    if (tab.style.display === "flex") {
        tab.style.transform = "translatex(1000px)"
        tab.style.display = "block";
      } else {
        tab.style.display = "flex";
        tab.style.transform = "translatex(0px)"
      }
    });