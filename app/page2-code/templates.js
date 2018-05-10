var page2Templates = {
  js30: function () {
    var html = `
      <link rel="stylesheet" href="app/page2-code/styles.css">

      <header>Here's some code I've written.</header>

      <p>The purpose of this site is mostly to help me understand Javascript, as a
        language, better. In light of the advent of full-stack Javascript, I believe
        this approach will serve me well. As a result, I am NOT using any external
        sources of code, any transpilers/compilers, or frameworks/libraries. </p>

      <p>I have nothing against these methods. But in order for me to use those
        kinds of tools effectively in the future, I need to understand the language
        that is actually being fed to the browser. The most comprehensive way for
        me to do that effectively is to build my components from the ground up,
        without relying on another tool. Also, by taking this approach, I feel that
        I already have learned some of the reasons why large organizations choose to
        use Angular, or React.</p>

      <p>This approach has also helped me understand how and why things work under
        the hood, like they do. For instance, my newElement function is based off
        of the process used to create elements in React. Whether JSX is in use or
        not, it appears to me that React.createElement is what is called whenever
        a new HTML element is created. The modularity, and flexibility, of using a
        single function for creating elements seems to add much scalability to an
        application, allowing for a new element to be created and inserted upon request,
        simply by invoking the method. I also like this because it allows me to continue
        writing Javascript, without having to stop and write mark-up.</p>

      <p>A lot of the ideas I use for my functionality I have acquired externally,
        like the above example. I will eventually have some code and some projects
        I've built below, as well as references to some of the sources of information
        I have used, which have become integral to my understanding of web
        technologies.</p>

      <p>That being said, a lot of my code and comments made seem convoluted, and not
        concise. This is because I am still a beginner, and I like to do things in a way
        that I will understand, when I come back to it later to learn and build more.</p>
    `;
    return html;
  }
};