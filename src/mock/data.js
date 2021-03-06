import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Nick Jeske Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello my name is',
  name: 'Nick Jeske',
  subtitle: `I build apps and websites.`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm a professional and passionate Software Engineer focused on efficiency and constant learning.`,
  paragraphTwo:
    'I have experience working in large financial and manufacturing enterprises with modernizing legacy applications. Looking to further my skills and become a Full Stack Developer using Java and Javascript frameworks like React.js and Node.js.',
  paragraphThree:
    'I would love to set up an introduction call to discuss how I could help your business and make your goals happen.',
  resume: 'https://gitconnected.com/njjeske/resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'webstore.jpg',
    title: 'Ecommerce-Website (Work in Progress)',
    info:
      'A standard Ecommerce Website that allows users to sign in / sign up, add shop items, checkout items, etc.',
    info2:
      'A project to improved my skillset by using technologies like React, Redux, Google Firebase, and more!',
    repo: '',
    url: 'https://github.com/NJJeske/Ecommerce-Website', // if no repo, the button will not show up
  },

  {
    id: uuidv1(),
    img: 'FRAProject.jpg',
    title: 'Face Recognition App',
    info: `A React.js website that is used to highlight faces of random images. This website uses a Machine Learning API Key called Clarifai to provide a location of a person's face when given an image.`,
    info2:
      'The front-end consumes a Rest Service built of Express (Node.js back-end server) and Postgres SQL (Relational Database). The website is deployed through Heroku.',
    repo: 'https://face-recognition-program.herokuapp.com/',
    url: 'https://github.com/NJJeske/Face-Recognition-App-Frontend', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Move List Website',
    info:
      'A simple project that displays and searches top rated movies with a scrollbar. The searchbar will filter the names of the movies depending on their title.',
    info2: `React web development project. This website uses an API called The Movie Database API to fetch a JSON object with the following info (movie images, title, and popularity).The website is deployed through Netlify.`,
    repo: 'https://movie-list-website.netlify.app/',
    url: 'https://github.com/NJJeske/movielist-website', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'UWM.jpg',
    title: 'Senior Design Project',
    info:
      'Created and collaborated with classmates and professionals from Northwestern Mutual to design and implement a portfolio builder application.',
    info2:
      'I learned new technologies like Java (Spring-Boot), Javascript (React.js), MySQL, and AWS.',
    repo: '',
    url: 'https://github.com/NJJeske/UWM-Capstone-Project-Frontend', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `How can I help achieve your goals? Let's talk!`,
  btn: 'Connect',
  email: 'Nickjeske49@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'wordpress',
      url: 'https://upcomingdevs.com/',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nicholasjjeske/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/NJJeske',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
