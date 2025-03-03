import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#Projects" },
  { name: "Experience", link: "#Experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I build scalable web apps with React, Next.js, .NET, and C#, ensuring reliability, security, and a seamless user experience. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/ae1.png",
    spareImg: "",
  },
  // {
  //   id: 2,
  //   title: "Tech enthusiast with a passion for development.",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "",
  //   spareImg: "",
  // },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/ae2.png",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Foode Alert Web App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/ae3.png",
    spareImg: "/ae3.png",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Telugu Films Insights",
    subtitle: "TFI",
    des: "TFI is a platform for Telugu movie enthusiasts, offering reviews, insights, and a chance to win free movie tickets through a lottery for submitting reviews. It connects fans and offers a community-driven approach to Telugu cinema.",
    img: "/image.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/Node.js.svg",
      "/firestore.svg",
      "/Gitrepo.svg",
      "/git.svg",
    ],
    link: "https://telugufilminsights.com/home",
  },
  {
    id: 2,
    title: "Foode Alert App",
    subtitle: "FAA",
    des: "FoodieAlert is an app designed to notify users about food truck locations and availability. It allows food truck owners to send updates to subscribers, helping customers stay informed about their favorite food trucks in real-time.",
    img: "/foode.png",
    iconLists: [
      "/next.svg",
      "JavaScript.svg",
      "/tail.svg",
      "/Node.js.svg",
      "/MongoDB.svg",
      "/Gitrepo.svg",
      "/git.svg",
    ],
    link: "https://foodie-alert.vercel.app/login",
  },
  {
    id: 3,
    title: "Sleek Portfolio",
    subtitle: "Portfolio",
    des: "Welcome to my portfolio! Here, you’ll find a showcase of my work, projects, and skills, highlighting my journey as a full-stack developer.",
    img: "/portfolio.png",
    iconLists: [
      "/next.svg",
      "JavaScript.svg",
      "/tail.svg",
      "/ts.svg",
      "/Gitrepo.svg",
      "/git.svg",
    ],
    link: "https://vamsitejchowdary.com",
  },
  {
    id: 4,
    title: "Hours Tracker",
    subtitle: "Tracker",
    des: "A simple work-hour tracking app where employees can clock in, clock out, and log hours manually, inspired by Aramark/Sodexo systems for efficient shift management.",
    img: "/time.svg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/Node.js.svg",
      "/MongoDB.svg",
      "/Gitrepo.svg",
      "/git.svg",
    ],
    link: "https://hourstracker.onrender.com",
  },
];

export const testimonials = [
  {
    quote:
      "Vamsi is not just a software engineer; he is a builder.. His ability to turn ideas into reality—like Telugu Film Insights and FoodieAlert—shows his strong entrepreneurial spirit. He does not just develop; he strategizes, markets, and scales his projects.",
    name: "Mahi Sathvik",
    title: "Student at IIT Kharagpur",
  },
  {
    quote:
      "Vamsi is not just a great colleague; he iss the kind of person who brings energy, ideas, and a get-it-done attitude to everything he works on. Whether it is brainstorming the next big thing or debugging a tricky issue, he iss always got your back. Beyond work, he is a solid friend—someone you can count on for a good laugh, honest advice, and endless enthusiasm for new projects. Definitely the guy you want on your team!”",
    name: "Keevan",
    title: "HR & Account Manager at TrueChoicePack",
  },
  {
    quote:
      "Vamsi is the kind of friend who iss always up for an adventure—whether it is building something cool, talking about the next big idea, or just chilling and having a good time. He is driven, creative, and always willing to help, no matter what. If you need someone to hype you up, give honest advice, or just crack jokes when things get stressful, Vamsi is that guy. Lucky to have him as a friend!",
    name: "Pavan",
    title: "Business Analyst at Novartis",
  },
  {
    quote:
      "Vamsi is the friend who lights up any room with his energy and ideas. Whether it is tackling a new project, brainstorming the next big thing, or just enjoying a laid-back day, he is always in. He is passionate, thoughtful, and has a way of making even the toughest challenges feel manageable. If you need a partner in crime, a sounding board for your wildest ideas, or someone to just laugh with, Vamsi is got your back. You are lucky to have him by your side!",
    name: "Ganesh",
    title: "Freelancer",
  },
];

