//secondly a view is invoked, depending on the component requested.
var views = {
	home : function(page_view, data, params){
		var page_view = page_view || 'home';
	    //var api_stub = 'posts/index.json'; not needed. not sure, but I think this involves requesting content externally.
	    var api_stub = '';

	    //invoke a request to the API.
	    utils.request(
	    	page_view,
	        api_stub,
	        'show_all_posts',
	        'show_all_posts_error'
	    );
	},

	code: function (data, params) {
		var api_stub = '';
	}
};