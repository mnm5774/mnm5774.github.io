var page3Templates = {
  resume: function () {
    var styles = {background: 'white', color: 'red'};
    var obj = MM ();

    var test = obj.newElement ('div', ['class', 'id'], ['test-class', 'test-id'],
      ['background-color', 'color'], [styles.background, styles.color],
        [obj.newElement ('div', ['class'], ['child-class']),
        obj.newElement ('div', ['class'], ['child-two'])]
      );

    var html = `
      <link rel="stylesheet" href="app/page3-resume/styles.css">

      <header>Here's my resume page. More info soon to come.<header/>
    `;

    return test + html;
  }
};