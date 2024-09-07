// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
};

// Home Page
const greeting = {
  title: "Hi",
  title2: " I'm Aaliyah Jaleel",
  logo_name: "Aaliyah Jaleel",
  // nickname: "",
  full_name: "Aaliyah Jaleel",
  subTitle1: "Technical Project Manager",
  subTitle2: "Software Engineering Specialist",
  subTitle3: "University of Toronto Student",
  subTitle4: "Public Speaking Enthusiast",
  //resumeLink:
    //"https://drive.google.com/file/d/1-SSCPhVG80IDtpx7_TPpsLfJyEA7NEtv/view?usp=drive_link",
  mail: "mailto:aaliyahjaleel1234@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/aajaleel",
  linkedin: "https://www.linkedin.com/in/aaliyahjaleel/",
  gmail: "aaliyahjaleel1234@gmail.com"
};

const skills = {
  data: [
    {
      _id: "354c54b7-ffd8-40f1-972f-1d006733df25",
      title: "Software Engineering",
      fileName: "", //FullStackImg
      skills: [
        "💡 Developing responsive websites to improve performance and enhance UX",
        "💡 Deploying scalable architecture to ensure reliability across platforms",
        "💡 Creating mobile applications with real-time features to meet user needs",
      ],
      softwareSkills: [

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "Vercel",
          fontAwesomeClassname: "skill-icons:vercel-light",
          style: {
            color: "gray",
            fill: "gray",
            width: "1em",
            height: "1em",
          },
        },


        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#4479A1",
          },
        },

      ],
    },
    {
      _id: "c026fe64-1542-42b0-84ab-9311840c169f",
      title: "Project Management",
      fileName: "", //CloudInfraImg
      skills: [
        "💡 Leading process improvements and defect resolution for efficient operations",
        "💡 Coordinating between development and business teams to optimize project delivery",
        "💡 Increasing stakeholder engagement through risk management and documentation",
      ],
      softwareSkills: [
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
            width: "1em",
            height: "1em"
          }
        },
        {
          skillName: "SAP",
          fontAwesomeClassname: "simple-icons:sap",
          style: {
            color: "#0FAAFF"
          }
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811"
          }
        },
        {
          skillName: "Confluence",
          fontAwesomeClassname: "simple-icons:confluence",
          style: {
            color: "#172B4D"
          }
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      _id: "354c54b7-ffd8-40f1-972f-1d006733df25",
      title: "Public Speaking",
      fileName: "", //DesignImg
      skills: [
        "💡 Emceeing high-energy events, each tailored to resonate with unique audiences",
        "💡 Directing public relations efforts, ensuring clear communication and impactful execution",
        "💡 Creatively delivering complex concepts to maximize crowd engagement",
      ],
      softwareSkills: [],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Technical Project Manager",
      subtitle: "Procter & Gamble",
      //logo_path: "PGLOGO.png",
      alt_name: "Amrita University",
      duration: "Jan 2024 - Jan 2025",
      descriptions: [
        "💡 Leading critical SAP projects and optimized supply chain delivery across regions",
      ],
    },
    {
      title: "Technician, Invigilator",
      subtitle: "Centennial College",
      //logo_path: "Centennial.png",
      alt_name: "GGSIPU",
      duration: "May 2023 - Feb 2024",
      descriptions: [
        "💡 Maintained exam integrity by managing technical setups for secure testing",
      ],
    },
    {
      title: "IT Support Specialist",
      subtitle: "University of Toronto",
      //logo_path: "UOFT.png",
      alt_name: "GGSIPU",
      duration: "Aug 2022 - Aug 2023",
      descriptions: [
        "💡 Provided tech support and managed lecture recordings for seamless access",
      ],
    },
    {
      title: "Technical Specialist",
      subtitle: "Apple",
      //logo_path: "Apple.png",
      alt_name: "GGSIPU",
      duration: "May 2022 - Oct 2022",
      descriptions: [
        "💡 Resolved iOS issues and provided top-tier customer service at the Genius Bar",
      ],
    },
    {
      title: "Founding Engineer, Web Developer",
      subtitle: "Zippy Power Banks",
      //logo_path: "ZIP.jpg",
      alt_name: "GGSIPU",
      duration: "Dec 2022 - Present",
      descriptions: [
        "💡 Launched a startup tailored to enhancing Power Bank accessibility",
      ],
    },
    {
      title: "Software Engineer / UX Designer",
      subtitle: "West Oak Design Inc.",
      //logo_path: "westoakdesign_logo.jpeg",
      alt_name: "GGSIPU",
      duration: "May 2021 - Aug 2021",
      descriptions: [
        "💡 Developed and optimized a React Native e-commerce platform for STEM products",
      ],
    },



  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Leadership",
  subtitle: "Extracurriculars & Volunteerism",
  description:
    "Giving back to the community is a never-ending cycle - the efforts put into this world always find their way back to their owner",
  // Replace the image path with a video embed
  header_video: "https://www.youtube.com/embed/1gWvLHRY2o0 ", // Replace YOUR_VIDEO_ID with the actual video ID
  sections: {
    title: "Volunteerism & Extracurriculars",
    experiences: [
      {
        title: "Director of Events, Emcee",
        company: "TEDx uoftscarborough",
        //logo_path: "tedX.JPEG",
        link: "www.tedxuoftscarborough.com",
        color: "#FFFFFF",
      },
      {
        title: "Vice President",
        company: "Serendib Youth Canada",
       // logo_path: "SYCLOGO.png",  // This is the image you uploaded
        color: "#FFFFFF",
      },      

      {
        title: "Director of Computer Science",
        company: "Scarborough Campus Student Union",
        //logo_path: "scsu.JPEG",
        color: "#FFFFFF",
      },
      {
        title: "Dragon Boat Team Member",
        company: "UTSC Crimson Dragons",
        //logo_path: "crimson.png",
        color: "#FFFFFF",
      },

      {
        title: "Computer Science Gala Director",
        company: "Association of Math/CS",
        //logo_path: "amacss2.png",
        color: "#FFFFFF",
      },

      {
        title: "Event Chair",
        company: "Relay for Life",
        //logo_path: "r4l.png",
        color: "#FFFFFF",
      },
  
      {
        title: "Keynote Speaker",
        company: "Ecospark",
        //logo_path: "ecospark.webp",
        color: "#FFFFFF",
      },

      {
        title: "First Year Director",
        company: "MUSLIM STUDENT ASSOCIATION",
        //logo_path: "msa.jpeg",
        color: "#FFFFFF",
      },

      
    ],
  },
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Academic understanding should be paired with real-world application, and technical projects are the perfect depiction of that union",
  avatar_image_path: "", //Elle.jpg
};

