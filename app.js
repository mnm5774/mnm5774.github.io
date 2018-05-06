/* So I was not able to dynamically render a script tag and it work seamlessly.
I'm thinking that having that ability will be helpful later on, but for general
purpose js I think I need to put my code in a single file, so I don't mistakenly
collide with other code. Maybe if I wrap things in a function expression I won't
have to worry about collision. Will have to give more thought into this if
I end up having a ton of code here later on.
Might be able to solve the above by having an onload function in the HTML template. */


// For sticky navbar.
// Get the elements, using my library to create an object.
var navbar = MM (".nav-container").getElement ();
var hero = MM (".hero-container");


// Add the sticky class to the navbar when you reach its scroll position.
// Remove "sticky" when you leave the scroll position.
function checkNav () {
  // Create the variables needed to determine to add sticky class.
  var navStuckAt = window.scrollY > hero.element.offsetHeight;

  if (navStuckAt) {
    navbar.addClass ("sticky")
  } else {
    navbar.removeClass ("sticky");
  }
};


// When the user scrolls the page, execute function to determine sticky.
// I may need to add a debounce later to this, due to performance issues.
window.addEventListener ('scroll', checkNav);