// navbar html.
// I think the data argument passed here may be for inserting
// data from an external source, like a database, or input from
// a user on the page.
var navbarTemplates = {
	nav_desktop: function (data) {
    var html = `
      <link rel="stylesheet" href="app/root-components/navbar/styles.css">
        
      <div class="nav-links">
        <!-- full-size navbar -->
        <a class="nav-logo" href="#home">Marc McKinnis | Portfolio</a>
        <img class="nav-pic" href="#page1-home" 
          src="photos-lowres/profile.jpg" alt"profile">

        <a class="nav-page1" onclick="utils.router ()">Home</a>
        <a class="nav-page2" onclick="utils.router ("code")">Code</a>
        <a class="nav-page3" onclick="utils.router ("resume")">Resume</a>
      </div>
    `;
    return html;
  },

  nav_mobile: function (data) {
    var html = `
      <!-- mobile version of navbar, not done yet. -->
      <div class="nav-mobile" hidden></div>
    `;
    return html;
  } 
};