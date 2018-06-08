/* I originally intended to have one place for storage of my code, located in
my Glass library. After learning about Single Page Applications I think it might
be better to separate my JS that is my library, and the core functionality that
dynamically renders the content (my SPA utilities). Especially since I've been
able to get vanilla JS to accomplish this. From what I can tell, each component
will need it's own controller and view, so those will be in the same location
for now. The methods located here are the methods that will be used by all of
those controllers and views.

I'm not sure yet, but I think this may be my actual API, due to the fact that
this is a central point where the data, templates, and requests are all routed
through. For that reason, if I need to connect a database, or other external
sources of core content this should be where that happens. The code here will
probably need to be restructured quite often in the future, in order to accomodate
some aspects of larger sites (like a database to handle authentication) which I may
incorporate later to learn and understand why larger sites do things the way they do.
*/


/* My structure for these utilities is different from Glass because I'm not interested
in creating JS objects at this point, and I also don't want to hide these methods from
the global object yet. I'm not going to wrap the entire thing in a function expression
because I want these methods to be accessed by the controllers and views easily. So for
now this will just be a library of code sitting on the global object, being used as the
backbone for rendering content. As I get a better understanding of my purpose for Glass,
and understand how my SPA should be set up, I may need to change some of these
principles.
*/

/* 6-5-18: High overview: First, the router is invoked, which determines whether to invoke
a page view, which invokes a request, or go straight to the controller through the request.
Here is where we need to parse the URL, and return the correct page view, on the page-load.

The HTTP request is the initial point of contact between the client and the server. Because
I'm currently hosting this on github, I don't have to worry about this. Github handles
the request and defaults to loading my index.html file. So I want to invoke router on load
of that page. If I setup a node.js server later, I will want to understand this more,
(maybe invoke the router on the request, instead of load of a file),so I can customize and
determine how the http request is handled.




*/


var version = 1.0;

// These methods provide the functionality for my SPA.

/* Another note, I will probably want to construct my own custom 404 page, and use
that for the default page/view/controller to invoke as we go. That way if there's
something wrong in the routing, and invocation of the API, we will know. Probably
will need to include a link back to the home page, and maybe need to throw an error
in the console for reference in where the error occurred in the flow of things.
*/

var utils = (function () {
	// Invoked on page load.
	return {
		
		
	// First function invoke. universally, how the front-end contacts the back-end.
  	router: function (route, data) {
    	// This sets the default route, when no route is passed.
			// When no argument is passed, look for the path name in the URL.
    	route = route || location.pathname || '/404';
			
			var requestedView = route;
		if (requestedView === `/`) {requestedView = `home`};
		
		
		if (!views [requestedView]) {console.log ('404-not found! sorry!')};
			
			// Invoke the view requested. I removed a lot of code here. Don't
			// have a use for it now, but I may need to look it up later.
			console.log ('router ' + requestedView);
			views [requestedView] ();
		},
	    
		
		// Call requests for controllers from the page-view. The controller will determine
		// what content will be inserted where on the page.
		// Originally, the api requests were being handled here. I may need to rethink this later,
		// depending on how things should be done with my structure. doing this in controllers
		// for now.
		request: function (controller_to_invoke, api_stub, success_callback, error_callback,
                          callback_params) {
			      controllers [controller_to_invoke] ();
			console.log ('request ' + controller_to_invoke);
        },

	    // final request, actually rendering the new content on the page.
	    // here is where we determine where the content will be inserted.
		// I also need to determine if we are replacing content, or just
		// inserting new content.
        render: function (container, content, replace) {
		// in the futuer we can use .prepend to insert a child at beginning of the container.
		replace = replace || false;
		
		// for now we only replace one element with the component.
		function replaceContent () {
			var insert = document.querySelector (container);
			insert.replaceChild (content, insert.children [0]);
		};
		
		function appendContent () {
			var insert = document.querySelector (container);
			insert.append (content);
		};
		
		if (replace) {replaceContent ()}
			else {appendContent ()};
        },
    }
})();


