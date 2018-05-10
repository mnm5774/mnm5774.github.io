var footerTemplates = {
	footer: function (data) {
    var html = document.createTextNode (`
      <link rel="stylesheet" href="app/root-components/footer/styles.css">

      <img src="photos-lowres/kitty.jpeg">
      <a>The Showcase<br />&copy; 2017</a>
    `);
    return html;
    }
};