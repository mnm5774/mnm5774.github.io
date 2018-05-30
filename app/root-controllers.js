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

// Variables for root container elements. This may change. Also, calling render in
// the controller may cause problems if we call other controllers as child elements.
// rather than returning the child, it will insert it. I think I will have to
// separate components based on their function, child elements or standalone
// components that are inserted.
var heroId = 'hero';
var bodyId = 'body';

var controllers = {
	defaultHero: function () {
		var content = page1Templates.hero ();
		
		var containerE = MM (content.container);
		var titleE = MM (content.title);
		var descriptionE = MM (content.description);
		
		titleE.append (content.title.text);
		descriptionE.append (content.description.text);
		
		containerE.append (titleE, descriptionE);
		
		utils.render (heroId, containerE);
	},
	
	
	// For now, request the default hero.
	homeHero: function () {
		utils.request ('defaultHero')
	},
	
	homeContent: function () {
		var content = page1Templates.home ();
		
		/* So here, if I was pulling paragraphs from a database, say in a blog,
		I would request them, then append each one as the styles are added.
		Everything applied here is applied to all my p tag objects.
		*/
		
		var paragraphs = [content.introP1, content.introP2, content.about, content.filler];

		// Add styles before creating the paragraph elements.
		paragraphs.forEach (function (p) {
				p.styles = {
					fontSize: `20px`,
					padding: `10px 0px 10px 0px`
				};
				console.log (p);
			}
		);
		
		var containerE = MM (content.container);
		var headerE = MM (content.header);
			headerE.append (content.header.text);
		var introP1E = MM (content.introP1);
			introP1E.append (content.introP1.text);
		var introP2E = MM (content.introP2);
			introP2E.append (content.introP2.text);
		var aboutE = MM (content.about);
			aboutE.append (content.about.text);
		var fillerE = MM (content.filler);
			fillerE.append (content.filler.text);
		
		containerE.append (headerE, introP1E, introP2E, aboutE, fillerE);
		
		utils.render (bodyId, containerE);
	},
	
	

	
	
	navbar: function (data, params) {
		//console.log (data);

		var desktop = navbarTemplates.nav_desktop ();
		var mobile = navbarTemplates.nav_mobile ();
		var finalContent = desktop + mobile;

		//console.log ('navbar is grabbed, and ready to invoke render!');
		utils.render ('navbar', finalContent);
	},

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
