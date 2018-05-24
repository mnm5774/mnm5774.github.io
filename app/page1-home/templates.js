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
    var parent = {
      type: 'div',
      attributes: ['class'],
        attVals: ['hero'],
      styles: {
        display: `grid`,
        border: `7px`,
        // this multiple words format does not work yet.
        backgroundImage: `url ('/photos-highres/stars1.jpg')`,
        
        //just for test.
        string: `
         justify-content: center;
         background-image: url('/photos-highres/stars1.jpg');
         background-size: cover;
         min-height: 36vw;
         background-repeat: no-repeat;
         background-color: #222;
         border-color: darkgoldenrod;
         border-style: hidden hidden outset hidden;
       `}
    };
    
    var header = {
      type: 'h1',
      attributes: ['class'],
        attVals: ['hero-header'],
        text: 'The Showcase'};
    
    var intro = {
      type: 'a',
      attributes: ['class'],
        attVals: ['hero-text'],
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
    
    /**********************************************************************************************/
    var input = {
      type: 'input',
      attributes: ['class'],
        attVals: ['test-input']};
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
        attributes: ['class'],
          attVals: ['unique entry'],
          text: testin.value};
      var newEl = MM (obj);
      newEl.append (obj.text);
      pe.append (newEl);
      console.log (pe);
    }
    
    testbt.addEventListener ('click', addText);
    
    return pe;
      
  },



  home: function (data) {
    var content = document.createTextNode (`
      <link rel="stylesheet" href="app/page1-home/styles-content.css">

      <div id="hello_text">
        <h2>Hello... here's a test home page</h2>

        <p>
          Thank you for visiting my Single Page Application. I am Marc McKinnis.
        </p>

        <p>
          This whole site is rendered using vanilla Javascript, CSS, and HTML.
        </p>

      </div>


      <div id="home" class="page-content page1-home">
        <header class="page-header home-header">First things first...</header>

        <div class="page-intro home-intro">

          <p>A little about me. I am a beginning programmer, among many other
            things. A jack of many trades, of a sort. You can see many of my other
            skillsets in the "Resume" section. The purpose of this site originally
            started as an exercise for learning Javascript, and a visual aid for
            understanding what is happening under the hood in the browser when the code
            is parsed and executed. I soon realized the need for having a portfolio
            available for review as well.
          </p>

          <p>So this site facilitates both of those goals. That being said, please be
            patient if things are a bit buggy, or inaccessible. Everything you see is
            vanilla HTML, CSS, and Javascript. I am currently not using any libraries or
            frameworks, other than my own libraries. In the future my plan is to convert
            this site into a Single Page Application, with the page content being dynamically
            loaded upon request, instead of needing entirely different pages. I understand
            this to mean a decrease in network traffic when navigating the site, and an
            improvement in interfacing with the site. I intend to do this with vanilla
            Javascript.
          </p>

          <p>A lot of code I have is written by me, though there are also plenty of blocks
            I have acquired along my path of learning Javascript. In the future I will also
            have a "Code" page, where I will store a lot of tools and projects I have acquired.
          </p>

        </div>

        <div class="page-about home-about">
            <h1 class="about-header">About Me</h1>

            <div class="about-content">
              <p>My name is Marc McKinnis. I grew up in and currently live in north-eastern
                Arizona, in the White Mountains. I'm 23 years old.
              </p>

              <p>I have a wide range of skills, in multiple fields. I spent almost three
                years as an I.T. Technician at Snowflake Unified School District. I also have
                several years of experience part-time as a locksmith, working for M&G Locks.
              </p>

              <p>I currently have one job: working for Dynatrace on the Insights-Support team.
                My duties here include data analysis on synthetic tests for web applications,
                maintaining and creating scripts, and handling customer requests.
              </p>

              <p>I enjoy casually playing various instruments. I also am occasionally a live
                sound technician, and enjoy going to concerts. I also like to play video
                games (typical, I know).
              </p>

              <p>I have found that I learn new things some-what differently than most people
                (from my point-of-view). I learn most effectively when I see the entire
                process of things (know why I'm doing things the way I'm doing them), and see
                how tools are used in real situations.
              </p>

            </div>
        </div>


        <p>Here's some filler text.</p>
        
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis molestie
              leo. Phasellus eu accumsan quam. Fusce sed tortor ut magna maximus tempus ac vel ex.
              Morbi in ornare mauris. Pellentesque nec lectus elit. Ut pellentesque sem leo, ut
              euismod ante condimentum et. In dignissim iaculis metus, ut volutpat nibh.

              Praesent nulla libero, mollis a turpis vel, hendrerit vulputate dolor. Maecenas
              ornare, dui ac tempor dapibus, sapien neque convallis risus, at porta purus massa
              sed elit. Phasellus quis lobortis sem, ut tempor elit. Nunc laoreet ligula sit amet
              risus congue, quis aliquet tellus feugiat. Praesent ac purus in elit convallis
              elementum et nec metus. Etiam lobortis finibus venenatis. Sed sed diam nisi.
              Quisque tempus, sem sit amet scelerisque pretium, mauris mi feugiat quam, vitae
              consectetur dui sem non urna. Etiam sed metus sed nisl laoreet commodo. Morbi
              gravida enim velit, in ullamcorper nisl elementum blandit. Suspendisse arcu orci,
              ultrices non quam eu, sagittis viverra purus. Nulla hendrerit vehicula lectus eu
              eleifend. Quisque malesuada faucibus lectus, ullamcorper volutpat nunc feugiat at.
              In mollis facilisis fringilla.

              Sed id nisl molestie, aliquet sapien nec, tincidunt tellus. Mauris sed tempus
              lorem. Donec malesuada facilisis mi, sed dapibus libero pharetra sed. Donec ultricies
              blandit urna, vel pellentesque tortor convallis sed. Maecenas sed odio ut massa
              ullamcorper feugiat. In volutpat, sem ac dapibus faucibus, enim massa pellentesque
              nisl, nec vulputate ex lectus ut libero. Etiam nec hendrerit augue, ut pulvinar
              magna. Maecenas nisi sem, ullamcorper eget luctus sit amet, rhoncus pellentesque
              odio. Vivamus euismod ipsum id volutpat commodo. Duis et volutpat velit. Fusce mauris
              odio, euismod id cursus sit amet, luctus eleifend sem.
            </p>
      </div>
    `);
    return content;
  }
};