const projects = {
  data: [
    {
      id: "project-0",
      name: "Eventual",
      repoUrl: "https://github.com/aajaleel/Eventual",
      description:
        "Networking website for students to attend tailored events with like-minded students",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Stripe",
          iconifyClass: "logos:stripe",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
      ],
    },
    {
      id: "project-1",
      name: "Acourse",
      repoUrl: "https://github.com/aajaleel/Acourse",
      description:
        " Mobile app for students to construct projected timetables based on program requirements and prerequisites at UofT",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
        {
          name: "Framer Motion",
          iconifyClass: "logos:framer",
        },
      ],
    },
    {
      id: "project-2",
      name: "SysProg",
      url: "",
      repoUrl: "https://github.com/aajaleel/SysProg",
      description:
        "Modular C program to monitor OS processes, displaying memory/CPU usage and graphical FD Table insights",
      languages: [
        {
          name: "Angular",
          iconifyClass: "logos:angular-icon",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        {
          name: "Handlebars",
          iconifyClass: "vscode-icons:file-type-handlebars",
        },
      ],
    },
    {
      id: "project-3",
      name: "Flora",
      repoUrl: "https://github.com/aajaleel/Flora",
      description: "An immersive MIPS Assembly Platformer game with multiplayer 2-D GUI gameplay",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "project-4",
      name: "FuelUp",
      url: "",
      repoUrl: "https://github.com/aajaleel/FuelUp",
      description: "Gas Price Matching App to enable users to efficiently locate available resources",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React Reveal",
          iconifyClass: "simple-icons:scrollreveal",
        },
        {
          name: "Styled Components",
          iconifyClass: "vscode-icons:file-type-styled",
        },
      ],
    },
    {
      id: "project-5",
      name: "Cyber Badge Pass",
      url: "",
      repoUrl: "",
      description:
        "An ML-based solution to real-world cybersecurity issue of misswiped entry badges at P&G",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Headshot.jpg",
    description:
      "Please feel free to reach out through any of the forums below - I'd love to chat!",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
