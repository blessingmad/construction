//For search input
let search_button = document.getElementById("search-button");
let search_input = document.getElementById("search-input");

search_button.addEventListener("click", function () {
  if (search_input.style.display === "none") {
    search_input.style.display = "block";
  } else {
    search_input.style.display = "none";
  }
});

//For mobile navigation bar
let hambburger_btn = document.getElementById("hambburger-btn");
let close_btn = document.getElementById("close-button");
let mobile_nav = document.getElementById("mobile-nav");

// This code doesn't work, need to look it up
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    mobile_nav.style.display = "none";
  }
});

hambburger_btn.addEventListener("click", function () {
  mobile_nav.style.width = "100% ";
  mobile_nav.style.display = "block";
});

close_btn.addEventListener("click", function () {
  mobile_nav.style.width = "0 ";
  mobile_nav.style.display = "none";
});
// Auto-update the current year
document.getElementById("year").textContent = new Date().getFullYear();
