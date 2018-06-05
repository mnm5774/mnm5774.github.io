/* 5-29-18: Now all of my code is going to be Javascript (for the most part). So
I will not have text-html being inserted, Javascript will create the elements
as the application is loaded and requested.

So the purpose of this file, for now, will be handling the root event listeners,
and handling the URL requests as I learn more about that.
*/

// href attribute will change the hash, firing the event and allowing direct
// navigation. we can't use pathname right now because github's server is
// handling that part of the navigation. # hash shows it is on the same page,
// so we can use that event to fire page-views, for multiple pages using
// the same html file.
window.addEventListener ('hashchange', utils.router (location.hash);

/*
// For sticky navbar.
// Get the elements, using my library to create an object.
var navbar = MM (".nav-container");
navbar.getElement ();
var hero = MM (".hero-container");
hero.getElement ();


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
*/
