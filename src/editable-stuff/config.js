// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ali Sultan",
  middleName: "",
  lastName: "Sikandar",
  message: " Software Engineer| Web Developer | MMA and Soccer Enthusiast",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/alisultan14",
    },
    
   
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/alisultansikandar/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/hashirshoaeb.png"),
  imageSize: 375,
  message:
    "Hello Everyone! I am Ali Sultan Sikandar, a rising junior at Lafayette College majoring in Computer Science and minoring in Economics. I am originally from Lahore Pakistan and I will be starting my fifth semester this fall. I have a knack for technology. My interests are mostly related to AI and Full stack development but I am open to immerse myself into new and upcoming tools and technoligies as well. Outside of professional landscape, I am a huge MMA and boxing fan. My weekends are usually incomplete without watching the UFC and English Premier League.",
  resume: "https://www.docdroid.net/sNZZ8ME/resume-ali-2021-v33-1-pdf",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "alisultan14", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Pet_Matchmaker","Virtual-Maze-Analyzer","Soccer_Shot_Map","Space_Escape_Motion-Control-Game","Book_Index_Generator","Sorting_Algorithms_Time_Comparison","Human-Reaction-Timer","Coffee-Shop-Simulator"]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 100 },
    { name: "SQL", value: 100 },
    { name: "Java", value: 100 },
    { name: "React", value: 100 },
    { name: "JavaScript", value: 100 },
    { name: "HTML/CSS", value: 100 },
    { name: "C++", value: 100 },
    { name: "C", value: 100},

  ],
  softSkills: [
    { name: "Microsoft Excel", value: 100 },
    { name: "ArcGIS", value: 100 },
    { name: "SketchUp", value: 100 },
    { name: "AutoCAD", value: 100 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Summer 2022 Software Engineering Internships! If you want to get in contact, please feel free to reach out to me at my LinkedIn or my email",
  email: "sikandaa@lafayette.edu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineering Intern, NeurLeap Corporation',// Here Add Company Name
      companylogo: require('../assets/img/neuro.png'),
      date: 'Feb 2021 – Present',
    },
    {
      role: 'Machine Learning Researcher, Computer Science Department, Lafayette College',// Here Add Company Name
      companylogo: require('../assets/img/laf.png'),
      date: 'Jun 2021 – Present',
    },
    {
      role: 'EXCEL Research Scholar, Neuro Science Department, Lafayette College',// Here Add Company Name
      companylogo: require('../assets/img/laf.png'),
      date: 'Jun 2020 – Jan 2021',
    },
    {
      role: 'Digital Humanities Scholar, Lafayette College',// Here Add Company Name
      companylogo: require('../assets/img/laf.png'),
      date: 'Jun 2021 – July 2021',
    },
    {
      role: 'Web Development Extern, Betterment',// Here Add Company Name
      companylogo: require('../assets/img/better.png'),
      date: 'Dec 2020 – Jan 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
