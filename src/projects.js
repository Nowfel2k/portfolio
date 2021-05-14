import movies from "./Assets/images/projects/movies.png";
import whatsapp from "./Assets/images/projects/whatsapp.jpg";
import hulu from "./Assets/images/projects/hulu.jpg";
import tinder from "./Assets/images/projects/tinder.png";
import taxi from "./Assets/images/projects/taxi.jpg";
import library from "./Assets/images/projects/library.jpg";
import connect4 from "./Assets/images/projects/connect4.jpg";
import xo from "./Assets/images/projects/xo.png";
import lift from "./Assets/images/projects/lift.jpg";
import chess from "./Assets/images/projects/chess.jpg";
import jarvis from "./Assets/images/projects/jarvis.jpg";
import calci from "./Assets/images/projects/calci.jpg";
import messenger from "./Assets/images/projects/messenger.jpg";
import story from "./Assets/images/projects/story.png";
import airbnb from "./Assets/images/projects/airbnb.png";
import editor from "./Assets/images/projects/editor.jpeg";
import amazon from "./Assets/images/projects/amazon.jpg";

const projects = [
  {
    section: "React",
    image: editor,
    name: "Code Editor - Create your website",
    language: "ReactJS, Hooks",
    date: "Dec 2020",
    site: "https://navfal-code-editor.herokuapp.com",
    code: "https://github.com/navfal-dev/react-code-editor",
  },
  {
    section: "React",
    image: whatsapp,
    name: "Whatsapp Web",
    language: "ReactJS, Material-UI, Google Firebase",
    date: "Sep 2020",
    site: "https://whatsapp-clone-75c3a.web.app/",
    code: "https://github.com/navfal-dev/react-whatsapp-clone",
  },
  {
    section: "React",
    image: movies,
    name: "Movie Search App",
    language: "ReactJS, MovieDB API",
    date: "Sep 2020",
    site: "https://movie-search-nowfel2k.herokuapp.com/",
    code: "https://github.com/navfal-dev/movie-search-app",
  },
  {
    section: "React",
    image: messenger,
    name: "Messenger App",
    language: "ReactJS, Material-UI, Google Firebase",
    date: "Sep 2020",
    site: "https://messenger-nowfel2k.web.app/",
    code: "https://github.com/navfal-dev/react-messenger-app",
  },
  {
    section: "React",
    image: xo,
    name: "Tic Tac Toe Game",
    language: "ReactJS, Hooks",
    date: "Oct 2020",
    site: "https://tictactoe-nowfel2k.herokuapp.com/",
    code: "https://github.com/navfal-dev/react-tictactoe",
  },
  {
    section: "React",
    image: hulu,
    name: "Hulu Website",
    language: "ReactJS, Material-UI, Google Firebase, MovieDB API",
    date: "Sep 2020",
    site: "https://hulu-nowfel2k.web.app/",
    code: "https://github.com/navfal-dev/react-hulu-clone",
  },
  {
    section: "React",
    image: airbnb,
    name: "Airbnb Website",
    language: "ReactJS, Material-UI",
    date: "Oct 2020",
    site: "https://airbnb-nowfel2k.herokuapp.com/",
    code: "https://github.com/navfal-dev/react-airbnb-clone",
  },
  {
    section: "React",
    image: amazon,
    name: "Ecommerce Online App",
    language: "ReactJS, Material-UI, Stripe API, ExpressJS",
    date: "Nov 2020",
    site: "https://navfal-online-store.herokuapp.com/",
    code: "https://github.com/navfal-dev/react-amazon-clone",
  },
  {
    section: "MERN",
    image: tinder,
    name: "Tinder App",
    language: "ReactJS, ExpressJS, NodeJS, MongoDB, Material-UI",
    date: "Sep 2020",
    site: "https://tinder-nowfel2k.herokuapp.com/",
    code: "https://github.com/navfal-dev/mern-tinder-clone",
  },

  {
    section: "C/C++",
    image: connect4,
    name: "Connect 4 Board Game",
    language: "C Language",
    date: "Sep 2019",
    // site: " VIDEO NEEDED ",
    code: "https://github.com/navfal-dev/C/blob/master/CONNECT4",
  },

  {
    section: "C/C++",
    image: xo,
    name: "Tic Tac Toe",
    language: "C Language",
    date: "Sep 2019",
    // site: " VIDEO NEEDED ",
    code: "https://github.com/navfal-dev/C/blob/master/TICTACTOE",
  },

  {
    section: "C/C++",
    image: library,
    name: "Library Management System",
    language: "C Language",
    date: "Sep 2019",
    // site: " VIDEO NEEDED ",
    code: "https://github.com/navfal-dev/C/blob/master/Library%20Management.c",
  },

  {
    section: "C/C++",
    image: lift,
    name: "Lift Working",
    language: "C Language",
    date: "Sep 2019",
    // site: " VIDEO NEEDED ",
    code: "https://github.com/navfal-dev/C/blob/master/LIFT",
  },

  {
    section: "C/C++",
    image: taxi,
    name: "OLA Taxi App",
    language: "C Language",
    date: "Sep 2019",
    // site: " VIDEO NEEDED ",
    code: "https://github.com/navfal-dev/C/blob/master/OLA",
  },
  {
    section: "Python",
    image: chess,
    name: "Chess - Mini Game",
    language: "Python",
    date: "Sep 2018",
    site: "https://www.youtube.com/watch?v=KovLKs5n7_A&ab_channel=LivenCoder",
    code: "https://github.com/navfal-dev/PYTHON/blob/master/MINI-CHESS",
  },
  {
    section: "Python",
    image: jarvis,
    name: "Jarvis Desktop Bot",
    language: "Python, pyttsx3",
    date: "Sep 2018",
    // site: " VIDEO NEEDED ",
    code: "https://github.com/navfal-dev/PYTHON/blob/master/JARVIS",
  },
  {
    section: "Python",
    image: xo,
    name: "Tic Tac Toe Game",
    language: "Python",
    date: "Sep 2018",
    // site: " VIDEO NEEDED ",
    code: "https://github.com/navfal-dev/PYTHON/blob/master/TICTACTOE",
  },

  {
    section: "JavaScript",
    image: calci,
    name: "Calculator",
    language: "JavaScript",
    date: "Sep 2019",
    site: "https://nowfel2k.github.io/js-calculator/",
    code: "https://github.com/navfal-dev/js-calculator",
  },

  {
    section: "NodeJS",
    image: story,
    name: "Stories Sharing App",
    language: "NodeJS, ExpressJS with HBS, MongoDB Atlas",
    date: "Nov 2020",
    // site: " TO BE Deployed ",
    code: "https://github.com/navfal-dev/express-stories-app",
  },
];

export default projects;
