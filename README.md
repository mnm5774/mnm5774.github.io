My portfolio-live site.

Example template of how I am creating elements. Not cleaned up yet.

"
/* So the controller should handle the compiling of the content, and calling render.
The template should handle the actual creating of the elements, assigning event
listeners where needed, and I think handling and hiding each of the elements created
as JS objects; which is possible because of my library.

If we modularize each individual item here, and append them in the controller, I think
it will make it simpler to add and use these items in other components, reducing code.
Also, if I decide to handle external content in the controller, it will be simpler to
incorporate it into the new internal content.
*/
var page1Templates = {
  // here's what I want:
  hero: function () {
    // Here's an example of how we would use variables to simplify changing aspects of a webpage.
    
    /* So here we have an object, which is fed as the argument to create a new MM object. MM
    handles the functionality needed to support the object, and changes in these parameters.
    */
    var container = {
      type: `div`,
      attributes: {class: `heroclass`, id: `heroid`},
      styles: {
        display: `grid`,
        justifyContent: `center`,
        border: `7px`,
        borderColor: `darkgoldenrod`,
        borderStyle: `hidden hidden outset hidden`,
        backgroundImage: `url('/photos-highres/stars1.jpg')`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundColor: `#222`,
        minHeight: `36vw`
      }
    };
    
    var title = {
      type: 'h1',
      attributes: {class: 'hero-header'},
      styles: {
        justifySelf: `center`,
        fontSize: `5.0vw`,
        fontFamily: `TimesNewRoman`,
        opacity: `0.5`,
        justifySelf: `center`,
        color: `darkgrey`,
        textRendering: `optimizeLegibility`,
        textShadow: `0px -7px black`
      },
      text: 'The Showcase'
    };
    
    var description = {
      type: `a`,
      attributes: {class: `hero-text`},
      styles: {
        alignSelf: `end`,
        paddingBottom: `20px`,
        color: `darkgoldenrod`,
        fontFamily: `TimesNewRoman`,
        fontSize: `1.9vw`
      },
        text: `Welcome. Here is where I showcase my portfolio, play with code and further my
          knowledge.`};
        
    // Creating a new object returns that element. This will be the parent element.
    // need to figure out how to remove the below step.
    var pe = MM (parent);
    var he = MM (header);
    var ie = MM (intro);
    
    // Append the elements, all inside the parent.
    he.append (header.text);
    ie.append (intro.text);
    pe.append (he, ie);
    
    /*********************************************************************************************
    var input = {
      type: 'input',
      attributes: {class: 'test-input'}};
    var button = {
      type: 'button',
        text: 'click here'};
    
    var testin = MM (input);
    var testbt = MM (button);
    pe.append (testin, testbt);
    
    // Here I will build an example function of adding new elements on demand.
    // this probably does not belong in the template, but it is working.
    function addText () {
      var obj = {
        type: 'div',
        attributes: {class: 'unique-entry'},
          text: testin.value};
      var newEl = MM (obj);
      newEl.append (obj.text);
      pe.append (newEl);
      console.log (pe);
    }
    
    testbt.addEventListener ('click', addText);*/
    
    return pe;
      
  },
  "
