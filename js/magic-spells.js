var projectObject = {
    0: {
        "image":"assets/projects/flappyrick.png",
        "heading":"Flappy Rick",
        "body":"Rick and Morty take on flappy bird in this broswer based, canvas game. Utilized P5.js library for game animations and finite state machine for game phase staging. Consumes it's own API.",
        "info":"HTML, CSS, Ruby, Rails, Express, AngularJS, JWT, P5",
        "source":"https://github.com/alexandraalday/FlappyRick", 
        "url":"https://flappyrick.herokuapp.com/"
        },
    1: {
        "image":"assets/projects/goodgame.png",
        "heading":"GoodGame",
        "body":"Goodgame is an app that lets you catalog video games into user curated gamelists like 'currently playing', 'wishlist', and 'played'. A little like Goodreads or Spotify, but for video games.",
        "info":"HTML, CSS, JavaScript, jQuery, MongoDB, Node, Express, AngularJS, JWT",
        "source":"https://github.com/alexandraalday/goodgame", 
        "url":"https://project-goodgame.herokuapp.com/"
        },
    2: {
        "image":"assets/projects/laserz.png",
        "heading":"Lasers vs. Bubbles",
        "body":"Pew! Pew! It's a quick little canvas game, based on Asteroids.",
        "info":"HTML, CSS, JavaScript, jQuery, P5",
        "source":"https://github.com/alexandraalday/lasers-vs-bubbles", 
        "url":"https://alexandraalday.github.io/lasers-vs-bubbles/"
        },
    3: {
        "image":"assets/projects/modus.png",
        "heading":"Modus",
        "body":"Find songs to fit your mood. Enter the artist's name and title of a song. Modus will serve up 100 songs, consuming the Last.fm API, to make you feel the same. User authentication with JWT.",
        "info":"HTML, CSS, Ruby, Rails, Express, AngularJS, JWT",
        "source":"https://github.com/alexandraalday/modus_app_frontend", 
        "url":"https://modus-app.herokuapp.com/"
        },
    4: {
        "image":"assets/projects/girlgang.png",
        "heading":"Girl Gang",
        "body":"Girlgang is a single-page, sessions based, four model CRUD app build with MVC file organization. A place to collect and share media that celebrates and empowers all things femme.",
        "info":"HTML, CSS, JavaScript, MongoDB, Node, Express, AngularJS, Session",
        "source":"https://github.com/alexandraalday/girl-gang", 
        "url":"http://girl-gang.herokuapp.com/"
        },
    5: {
        "image":"assets/projects/simonuniverse.png",
        "heading":"Simon Universe",
        "body":"A game application based on the 80's classic, Simon, and inspired by the cartoon Steven Universe.",
        "info":"HTML, CSS, JavaScript, jQuery",
        "source":"https://github.com/alexandraalday/SimonUniverse", 
        "url":"https://alexandraalday.github.io/SimonUniverse/"
        },
    6: {
        "image":"assets/projects/pixelweather.jpg",
        "heading":"Pixel Weather",
        "body":"A weather app that uses geolocation and consumes the openweather API to display the current weather.",
        "info":"HTML, CSS, Bootstrap, JavaScript, jQuery",
        "source":"https://github.com/alexandraalday/pixel-weather", 
        "url":"https://alexandraalday.github.io/pixel-weather/"
        }
    };

$(window).on("load",function(){
    const scrollMagicController = new ScrollMagic.Controller();

    ////////////////////
    // PORTFOLIO STUFF //
    ////////////////////    

    var template = document.getElementById("template-list-item");
    var templateHtml = template.innerHTML;
    var listHtml = "";

    for (var key in projectObject) {
      listHtml += templateHtml.replace(/{{image}}/g, projectObject[key]["image"])
                              .replace(/{{heading}}/g, projectObject[key]["heading"])
                              .replace(/{{body}}/g, projectObject[key]["body"])
                              .replace(/{{info}}/g, projectObject[key]["info"])
                              .replace(/{{source}}/g, projectObject[key]["source"])
                              .replace(/{{url}}/g, projectObject[key]["url"]);
    }

    document.getElementById("list").innerHTML = listHtml;

    let portfolioTextTween = TweenMax.staggerFromTo('#portfolio .portfolio-items', 0.5,
        {
            y: 50,
            x: -50,
            opacity: 0
        },
        {
            y: 0,
            x: 0,
            opacity: 1
        },
        0.2
    );
    let portfolioTextScene = new ScrollMagic.Scene({
        triggerElement: '#portfolio .portfolio-items',
        duration: 500,
        offset: -200
    })
    .setTween(portfolioTextTween)
    .addTo(scrollMagicController);

    ////////////////////
    // ABOUT ME STUFF //
    ////////////////////

    let aboutmeTween = TweenMax.staggerFromTo('#about-me .item', 0.5,
        {
            y: 50,
            x: -50,
            opacity: 0
        },
        {
            y: 0,
            x: 0,
            opacity: 1
        },
        0.2
    );
    let aboutmeScene = new ScrollMagic.Scene({
        triggerElement: '#about-me .item',
        duration: 500,
        offset: -200
    })
    .setTween(aboutmeTween)
    .addTo(scrollMagicController);
});



console.log("                             .");
console.log("                           _,|\\ ");
console.log("                           \\__/ ");
console.log("                            || ");
console.log("         ___               {_].");
console.log("          \\ \\               L; ` ");
console.log("           ) )               | :  ,(),_,_,(), ");
console.log("         _/_/                | | / /(,,^,,)\\ \\ ");
console.log("                             | || | ;`-o-'; | | ");
console.log("                             |/:) | | '.' | | ( ");
console.log("                              \\ \\(   \\_-_/   ) | ");
console.log("                               \\ `._--)=(---.: | ");
console.log("                               |\\ '-_|\\O/|_-'/\\ ");
console.log("                              | | `\\ |/ \\| //\\ \\ ");
console.log("                              / /   \\     /   \\ \\ ");
console.log("                             ; |    :\\   /:    \\/\\ ");
console.log("                             | (   / \\\\,// \\   )\\ \\ ");
console.log("                             | |  /  /|'|\\  \\  | \\ \\ ");
console.log("                             | | /  / | | \\  \\ | |\\ \\___ ");
console.log("                             ) :'-_/--|_|--\\_-`: ( `-\\ ");
console.log("                            / /  /    / \\    \\  \\ \\ ");
console.log("                           / /  /    /   \\    \\  \\ \\ ");
console.log("                      /\\_/ /   /    /     \\    \\  \\ \\_/\\ ");
console.log("                      \\___'   /    /       \\   \\   `___/ ");
console.log("                              /   /         \\   \\ ");
console.log("                             /   /           \\   \\ ");
console.log("                            /   /             \\   \\ ");
console.log("                            /^/                 \\^\\ ");
console.log("                           /  /                 \\  \\ ");
console.log("                          /  /                   \\  \\ ");
console.log("                         /  /                     \\  \\ ");
console.log("                        ' ,/                       \\, ` ");
console.log("                       ; /                           \\ : ");
console.log("                      /  /J                         L\\  \\ ");
console.log("                     :__/'                           '\\__; ");
console.log("Moon prism power!")