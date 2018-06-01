// Sticky navbar, desktop version and mobile version.
// Mobile not created yet.
var navbarTemplates = {
	desktop: function () {
		var container = {
			type: `div`,
			attributes: {class: `nav-links`},
			styles: {
				disply: `grid`,
				gridTemplateRows: `9vh`,
				gridTemplateColumns: `30% 40% 10% 10% 10%`,
				gridTemplateAreas: `"logo pic home two three"`,
				justifyContent: `center`,
				overflow: `hidden`,
				backgroundColor: `black`,
				paddingLeft: `60px`,
				paddingRight: `60px`,
				fontSize: `2.0vw`
			}
		};

		var logo = {
			type: `a`,
			attributes: {class: `nav-logo`, href: `#home`},
			styles: {gridArea: `logo`},
			text: `Marc McKinnis | Portfolio`
		};

		var logoPic = {
			type: `img`,
			attributes: {
				class: `nav-pic`,
				href: `#page1-home`,
				src: `photos-lowres/profile.jpg`,
				alt: `profile`
			},
			styles: {gridArea: `pic`}
		};
	}
};






// navbar html.
// I think the data argument passed here may be for inserting
// data from an external source, like a database, or input from
// a user on the page.
/*var navbarTemplates = {
	nav_desktop: function (data) {
    var html = document.createTextNode (`
      <link rel="stylesheet" href="app/root-components/navbar/styles.css">

      <div class="nav-links">
        <!-- full-size navbar -->
        <a class="nav-logo" href="#home">Marc McKinnis | Portfolio</a>
        <img class="nav-pic" href="#page1-home"
          src="photos-lowres/profile.jpg" alt"profile">

        <a class="nav-page1" onclick="utils.router ();">Home</a>
        <a class="nav-page2" onclick="utils.router ('code');">Code</a>
        <a class="nav-page3" onclick="utils.router ('resume');">Resume</a>
      </div>
    `);
    return html;
  },

  nav_mobile: function (data) {
    var html = document.createTextNode (`
      <!-- mobile version of navbar, not done yet. -->
      <div class="nav-mobile" hidden></div>
    `);
    return html;
  }
};*/