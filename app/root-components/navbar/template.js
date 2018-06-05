// Sticky navbar, desktop version and mobile version.
// Mobile not created yet.
var navbarTemplates = {
	desktop: function () {
		var container = {
			type: `div`,
			attributes: {class: `nav-links`},
			styles: {
				display: `grid`,
				gridTemplateRows: `9vh`,
				gridTemplateColumns: `30% 40% 10% 10% 10%`,
				gridTemplateAreas: `"logo pic home two three"`,
				justifyContent: `center`,
				overflow: `hidden`,
				backgroundColor: `black`,
			}
		};

		var logo = {
			type: `a`,
			attributes: {type: `button`, class: `nav-logo`, href: `#`},
			styles: {gridArea: `logo`},
			text: `Marc McKinnis | Portfolio`
		};

		var logoPic = {
			type: `img`,
			attributes: {
				class: `nav-pic`,
				href: `#`,
				src: `photos-lowres/profile.jpg`,
				alt: `profile`
			},
			styles: {
				gridArea: `pic`,
				border: `2px solid darkgrey`,
				borderRadius: `35%`,
				maxHeight: `35px`,
				alignSelf: `center`,
				marginLeft: `10px`
			}
		};

		var page1 = {
			type: `a`,
			attributes: {type: `button`, class: `nav-page1`, href: `#`},
			styles: {gridArea: `home`},
			text: `Home`
		};

		var page2 = {
			type: `a`,
			attributes: {type: `button`, class: `nav-page2`, href: `#`},
			styles: {gridArea: `two`},
			text: `Code`
		};

		var page3 = {
			type: `a`,
			attributes: {type: `button`, class: `nav-page3`, href: `#`},
			styles: {gridArea: `three`},
			text: `Resume`
		};

		var linkSty = {
			backgroundColor: `black`,
			textAlign: `center`,
			textDecoration: `none`,
			alignSelf: `center`,
			color: `snow`,
			padding: `10px`,
			fontSize: `2.0vw`,
			fontFamily: `TimesNewRoman`
		};

		var hoverSty = {
			backgroundColor: `#ddd`,
			color: `black`,
			border: `4px solid black`,
			overflow: `hidden`
		};

		var stickySty = {
			position: `fixed`,
			top: `0`,
			width: `100%`
		};

		return {container, logo, logoPic, page1, page2, page3, linkSty, hoverSty, stickySty};
	}
};
