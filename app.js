/* So I was not able to dynamically render a script tag and it work seamlessly.
I'm thinking that having that ability will be helpful later on, but for general
purpose js I think I need to put my code in a single file, so I don't mistakenly
collide with other code. Maybe if I wrap things in a function expression I won't
have to worry about collision. Will have to give more thought into this if
I end up having a ton of code here later on.
Might be able to solve the above by having an onload function in the HTML template. */


// For sticky navbar.
// Get the navbar, using my library to create an object.
var navbar = MM (".nav-container");

// Get the offset position of the navbar from top of page.
var sticky = navbar.element.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position.
// Remove "sticky" when you leave the scroll position.
function navStuck () {
  if (window.pageYOffset >= sticky) {
    navbar.addClass ("sticky")
  } else {
    navbar.removeClass ("sticky");
  }
};

// When the user scrolls the page, execute function to determine sticky.
window.addEventListener ('scroll', navStuck);
// When the page resizes, reset the sticky variable to be correct.
window.addEventListener ('resize', function () {sticky = navbar.element.offsetTop});