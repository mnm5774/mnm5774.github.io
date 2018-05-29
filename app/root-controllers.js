// Thirdly, a controller is invoked, which grabs the template,
// and content, and invokes render. Render actually inserts the content.

/* I need to create a flag variable in the render method for either append or innerhtml.
This will determine if the content will be replaced, or added. This is a good example
of why the utilities and components are broken up so much. We can have options, without
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
*/

// Variables for root container elements. This may change.
var heroId = 'hero';

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
	},
	
	

	
	
	navbar: function (data, params) {
		//console.log (data);

		var desktop = navbarTemplates.nav_desktop ();
		var mobile = navbarTemplates.nav_mobile ();
		var finalContent = desktop + mobile;

		//console.log ('navbar is grabbed, and ready to invoke render!');
		utils.render ('navbar', finalContent);
	},

	home: function (data, params) {
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

	  // Get our template for this page. The more I think about it, the more I think
	  // this is where we can grab multiple components for one request. We will see.
	  var page1_home = page1Templates.home ();

	  // Here is where we would probably add the items together to produce a final
	  // content variable, with multiple objects inserted.
	  // var page1_home = fullPage;  + recent_posts;

	  //console.log ('content is grabbed, and ready to invoke render!');
	  // Now actually render the html on the page. First argument is the id of the
		// containing element where the template will be inserted. second argument is
		// the content that will be inserted. This is where my naming convention for
		// the html may be affected. Might need to adjust that.
	  utils.render ('body', page1_home);    

	  // Hero content-invoked after home because content should be priority. Plus
		// this helps with debugging; having them load separately. The reason they
		// are together in this controller, is because I think I will have different
		// heros for different pages later on.
		var heroContent = page1Templates.hero ();

		//console.log ('hero is grabbed, and ready to invoke render!');
		utils.render ('hero', heroContent);
	},

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
