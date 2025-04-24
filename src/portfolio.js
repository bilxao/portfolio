/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Syed Bilal Shah",
  title: "Hi all, I'm Bilal",
  subTitle: emoji(
    "Principal Unity Developer | XR/AR/VR Expert | Technical Project Manager | Web3 & Blockchain Games Specialist"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1gOYCGaLYUoAyOI-TPxePRk9Bb2HosSKWIGaoU-RR8Zc/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bilxao",
  linkedin: "https://www.linkedin.com/in/bilal-se/",
  gmail: "bilxao.bs@gmail.com",
  facebook: "https://www.facebook.com/syedbilal.shah.7773631/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Unity Expert | XR/VR Specialist | Web3 Game Architect | Leading Teams from Code to Market",
  skills: [
    emoji(
      "🎮 Designing and developing immersive 3D games using Unity."
    ),
    emoji(
      "🕶️ Building interactive XR/VR/AR applications"
    ),
    emoji(
      "🧠 Integrating AI-driven NPCs, procedural generation, and multiplayer logic"
    ),
    emoji(
      "🔗 Creating blockchain-integrated gameplay mechanics including NFTs, wallet authentication"
    ),
    emoji(
      "🧩 Leading Agile teams, managing sprints, and delivering scalable features as a Technical Project Manager"
    ),
    emoji(
      "📈 Designing game economies, token utilities, and user acquisition funnels for Web3 ecosystems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Unity",
    fontAwesomeClassname: "fab fa-unity", // Optional, may require custom icon
  },
  {
    skillName: "C#",
    fontAwesomeClassname: "fas fa-code",
  },
  {
    skillName: "Photon Fusion",
    fontAwesomeClassname: "fas fa-network-wired",
  },
  {
    skillName: "XR/VR/AR",
    fontAwesomeClassname: "fas fa-vr-cardboard",
  },
  {
    skillName: "Web3",
    fontAwesomeClassname: "fab fa-ethereum",
  },
  {
    skillName: "Firebase",
    fontAwesomeClassname: "fas fa-fire",
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt",
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "fab fa-github",
  },
  {
    skillName: "Project Management",
    fontAwesomeClassname: "fas fa-project-diagram",
  },
  {
    skillName: "Jira",
    fontAwesomeClassname: "fab fa-jira", // Custom or Atlassian icon needed
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National University of Modern Languages",
      logo: require("./assets/images/NUML.png"),
      subHeader: "BS - Software Engineering",
      duration: "August 2011 - June 2015",
      desc: "Graduated with a solid foundation in software design, computer science, and full-stack development. Built early prototypes of simulation systems and multiplayer game logic.",
      descBullets: [
        "Capstone project: Real-time multiplayer card game using custom server-client architecture",
    "Lead role in a team that developed a VR-based educational training prototype",
    "Worked as assistant to a senior professor on AI-based research for pathfinding algorithms",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Unity Game Development",
      progressPercentage: "95%"
    },
    {
      Stack: "Multiplayer / Networking (Photon, Fusion, Netcode)",
      progressPercentage: "90%"
    },
    {
      Stack: "XR / VR / AR Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Web3 / Blockchain Game Integration",
      progressPercentage: "80%"
    },
    {
      Stack: "Technical Project Management",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Project Manager / Unity 3D Specialist",
      company: "Funsol Technologies",
      companylogo: require("./assets/images/funsolLogo.png"),
      date: "Feb 2024 – Present",
      desc: "Managed Unity 3D development for Web3 Metaverse projects, balancing performance optimization with real-time multiplayer implementation.",
      descBullets: [
      ]
    },
    {
      role: "Project Development Manager / Unity 3D Lead",
      company: "Metator - IR Solutions",
      companylogo: require("./assets/images/irsolutionsLogo.png"),
      date: "Sep 2022 – Jan 2024",
      desc: "Led VR architecture and gameplay development for immersive metaverse experiences.",
      descBullets: [
      ]
    },
    {
      role: "Technical Team Lead / Unity Game Developer",
      company: "Funsol Technologies",
      companylogo: require("./assets/images/funsolLogo.png"),
      date: "Apr 2019 – Aug 2022",
      desc: "Built and optimized Unity 3D mobile games, driving millions of downloads and high retention.",
      descBullets: [
      ]
    },
    {
      role: "Simulation Developer / Project Manager",
      company: "Vision Next LLC (QAF-PAF Joint CBT Project)",
      companylogo: require("./assets/images/visionnextLogo.png"),
      date: "Jul 2017 – Sep 2018",
      desc: "Developed a high-fidelity Unity-based CBT simulator for pilot training, with real-time hardware integration.",
      descBullets: [
      ]
    },
    {
      role: "Senior Unity 3D Developer",
      company: "Knock Solutions",
      companylogo: require("./assets/images/knocksolutionsLogo.png"),
      date: "Aug 2015 – Jun 2017",
      desc: "Created Unity games with scalable architecture, real-time networking, and engaging player loops.",
      descBullets: [
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some flagship products and startups where I built or led their core tech",
  projects: [
    {
      image: require("./assets/images/metascapesLogo.webp"),
      projectName: "Metascapes",
      projectDesc:
        "A community-driven metaverse with land customization, multiplayer sports, AI bots, and blockchain-based land ownership. Built in Unity using Photon Fusion and a custom backend.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://metascapes.io/" // Replace with actual URL
        }
      ]
    },
    {
      image: require("./assets/images/undeadLogo.webp"),
      projectName: "Undead MetaClash",
      projectDesc:
        "Web3 multiplayer battle game with NFT-based characters, maps, and assets. Developed gameplay systems, UI, and decentralized interactions.",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://drive.google.com/file/d/1hHq9Nw8Ii1KILZfki_oFUBs5xZ3-HhbH/view?usp=sharing" // Replace with actual link
        }
      ]
    },
    {
      image: require("./assets/images/metatorLogo.webp"),
      projectName: "Metator",
      projectDesc:
        "VR-based metaverse learning and simulation platform. Led development in Unity XR, optimized VR performance, and built core interaction systems.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.metator.com/" // Replace with actual link
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Recognitions, Certifications, and Highlights from my journey in Game Dev, Web3, and XR.",
  achievementsCards: [
    {
      title: "Generative AI for Everyone – IBM",
      subtitle:
        "Completed IBM’s foundational course on Generative AI applications in real-world use cases.",
      image: require("./assets/images/ibmLogo.webp"),
      imageAlt: "IBM Certificate",
      footerLink: [
        {
          name: "View Certification",
          url: "https://your-link-here.com"
        }
      ]
    },
    {
      title: "Introduction to Software Engineering – IBM",
      subtitle:
        "Certified in software engineering fundamentals including SDLC, architecture, and system design.",
      image: require("./assets/images/ibmLogo.webp"),
      imageAlt: "IBM Software Engineering",
      footerLink: [
        {
          name: "View Certification",
          url: "https://your-link-here.com"
        }
      ]
    },
    {
      title: "Introduction to AI – IBM",
      subtitle:
        "Explored the core concepts of Artificial Intelligence and its real-world applications.",
      image: require("./assets/images/ibmLogo.webp"),
      imageAlt: "IBM AI Certificate",
      footerLink: [
        {
          name: "View Certification",
          url: "https://your-link-here.com"
        }
      ]
    },
    {
      title: "Generative AI – Prompt Engineering – IBM",
      subtitle:
        "Learned how to design effective AI prompts and engineer responses using LLMs like GPT.",
      image: require("./assets/images/ibmLogo.webp"),
      imageAlt: "IBM Prompt Engineering",
      footerLink: [
        {
          name: "View Certification",
          url: "https://your-link-here.com"
        }
      ]
    },
    {
      title: "Generative AI – Introduction and Application – IBM",
      subtitle:
        "Covered the foundations of Generative AI and its applications across domains.",
      image: require("./assets/images/ibmLogo.webp"),
      imageAlt: "IBM Gen AI",
      footerLink: [
        {
          name: "View Certification",
          url: "https://your-link-here.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Watch Me 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    {
      image: require("./assets/images/undeadLogo.webp"),
      projectName: "Undead MetaClash",
      projectDesc:
        "Web3 multiplayer battle game with NFT-based characters, maps, and assets. Developed gameplay systems, UI, and decentralized interactions.",
      footerLink: [
        {
          name: "Watch Video",
          url: "https://drive.google.com/file/d/1hHq9Nw8Ii1KILZfki_oFUBs5xZ3-HhbH/view?usp=sharing" // Replace with actual link
        }
      ]
    },
    {
      image: require("./assets/images/Metator.png"), // your thumbnail image
      alt: "Watch Metascapes Demo",
      link: "https://drive.google.com/file/d/1SbILpmdkWNnk-MA77G_9hQ-zqCLdmrr6/view?usp=sharing" // or full Google Drive link
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "NEED A GAMEDEV, XR, OR WEB3 SPECIALIST TO LEVEL UP YOUR PROJECT? I’M JUST A MESSAGE AWAY.",
  number: "+92-321 534 9934",
  email_address: "bilxao.bs@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
