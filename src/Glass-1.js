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

5-11-18: Also, the original structure of this library was inspired by jQuery. This
will change somewhat, as I integrate these methods for use in my SPA.

Note: 5-11-18: From here on, the new comments and structure reflects version 1.10,
created 5-11.
*/

// My function expression which allows for invocation, but not exposure to collison.
(function (global) {
	"use strict";

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

		/* My initial function, invoked when the library is invoked. The arguments are passed
		on to the constructor when creating a new object.
		*/
	var version = 1.10;
	var Glass = function (type, attributes, attVals, styles, styVals) {
		return new Glass.init (type, attributes, attVals, styles, styVals);
		};

/**************************


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

	/* 5-10-18: As we call the newElement function, I think we should have default styles
	here for new elements. As arguments are provided for new and different styles, these
	should be overwritten with the desired styles, and properties for the elements.
	*/

	/* Update 5-11: I want to cut down on the code I have to write in order to call
	newElement. I want to simply be able to invoke the function with a tag-type,
	and have an element to insert. To do that, I need default properties for my
	function to read. Since 'this' refers to the new object, I think that I will
	have to include any extra style/properties in the initial invocation of the
	library. To summarize: We call Glass (); this creates a new JS object, with the
	custom properties fed to it through the arguments; it defaults with properties
	and styles stored here, along with maybe a default div type; calling newElement
	returns the DOM object to be inserted, complete with the variables stored here
	applied to the right attributes on the particular DOM element.
	*/
	var properties = {
	};

	var propVals = {
	};

	var styleProps = {
	};

	var styleVals = {
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

		/* 5-11-18: Update: This function, and the things that rely on it are going to
		change. My newElement function will return a created element. We should probably
		have this setup to be able to query the DOM and get the object (in DOM), without
		having to provide extra code, just by invoking, once newElement is called. I will
		have to think about this, because maybe there is a way to insure I'm getting this
		particular object when calling this function, eliminating the need for unique
		IDs and classes. I will still use these of course, but having that ability
		will be useful for handling and debugging large amounts of information, created
		in-line by the SPA.
		*/
		getElement: function () {
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

/******************************* */

		/*Here are my chainable methods. They are reusable, and used by the more complex
		functions. The purpose of these more basic functions is to improve readability
		of the more complex code.
		*/
		addEvent: function (event, func) {
			var element = this.element;
			element.addEventListener (event, func);
			return this;
		},


		/* My larger functions here are the main ones invoked by my SPA.
		*/
		newElement: function (children) {
			var element = document.createElement (this.type);

			var attributes = this.attributes;
			var attVals = this.attVals;

			var styles = this.styles;
			var styVals = this.styVals;


			/*if (typeof (children) === 'Array') {
				children.forEach (function (child) {
					// var c = document.createElement (child);
					// going to try to add invoking newElement.
					var c = MM (child).newElement ();
					element.append (c);
				});
			} else {element.innerHTML = children};*/

			function addChild (children) {
				children.forEach (function (child) {
					var ce = child.element;
					element.append (ce);
				});
			};

			if (children) {
				addChild (children);
			};


			/* Add attributes, 1-1.
			*/
			attributes.forEach (function (att) {
				var index = att.indexOf (attributes);
				var val = attVals [index];
				element.setAttribute (att, val);
			});


			/* The reason we need to separate the style properties from their values is so
			that if that particular style exists on the element already, we will write over
			the value, rather than creating a duplicate style with a different property.
			*/
			if (!element.style) {
				element.setAttribute ('style', 'default: readytoinputstyle');
			};

			styles.forEach (function (sty) {
				var index = sty.indexOf (styles);
				var val = styVals [index];
				element.style [sty] = val;
			});


			return element;
		}
	};
/**************************************** */

	/* My function constructor. These properties are applied to every object created
	by using this function. The purpose of this object is to associate DOM objects,
	with JS objects. By doing that, we can create, manipulate, and insert them on
	the fly, upon any type of request. This cuts down on the initial code written,
	and also allows for seamless interaction between the client, and external
	resources.
	*/
	var Init = Glass.init = function (type, attributes, attVals, styles, styVals) {

		/* 'this' refers to the new javascript object; created in conjunction with
		my function, and calling it as a constructor using the new keyword. We anchor
		'this' here, to 'that', in order to associate it with a variable, so as not
		to lose 'this' somewhere along the execution stack.
		*/
		var that = this;

		/* Here we take the arguments given and write them to the object. Otherwise,
		we have default values for these options, so that we can simply call the
		library to get a new HTML object.

		In terms of web applications, I think if I had multiple sites, we would have
		different default values setup here.
		*/
		that.type = type || 'div' ||
			'add tag for element, in string format.',

		that.attributes = attributes || [] ||
			'add all attributes in an array. order matches value array.',
		that.attVals = attVals || [] ||
			'add values for attributes in an array. order matches attributes array.',

		that.styles = styles || [] ||
			'add style properties in an array. order matches style values array.',
		that.styVals = styVals || [] ||
			'style values in an array. order matches styles array.',

		that.element = this.newElement ();

		return this.element;
	};

	/* This sets the prototype to the same as Glass. Makes for clean code,
	and you don't have to use the new keyword in order to get a new
	object back.
	*/
	Glass.init.prototype = Glass.prototype;

	// This sets aliases for calling Glass. Allows for easy access externally.
	global.Glass = global.MM = Glass;

}(window));