
import {
  backend,
  creator,
  mobile,
  web,
  
  gearXpert,
  project2,
  project3,
  
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,

  python,
  javascript,
  c,
  r,
  bitbucket,
  nodejs,
  vitejs,
  keras,
  azure,
  github,
  figma,
  reactjs,
  graphql,
  mysql,
  seaborn,
  tensorflow,
  numpy,
  railway,
  matplotlib,
  eslint,
  sqllite,
  tailwind,
  socketio,
  metamask,
  html,
  powerbi,
  django,
  opencv,
  postgresql,
  reactrouter,
  canva,
  powershell,
  aws,
  threejs,
  firebase,
  postman,
  fastapi,
  scikitlearn,
  bootstrap,
  vercel,
  heroku,
  ollama,
  gitlab,
  ubuntu,
  excel,
  pandas,
  mongodb,
  linux,
  docker,
  render,
  express,
  livekit,
  solidity,
  swagger,
  typescript,
  css,
  streamlit,
  djangorest,
  redux,
  flask,
  pytorch,
  git,
  openai,

} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "Bitbucket",
    icon: bitbucket,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Vite.js",
    icon: vitejs,
  },
  {
    name: "Keras",
    icon: keras,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Seaborn",
    icon: seaborn,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Railway",
    icon: railway,
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    name: "ESLint",
    icon: eslint,
  },
  {
    name: "SQLite",
    icon: sqllite,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Socket.IO",
    icon: socketio,
  },
  {
    name: "MetaMask",
    icon: metamask,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "PowerShell",
    icon: powershell,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Scikit-Learn",
    icon: scikitlearn,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
  {
    name: "Heroku",
    icon: heroku,
  },
  {
    name: "Ollama",
    icon: ollama,
  },
  {
    name: "GitLab",
    icon: gitlab,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "React Router",
    icon: reactrouter,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Render",
    icon: render,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "LiveKit",
    icon: livekit,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Swagger",
    icon: swagger,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "Streamlit",
    icon: streamlit,
  },
  {
    name: "Django REST",
    icon: djangorest,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "OpenAI",
    icon: openai,
  },
];


const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
    {
    testimonial:
      "Consistently delivered high-quality computer vision solutions, especially in PAN card detection—technically sharp, reliable, and a strong asset on every project Prajwal contributed to.",
    name:"Ragavendra H S",
    designation:"Managin Director",
    company:"Aarushi Consulting & Service Pvt Limited",
    image:firstTestimonial,
    linkedin: "https://www.linkedin.com/in/aquarag/",
  },
  {
    testimonial:
      "Prajwal blends analytical depth with practical problem-solving—his ML models enhanced our decisions. Reliable, curious, and detail-oriented—a true asset to any team.",
    name:"Deepika D",
    designation:"Data Analyst",
    company:"Wildfox Business Advocacy",
    image:secondTestimonial,
    linkedin: "https://www.linkedin.com/in/deepikad04/",
  },
  {
    testimonial:
      "Provided a well-built Web3 full-stack solution that worked seamlessly and added clear value. His work was Reliable, efficient, impactful, pleasure to integrate , and easy to collaborate with.",
    name:"Sarang Pani",
    designation:"Chief Executive Officer",
    company:"Inovact Pvt Ltd",
    image:thirdTestimonial,
    linkedin: "https://www.linkedin.com/in/sarang-pani-14ab1919b/",
  },
];

const projects = [
  {
    name: "Tekisky Mart",
    description:
      "Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "GearXpert",
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "GoGroove-Ecommerce",
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
