// These are the parameters passed in the controller to create new elements.
var page1Templates = {
  hero: function () {
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
      attributes: {class: 'hero-title'},
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
      attributes: {class: `hero-description`},
      styles: {
        alignSelf: `end`,
        paddingBottom: `20px`,
        color: `darkgoldenrod`,
        fontFamily: `TimesNewRoman`,
        fontSize: `1.9vw`
      },
        text: `Welcome. Here is where I showcase my portfolio, play with code and further my
          knowledge.`
    };
    
    return {container, title, description};
  },

  
  home: function () {
    var container = {
      type: `div`,
      attributes: {id: `hello-text`},
      styles: {
        display: `grid`,
        margin: `0`,
        padding: `60px 30px 40px 30px`,
        backgroundColor: `snow`,
        fontFamily: `Perpetua, TimesNewRoman`,
        textAlign: `justify`,
        textIndent: `50px`
      }
    },
        
    var header = {
      type: `h1`,
      text: `Hi. Welcome to my portfolio.`
    },
        
    var introP1 = {
      type: `p`,
      text: `I am Marc McKinnis. Thank you for visiting my application. This entire site
is rendered using vanilla Javascript. I am a beginning programmer, among many other things.
To learn more about my skills, visit the "Resume" section.

The purpose of this site originally started as an exercise for learning Javascript, and a
visual aid for understanding what is happening under the hood in the browser when the code
is parsed and executed. I soon realized the need for having a portfolio available for review
as well.`
    },
        
    var introP2 = {
      type: `p`,
      text: `So this site facilitates both of those goals. Most of the site may be a bit buggy
for a while. Everything you see is dynamically created and rendered via vanilla Javascript. A
lot of code I have is written by me, though there are also plenty of blocks I have acquired
along my path of learning Javascript.`
    },
        
    var about = {
      type: `p`,
      text: `I grew up in and currently live in north-eastern Arizona, in the White Mountains.
I'm 23 years old. I have a wide range of skills, in multiple fields. I spent almost three years
as an I.T. Technician at Snowflake Unified School District. I also have several years of
experience part-time as a locksmith, working for M&G Locks.

I currently have one job: working for Dynatrace on the Insights-Support team. My duties here
include data analysis on synthetic tests for web applications, maintaining and creating scripts,
and handling customer requests.

I enjoy casually playing various instruments. I am occasionally a live sound technician, and
enjoy going to concerts. I also like to play video games.`
    },
        
    var filler = {
      type: `p`,
      text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis molestie
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
              odio, euismod id cursus sit amet, luctus eleifend sem.`
    };
    
    return {container, header, introP1, introP2, about, filler};
  }
};
