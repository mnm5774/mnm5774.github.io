// Get the navbar, using my library to create an object.
var navbar = MM(".nav-container");

// Get the offset position of the navbar
var sticky = navbar.element.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navStuck() {
  if (window.pageYOffset >= sticky) {
    navbar.addClass("sticky")
  } else {
    navbar.removeClass("sticky");
  }
}

// When the user scrolls the page, execute function to determine sticky.
window.addEventListener ('scroll', navStuck);
// When the page resizes, reset the sticky variable to be correct.
window.addEventListener ('resize', function () {sticky = navbar.element.offsetTop});