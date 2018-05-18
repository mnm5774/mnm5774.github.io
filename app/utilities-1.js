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


var version = 1.0;

// These methods provide the functionality for my SPA.

/* The reason for console logging each method is to help me better understand the
flow of what is happening, and to visualize the process. I'm probably going to
restructure most of this at some point.
*/

/* Another note, I will probably want to construct my own custom 404 page, and use
that for the default page/view/controller to invoke as we go. That way if there's
something wrong in the routing, and invocation of the API, we will know. Probably
will need to include a link back to the home page, and maybe need to throw an error
in the console for reference in where the error occurred in the flow of things.
*/

var utils = (function () {
  var extract_params = function (params_string) {

    var params = {};
    var raw_params = params_string.split ('&');
        
    var j = 0;
    for (var i = raw_params.length - 1; i >= 0; i--) {
      var url_params = raw_params [i].split ('=');

      if (url_params.length == 2) {
        params [url_params [0]] = url_params [1];
      }
      else if (url_params.length == 1) {
        params [j] = url_params [0];
        j += 1;
      }
      else {
       // param not readable. pass.
      }
    };

    //console.log ('post-parameters:  ' + params);
    return params;
  };

    // invoked on page load.
    return {
        router: function (route, data) {
        	// this sets the default route, when no route is passed.
            route = route || location.hash.slice(1) || 'home';

            // cookies?
            var temp = route.split ('?');
            var route_split = temp.length;
            var function_to_invoke = temp [0] || false;
            // this may be only for handling multiple routes.
            if (route_split > 1) {
                var params  = extract_params (temp [1]);
            }

            // console.log (function_to_invoke); output: 'home'
            // fire away... /invoke the view with any data that was passed to the
            // router, along with extra parameters if present.
            //console.log (function_to_invoke)
            if (function_to_invoke) {
                views [function_to_invoke] (function_to_invoke, data, params);
            }
        },

        render: function (element_id, content, convert_markdown) {
            convert_markdown = convert_markdown || false;
           	//console.log ('the container content is being inserted into : ' + element_id);

            if (!convert_markdown) {
                document.getElementById (element_id).append (content);
            }
            // not sure yet what convert_markdown is used for, but we pass it in the
            // controller. showdown is not defined as well?
            else {
                var converter = new showdown.Converter ();
                document.getElementById (element_id).innerHTML = converter.makeHtml (content);   
            }
            // this is causing some bugginess right now.
            // document.getElementById (element_id).scrollIntoView ();
        },

        // This function is for illustration as there is really no need for ajax here...
        request: function (controller_to_invoke, api_stub, success_callback, error_callback,
                          callback_params) {
        	// these are not important, or used currently. Once again, I think this is for
          // external requests.
        	var controller_to_invoke = controller_to_invoke || 'home';
            api_stub = api_stub || '';
            callback_params = callback_params || {};
            //console.log ('successfully invoked request api_stub:  ' + api_stub);

            //i'm wondering if this is for a loading spinner.
            //controllers.show_loader('page-content');

            //controllers.home ('page-content');

            /* /this is the part that I don't fully understand. How does the request know which
            controller to invoke, depending on the component requested? controllers.showloader
            was the original invocation. I think I'm going to try and pass the page as an
            argument on down to determine the correct controller. Kind of like how we invoke
            the view.
            */

			      // ok here we go. - this works.
			      controllers [controller_to_invoke] ();

            //external server request? not currently being used.
            //var url = config.api_server + api_stub;

            var x = new XMLHttpRequest ();
            x.onreadystatechange = function () {
                if (x.readyState == XMLHttpRequest.DONE) {
                    if (x.status == 200) {
                        controllers [success_callback] (
                            x.responseText, 
                            callback_params
                        );
                        console.log ('successful request')
                    }
                    else {
                        controllers [error_callback] (
                            x.status, 
                            callback_params
                        );
                        console.log ('failure at request');
                    }
                }
            };
            // other methods can be implemented here
            // x.open ('GET', url, true);
            // x.send ();
        },

        get_link: function (post) {
            var link = '#post?' + post.post;
            if (post.external_link) {
                link = post.external_link;
            }
            return link;
        }
    }
})();


