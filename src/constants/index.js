
import {
  backend,
  creator,
  mobile,
  web,

  rareminds,
  aarushi,
  kulturehire,
  wildfox,
  
  blog,
  brain,
  ethinicity,
  forest,
  pancard,
  plant,
  pythonblock,
  stock,
  vendor,
  mediumpilot,
  
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
    title: "Mern-Stack Developer",
    icon: mobile,
  },
  {
    title: "AI/ML Developer",
    icon: backend,
  },
  {
    title: "Web3 Developer",
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
    title: "Machine Learning Intern",
    company_name: "Wildfox Business Advocacy",
    icon:wildfox,
    iconBg: "#383E56",
    date: "Feb 2025 - May 2025",
    points: [
      "Built and benchmarked time series models (ARIMA, ETS, Prophet) with advanced feature engineering, achieving 90–94% forecasting accuracy using rolling-window validation",
      "Fine-tuned DistilBERT for Indian name classification by curating a labeled dataset, extending tokenization, and integrating rule-based layers for improved precision.",
    ],
  },
    {
    title: "Data Analyst Intern",
    company_name: "KultureHire",
    icon:kulturehire,
    iconBg: "#383E56",
    date: "Jul 2024 - Sep 2024",
    points: [
      "Analyzed the career aspirations of Generation Z by collecting, processing, and querying data with MySQL, ensuring data integrity and accuracy.",
      "Developed interactive dashboards in Power BI and managed data storage in Excel, providing actionable insights and enhancing data-driven decision-making processes.",
    ],
  },
    {
    title: "Project Intern",
    company_name: "Aarushi Infotech",
    icon:aarushi,
    iconBg: "#383E56",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Engineered a highly accurate PAN card detector utilizing OpenCV and Python, incorporating OCR for precise text extraction.",
      "Seamlessly integrated the detector into a complex application, significantly enhancing its functionality.",
    ],
  },
  {
    title: "Intern",
    company_name: "RareMinds",
    icon: rareminds,
    iconBg: "#383E56",
    date: "Jul 2023 - Sep 2023",
    points: [
      "Designed and developed a responsive personal portfolio leveraging HTML, CSS, and JavaScript, complete with interactive project showcases.",
      "Conducted rigorous usability testing, iteratively refining the UI to optimize user experience.",
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
    name: "MediumPilot",
    description:
      "MediumPilot is a tool that lets you automatically share your latest Medium articles to your LinkedIn profile. Just sign in with Google, paste your Medium RSS feed and LinkedIn API credentials.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "git",
        color: "blue-text-gradient",
      },
      {
        name: "vercel",
        color: "white-text-gradient",
      },
 
    ],
    image: mediumpilot,
    source_code_link: "https://github.com/Prajwal18-MD/MediumPilot",
  },
  {
    name: "Brain-Age Prediction",
    description:
      "Brain Age Prediction is an AI-based web application that analyzes MRI scans to estimate an individual's remaining brain age using deep learning models, deployed through a user-friendly interface.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "white-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
 
    ],
    image: brain,
    source_code_link: "https://github.com/Prajwal18-MD/Brain_Production",
  },
  {
    name: "Ethinicity Detector",
    description:
      "The Ethnicity Identifier project involved developing a machine learning model to predict an individual’s religion, and mother tongue from their full name, achieving ~90% accuracy.",
    tags: [
      {
        name: "openai",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
      {
        name: "fastapi",
        color: "white-text-gradient"
      }
    ],
    image: ethinicity,
    source_code_link: "https://github.com/Prajwal18-MD/Ethinicity",
  },
  {
    name: "Stock-Prediction",
    description:
      "Developed a user-friendly Streamlit app for short-term stock price prediction (95% accuracy) with portfolio and option strategy optimization for future references using deep learning.",
    tags: [
      {
        name: "deep-learning",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "white-text-gradient",
      },
      {
        name: "finance",
        color: "green-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://github.com/Prajwal18-MD/Stock_prediction",
  },
  {
    name: "Forest-Fire Prediction",
    description:
      "Developed a forest fire prediction system using Django and Random Forest Regressor, achieving 94% accuracy by analyzing inputs like temperature, humidity, latitude, and longitude.",
    tags: [
      {
        name: "django",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "white-text-gradient",
      },
    ],
    image: forest,
    source_code_link: "https://github.com/Prajwal18-MD/forest_fire_main",
  },
  {
    name: "Plant-Disease Prediction",
    description:
      "Designed and implemented a plant disease detection system using image processing to identify disease presence and confidence levels from leaf images, enabling early diagnosis.",
    tags: [
      {
        name: "python",
        color: "white-text-gradient",
      },
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "cnn",
        color: "pink-text-gradient",
      },
    ],
    image: plant,
    source_code_link: "https://github.com/Prajwal18-MD/plant_disease_detection",
  },
  {
    name: "Pan Card Tampering",
    description:
      "Built an advanced PAN card tampering detection module using OpenCV and OCR for accurate text extraction, enhancing document verification reliability within a larger application.",
    tags: [
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "opencv",
        color: "white-text-gradient",
      },
      {
        name: "ocr",
        color: "blue-text-gradient",
      },
    ],
    image: pancard,
    source_code_link: "https://github.com/Prajwal18-MD/pancard-tampering",
  },
  {
    name: "Python Blockchain",
    description:
      "Implemented a peer-to-peer transaction network simulating blockchain and hashing principles, enabling secure, private and verifiable exchanges between nodes using Python.",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "rest-api",
        color: "white-text-gradient",
      },
      {
        name: "blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: pythonblock,
    source_code_link: "https://github.com/Prajwal18-MD/python-blockchain",
  },
  {
    name: "Blogging Website",
    description:
      "Created a full-stack blogging website with complete features including user authentication, blog creation, editing, and commenting, offering a seamless writing and reading experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/Prajwal18-MD/Blog-writer",
  },
  {
    name: "Vendor Ageing Analysis",
    description:
      "Designed a comprehensive vendor ageing analysis dashboard in Power BI, transforming Excel data into insightful visual reports for tracking revenue flow, customer insights and payment cycles.",
    tags: [
      {
        name: "powerbi",
        color: "green-text-gradient",
      },
      {
        name: "excel",
        color: "blue-text-gradient",
      },
      {
        name: "dax",
        color: "pink-text-gradient",
      },

    ],
    image: vendor,
    source_code_link: "https://github.com/Prajwal18-MD/vendor_ageing_analysis",
  },
  
  
];

export { services, technologies, experiences, testimonials, projects };
