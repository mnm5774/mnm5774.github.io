// Thirdly, a controller is invoked, which grabs the template,
// and content, and invokes render. Render actually inserts the content.

/* I need to create a flag variable in the render method for either append or innerhtml.
This will determine if the content will be replaced, or added. This is a good example
of why the utilities and components are broken up so much. There are more options, without
complicating. The controller handles internal content, compiles it together, and sends
it to render to be inserted on the page.
*/

/* Something I don't understand here, is if we had external content to request, how
would it be inserted into the content here if that is handled by the view and utils?
I wonder if the JS for that would call render as well, to be inserted specifically.
In that case it would need to happen after this content is inserted. I might want
to come up with a better system for grabbing the containing elements. If I use my library
to create the root containers, I can eliminate the need for classes and ids, in this
context. This would further solidify my structure, with less chance of inserting things
in the wrong place in the future, as I may add elements with conflicting classes and
ids, by accident. Will have to think about this further.
*/

/* 5-29-18: Update from above. Request handles the multiple component requests from the
view. Each controller here handles querying for specific content, internal or external,
then compiling it together and inserting it appropriately. This allows for invocation
of render, passing a single component to be inserted where specified.

So here I control the event listeners, how the elements are appended to each other,
and requesting the content from multiple sources. We could also request other components
here as child elements, without having to create a new view, or invoking router.

I may want to reassess my code here at some point. Some of the functionality for multiple
elements could be added in my library, for access to other controllers as needed.
*/

/* 5-31-18: Update: I have re-assessed, and what I want here is to be able to create objects,
and string the methods I need together, for simple and short code. For that, I need the
methods to already exist in my library. I have done this and tested using the addStyles
method shown below on homeContent. This seems to work well.

So for other common needs, I need to create methods I can chain together in my library,
so that I can use the extra space here to append elements how I need them, along with
fusing them with external content.

I will probably want to separate the controllers that are parent elements (like a page
controller, which invokes render), from the child elements (like the components called
in a page controller, which return the component to be rendered in the parent controller).
The other way we could do this is to handle the rendering in the view, and simply return
each component as the controller is called. I think this method may complicate things,
especially as I build functionality in the views for handling URls, and other routing
tasks. Also, handling that here enables us to build many simple controllers easily,
based on specific requests in the DOM, that just compile what is requested. I think
that will allow us to stick to the initial intent of dynamically rendering only what
is requested, instead of reloading certain elements because of calling a view with
updated parameters.
*/


// Variables for root container elements. This may change. Also, calling render in
// the controller may cause problems if we call other controllers as child elements.
// rather than returning the child, it will insert it. I think I will have to
// separate components based on their function, child elements or standalone
// components that are inserted.
var heroId = `hero`;
var navId = `navbar`;
var bodyId = `body`;

var controllers = {
	defaultHero: function () {
		var content = page1Templates.hero ();
		
		var containerE = MM (content.container).newElement ();
		var titleE = MM (content.title).newElement ();
		var descriptionE = MM (content.description).newElement ();
		
		containerE.append (titleE, descriptionE);
		
		utils.render (heroId, containerE);
	},
	
	
	// For now, request the default hero.
	homeHero: function () {
		utils.request (`defaultHero`)
	},
	
	homeContent: function () {
		/* Here I could create variables containing paths or API calls to external
		content. We would also parse JSON here as needed before insertion.
		*/
		var content = page1Templates.home ();
		
		// The variables here actually get the content, apply styles to paragraphs.
		var containerE = MM (content.container).newElement ();
		var headerE = MM (content.header).newElement ();
		var introP1E = MM (content.introP1).applyStyles (content.pSty).newElement ();
		var introP2E = MM (content.introP2).applyStyles (content.pSty).newElement ();
		var aboutE = MM (content.about).applyStyles (content.pSty).newElement ();
		var fillerE = MM (content.filler).applyStyles (content.pSty).newElement ();
		
		containerE.append (headerE, introP1E, introP2E, aboutE, fillerE);
		
		utils.render (bodyId, containerE);
	},
	
	navbar: function (data, params) {
		var content = navbarTemplates.desktop ();
		
		var containerO = MM (content.container);
		// Here we differentiate between the object and the element, for access
		// to functionality after the element is inserted.
		var containerE = containerO.newElement ();
		//var logoE = MM (content.logo).applyStyles (content.linkSty).newElement ();
		var logoPicE = MM (content.logoPic).newElement ();
		
		containerE.append (logoPicE);
		
		// For large sets of items we can create a for-in loop for an object,
		// to handle the repetition here. I did it this way to provide visibility
		// for now, while I finish determining my structure.
		//var page1E = MM (content.page1).applyStyles (content.linkSty).newElement ();
		//var page2E = MM (content.page2).applyStyles (content.linkSty).newElement ();
		//var page3E = MM (content.page3).applyStyles (content.linkSty).newElement ();
		
		var links = {
			l: content.logo, 1: content.page1, 2: content.page2, 3: content.page3
		};
		
		function handleLinks (obj) {
			for (var link in obj) {
				var o = MM (link).applyStyles (content.linkSty);
				var e = o.newElement ();
				
				e.addEventListener (`mouseover`, function () {
					o.addStyles (content.hoverSty)
				});
			};
		};
						    
		handleLinks (links);
		
		
		// Makes navbar interactive to top of the window.
		function checkNav () {
			var hero = document.getElementById (heroId);
			var navStuckAt = window.scrollY > hero.offsetHeight;
			
			if (navStuckAt) {containerO.addStyles (content.stickySty)}
			else {containerO.removeStyles (content.stickySty)};
		};
		
		window.addEventListener (`scroll`, checkNav);
		
		
		containerE.append (logoE, logoPicE, page1E, page2E, page3E);
		
		utils.render (navId, containerE);
	},
	
	/************************************************************************************************************/

	//home: function (data, params) {
		//console.log (data);

		// this looks like more of inserting the external data requested into our page.
		// this will probably be useful later when dealing with a db or external API.
	    /* var all_posts = JSON.parse (data);
	    var posts_to_show = 3;
	    var template_context = [];
	    for (var i = 0; i < posts_to_show; i++) {
	        var post = all_posts [i];
	        var item = {
	            'link': '#post?'+post.post,
	            'title': post.post.replace (/-/g, ' '),
	            'snippet': post.snippet,
	            'published_on': post.added_on,
	        };
	        template_context.push (item);
	    } */
	    // get recent posts
	    // var recent_posts = templates.recent_posts (template_context);

	code: function (data, params) {
		//console.log (data);

		var js30 = page2Templates.js30 ();
		var finalContent = js30;

		utils.render ('body', finalContent);
	},

	resume: function (data, params) {
		//console.log (data);

		var resume = page3Templates.resume ();
		//console.log (resume);
		var finalContent = resume;

		utils.render ('body', finalContent);
	},

	footer: function (data, params) {
		//console.log (data);

		var footerContent = footerTemplates.footer ();
		var finalContent = footerContent;

		//console.log ('footer is grabbed, and ready to invoke render!');
		utils.render ('footer', finalContent);
	}
};
