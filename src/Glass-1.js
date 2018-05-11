/* The point of this library was originally for ease of manipulation of the DOM.
I believe this will morph once I move to building my own single-page application.
Whether I use a framework or not, what I want is to understand the code itself,
and how it interacts with everything around it. The methods applied here can be called
by any objects created here, minimizing my code, and providing for a central place to
write new code. If I write my own framework for the front-end, the functionality
will most-likely reside here, being called and used by individual components and
modules throughout my file-structure. For the back-end, I should probably section
it off by itself for modularity, and understanding how things work, especially
if I use a Model-View-View-Model type process of rendering.
*/

/* 4-5-18 : The purpose of things has changed from the above comment a bit, due
to my better understanding of a Single Page Application. The core purpose of this
will continue to be manipulation of the DOM, on a high level, and converting actual
DOM elements to a JS object. But the more foundational aspects (like dynamic rendering)
will be handled by my utils library. Separating this code will keep things cleaner,
I think, and easier to understand the flow of my application. This may not be advised in
a real-world situation. I don't know enough to tell for sure. This should help me
understand better how to go about building a large-scale application though, even with
another object-oriented language.

Another note: a second purpose for this library will be for a central place of storage
of code I learn and pick up as I do more study, and hands-on education.
*/

//My function expression which allows for invocation, but not exposure to collison.
(function (global) {
	"use strict";


	//The main function that will be invoked upon calling the library, which will create
	//a new Glass.init-type object. The point of the arguments is to have properties we
	//can use to get the element from the DOM.

	/* 4-11-18: The above comment on using arguments will probably change, as I become
	more focused on the intent and purpose for having this library.
	*/

	/* 5-10-18: Similar to how React has a create-element function, this library now
	has a newElement function. I think the main purpose for this library will be to create
	the elements that will be used by my template JS (in the SPA functionality), prior
	to the dynamic inserting and rendering of the content. This helps minimize the amount
	of code written, and helps me focus on writing and understanding Javascript better,
	instead of spending time writing markup. It also allows for easy invocation of
	the library, for a new element, for writing code that is responsive to client
	interaction.

	Another note: by having everything centralized on JS (a programming language, as
	opposed to a markup language), this allows for ease of integration with external sources,
	such as databases, or APIs. Also provides seamless access to external sources. For
	instance: if we have a list of items or data that is retreived externally upon client
	request, and the connection is poor; the site doesn't attempt to refresh upon the request,
	resulting in error, or missing elements. We could just have a default error message,
	dynamically loading upon failure of the request, without dropping all of the content
	already previously loaded. This allows the user to continue to browse site content,
	and allows us to continue to request the desired content, without the client losing
	the content. Also, hopefully, avoiding the dreaded loading spinner.
	*/

	// 5-10-18: I need to change the arguments here, and some of the outer structure,
	// as these kinds of things will be handled internally by the functions and objects.
	var version = 1.00;
	var Glass = function (selector, id, innerHTML, name, value, style) {
			return new Glass.init (selector, id, innerHTML, name, value, style);
		};



	/* Note that all of the variables declared here are NOT available in all of the objects
	created here, but are available to all of the methods available to the objects, through
	the prototype. This happens because when the execution context is created for this whole
	function expression, a lexical environment is also created. The scope chain and the
	variables declared within this environment are preserved in memory after the execution
	context has been popped off, due to wrappers called closures. The objects below are only
	exposed internally, and can only be called internally.
	*/

	/* 4-11-18: I have not found a purpose for having these object literals yet. My attempts
	at using them have been unsuccessful. This could be due to poor structure on my part.
	Also, I'm still not real clear on my purpose for having this entire library.
	*/

	// 5-10-18: As we call the newElement function, I think we should have default styles
	// here for new elements. As arguments are provided for new and different styles, these
	// should be overwritten with the desired styles, and properties for the elements.
	var navbarStyles = {
		backgroundColor: "blue",
		color: "red"
	};



	// The prototype of all of the objects created using Glass. Here is where we 
	// will put all the methods we want all objects to have access to, in order to save
	// memory. These objects are exposed through the prototype.
	Glass.prototype = {

		// These methods will return the actual element in the DOM. Then we can edit them
		// from there. These methods write the actual element to this.element. Once one
		// of these is used, all we need to get the present DOM element is use this.element.

		/* 5-10-18: When creating a new element, we need to apply this method so that
		the element is available to the object after it is inserted. These will change
		once we change the arguments passed initially to the library.
		*/
		getElement: function () {

			// Had to remove logic for determining whether we already had a class or not.
			// If statement was not allowing to continue.
			if (this.class != 'input class') {return this.byClass ()}
			else if (this.id != 'input id') {return this.byId ()}
			else {throw 'no CSS selectors have been provided for this object'};
		},

			byClass: function () {
				this.element = document.querySelector (this.class);
				console.log (this.element);
				return this.element;
			},

			byId: function () {
				this.element = document.getElementById (this.id);
				console.log (this.element);
				return this.element;
			},


		// Returns an array of objects; one for each element with the class passed.
		multiple: function (selector) {
			var arr = [];
			var nodeList = document.querySelectorAll(selector);
			var elements = Array.from (nodeList);

			elements.map (function (index) {
				var obj = Glass (index.className, index.id);
				obj.element = index;
				arr.push (obj);
			});
			return arr;
		},



		// Here are my chainable methods. They are reusable, and used by the more complex
		// functions. The purpose of these more basic functions is to improve readability
		// of the more complex code.
		addClass: function (newClass) {
			var element = this.element;
			element.classList.add (newClass);
			return this;
		},

		removeClass: function (className) {
			var element = this.element;
			element.classList.remove (className);
			return this;
		},


		addEvent: function (event, func) {
			var element = this.element;
			element.addEventListener (event, func);
			return this;
		},



		// Main function used for creating the elements in my SPA.
		// Note: children is mainly just a placeholder. If we want nested elements,
		// just call newElement as an argument to create child tags.
		// For now we can only add one property/value, and one style. Will have to add
		// funcitonality for an array being fed so we can handle large sets of code.
		newElement: function (type,
				// properties = [], propVals = [],
				styleProps = [], styleVals = [],
				children = []) {

			// trying this to cut down on code. 'this' refers to the object that invokes
			// the method.
			var properties = this.properties;
			var propVals = this.propVals;
			console.log (this);

			// create element.
			var parent = document.createElement (type);

			// add properties.
			function addProps (properties, propVals) {
				properties.forEach (function (prop) {
					var index = properties.indexOf (prop);
					var value = propVals [index];

					parent.setAttribute (prop, value);
				});
			};

			// add styles. --not working right now...
			function addStyles (styleProps, styleVals) {
				styleProps.forEach (function (prop) {
					var index = styleProps.indexOf (prop);
					var value = styleVals [index];

					parent.style.prop = value;
				});
			};

			// add child HTML.
			function addChildren (children) {
				children.forEach (function (child) {
					parent.appendChild (child);
				});
			};


			// If these things exist, add them to the element. Still trying to make this work.
			// Note: innerHTML does not insert DOM nodes, just strings. AppendChild is desirable
			// if we have multiple children.
			if (properties [0]) {
				addProps (properties, propVals);}

			if (styleProps [0]) {
				addStyles (styleProps, styleVals);}

			if (typeof (children) === 'Array') {
				addChildren (children);}
				else {parent.innerHTML = children};


			return parent;
			
		}

	};



	// My function constructor. These properties are applied to every object created
	// by using this function. The purpose of this object we are creating is to edit
	// attributes of an html element. So here we are creating an object with the 
	// attributes we want, and the values we want. Then, we will use the methods
	// in the prototype to edit them. Maybe we can use the default variables and
	// properties to have some default values to use and set to.
	var Init = Glass.init = function (selector, id, innerHTML, name, value, style) {

		// Anchor this keyword so we don't lose the original object.
		console.clear ();
		console.log (this);
		var that = this;

		that.class = selector || 'input class',
		that.id = id || 'input id',
		that.innerHTML = innerHTML || 'input text',
		that.name = name || 'input name',
		that.value = value || 'input value',
		that.style = style || 'input path to style',

		// Container for writing actual DOM element, for ease of access.
		that.element = '';
		// Go ahead and write element, so we don't have to call this later.
		// Taking this out, so we can create an object, then use it to create
		// an element.
		// that.getElement ();

		return this;
	};

	// This sets the prototype to the same as Glass. Makes for clean code,
	// and you don't have to use the new keyword in order to get a new
	// object back.
	Glass.init.prototype = Glass.prototype;

	// This sets aliases for calling Glass. Allows for easy access externally.
	global.Glass = global.MM = Glass;

// I'm wondering if we could add arguments to be passed immediately here,
// to perform actions on page load.
}(window));