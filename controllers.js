//thirdly, a controller is invoked, which grabs the template, and content, and invokes render.
var controllers = {
	home : function(data, params){
		console.log (data);

		//this looks like more of inserting the external data requested into our page.
		//this will probably be useful later when dealing with a db or external API.
	    /* var all_posts = JSON.parse(data);

	    var posts_to_show = 3;
	    var template_context = [];
	    for (var i = 0; i < posts_to_show; i++){
	        var post = all_posts[i];
	        var item = {
	            'link': '#post?'+post.post,
	            'title': post.post.replace(/-/g, ' '),
	            'snippet': post.snippet,
	            'published_on': post.added_on,
	        };
	        template_context.push(item);
	    } */

	    //get recent posts
	    //var recent_posts = templates.recent_posts(template_context);

	    //get our template for this page. The more I think about it, the more I think
	    //this is where we can grab multiple components for one request. We will see.
	    var fullPage = templates.page_home();

	    //here is where we would probably add the items together to produce a final
	    //content variable, with multiple objects inserted.
	    var final_content = fullPage; // + recent_posts;
	    console.log ('content is grabbed, and ready to invoke render!');

	    //now actually render the html on the page. first argument is the id of the containing element
	    //where the template will be inserted. second argument is the content that will be inserted.
	    //this is where my naming convention for the html may be affected. Might need to adjust that.
	    utils.render(
	        'body',
	        final_content
	    );    
	}
}