export const techs = [
  {
    id: 1,
    name: "Next.js",
    img: "/nextjs.svg",
  },
  {
    id: 2,
    name: "React",
    img: "/React.svg",
  },
  {
    id: 3,
    name: ".NET",
    img: "/netcore.svg",
  },
  {
    id: 4,
    name: "C#",
    img: "/CSharp.svg",
  },
  {
    id: 5,
    name: "Python.",
    img: "/Python.svg",
  },
  {
    id: 6,
    name: "Java.",
    img: "/Java.svg",
  },
  {
    id: 7,
    name: "JavaScipt",
    img: "/JavaScript.svg",
  },
  {
    id: 8,
    name: "TypeScript",
    img: "/TypeScript.svg",
  },
  {
    id: 9,
    name: "XML",
    img: "/XML.svg",
  },
  {
    id: 10,
    name: "JQuery",
    img: "/jQuery.svg",
  },
  {
    id: 11,
    name: "Ndde.js",
    img: "/Node.js.svg",
  },
  {
    id: 12,
    name: "Azure.",
    img: "/Azure.svg",
  },
  {
    id: 13,
    name: "Aws",
    img: "/AWS.svg",
  },
  {
    id: 14,
    name: "Devops",
    img: "/Devops.svg",
  },
  {
    id: 15,
    name: "MongoDB",
    img: "/MongoDB.svg",
  },
  {
    id: 16,
    name: "FireStore",
    img: "/firestore.svg",
  },
  {
    id: 17,
    name: "SQLite",
    img: "/SQLite.svg",
  },
  {
    id: 18,
    name: "Git",
    img: "/Gitrepo.svg",
  },
  {
    id: 19,
    name: "VS Code",
    img: "/VSCode.svg",
  },
  {
    id: 20,
    name: "Git Hub",
    img: "/git.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Tech Intern",
    desc: "Utilized AWS Lightsail and CloudWatch for seamless hosting and real-time monitoring of websites, implementing health checks to ensure optimal performance. Configured AWS SNS to enable efficient, cross-platform notification systems. Focused on maintaining high uptime and adhering to security compliance for websites hosted on AWS. Additionally, led the end-to-end development of a new e-commerce website, leveraging minimal code tools and rapid deployment methodologies to ensure quick turnaround and functionality.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    startDate: "Nov 2024",
    endDate: "Present",
    companyLogo: "/tcp-2.png",
  },
  {
    id: 2,
    title: "Associate Full Stack Developer",
    desc: "Managed the upkeep of the vendor management project, simplifying the process for external employees to submit timesheets and leave requests. Collaborated on the bot framework for the West Alert System endeavor, enhancing employee engagement by enabling them to receive alerts and reminders from a user-friendly chatbot interface.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    startDate: "Oct 2022",
    endDate: "Jul 2023",
    companyLogo: "/westpharama.png",
  },
  {
    id: 3,
    title: "Graduate Software Developer",
    desc: "Developed a stock market portfolio application during my internship, offering users the functionality to effortlessly manage their stock selections. The app enables users to easily add or remove stocks from their portfolio before proceeding to a streamlined checkout process. And also worked on second phase of vendor management system which helps HRs from vendors approve and send system generated report to WEST company HR eliminating human work.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    startDate: "Jan 2022",
    endDate: "Sep 2022",
    companyLogo: "/westpharama.png",
  },
  {
    id: 4,
    title: "Software Intern",
    desc: "Developed a complaint registration portal that allows users to easily file complaints through a web application, eliminating the need to visit a police station. The platform provides a seamless, user-friendly interface for submitting grievances, making it more accessible for individuals to report issues from any location at their convenience. This system improves efficiency by streamlining the process, ensuring quicker resolution times and reducing the administrative burden on local authorities, while also maintaining secure data handling for users complaints.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
    startDate: "Jan 2021",
    endDate: "Nov 2021",
    companyLogo: "/techciti.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/VamsiTejchowdary",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/vamsitejchowdary/",
  },
];
export const education = [
  {
    id: 1,
    university: "University of Cincinnati",
    course: "Master of Engineering in Computer Science",
    startDate: "Aug 2023",
    endDate: "May 2025",
    collegeImage: "/uc.png",
    city: "Cincinnati",
    countryFlag: "/us.svg",
    cgpa: "3.951/4.0",
  },
  {
    id: 2,
    university: "Karunya Institute of Technology",
    course: "Bachelor of Technology in Computer Science",
    startDate: "Jun 2018",
    endDate: "May 2022",
    college: "Example Institute of Technology",
    collegeImage: "/karunya.png",
    city: "Coimbatore",
    countryFlag: "/in.svg",
    cgpa: "8.81/10",
  },
];
