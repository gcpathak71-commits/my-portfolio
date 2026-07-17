export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  features: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[]; // level out of 100 for animations
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  details?: string;
}

export interface Achievement {
  title: string;
  organization: string;
  year: string;
  details?: string;
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  leetcode: string;
  summary: string;
  skills: SkillCategory[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
}

export const profileData: Profile = {
  name: "Anurag Pathak",
  title: "AI & Machine Learning Engineer | Full Stack Developer",
  email: "gc.pathak71@gmail.com",
  phone: "+91-9956451552",
  linkedin: "https://linkedin.com/in/anurag-pathak-b86a302a9",
  github: "https://github.com/gcpathak71-commits",
  leetcode: "https://leetcode.com/u/ggPhbYcM8M/",
  summary: "Final-year B.Tech student in Artificial Intelligence and Machine Learning with hands-on experience in Python backend development, RESTful API design, and production-ready machine learning systems. Proficient in Python, Flask, TensorFlow, Scikit-learn, SQL/SQLite, Firebase, and Google Cloud Vertex AI. Skilled in building end-to-end ML pipelines, deep learning models (ANN, RNN, LSTM, CNN), NLP applications, and scalable backend services with database integration. Oracle Certified in Cloud Infrastructure and AI Foundations. Seeking roles in Python Backend Development, Machine Learning Engineering, or Data Science.",
  skills: [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Core Java", level: 85 },
        { name: "SQL", level: 90 },
        { name: "HTML5 / CSS3", level: 85 },
        { name: "JavaScript / TypeScript", level: 80 }
      ]
    },
    {
      category: "Backend & CS Fundamentals",
      skills: [
        { name: "REST API Development", level: 90 },
        { name: "Flask", level: 92 },
        { name: "Data Structures & Algorithms (DSA)", level: 85 },
        { name: "Object-Oriented Programming (OOP)", level: 88 },
        { name: "Database Management Systems (DBMS)", level: 85 },
        { name: "SQL / SQLite", level: 90 },
        { name: "Operating Systems", level: 80 },
        { name: "Version Control (Git & GitHub)", level: 92 }
      ]
    },
    {
      category: "Machine Learning & Deep Learning",
      skills: [
        { name: "Regression & Classification", level: 92 },
        { name: "Clustering Algorithms", level: 88 },
        { name: "Artificial Neural Networks (ANN)", level: 85 },
        { name: "RNN / LSTM / CNN", level: 85 },
        { name: "Natural Language Processing (NLP)", level: 90 },
        { name: "Model Training & Hyperparameter Tuning", level: 88 },
        { name: "Vertex AI & Gemini LLM Integration", level: 85 }
      ]
    },
    {
      category: "Data Analytics",
      skills: [
        { name: "NumPy & Pandas", level: 92 },
        { name: "Matplotlib & Seaborn", level: 90 },
        { name: "Exploratory Data Analysis (EDA)", level: 92 },
        { name: "Power BI", level: 80 },
        { name: "Data Visualization & Statistical Analysis", level: 88 }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Jupyter Notebook & Google Colab", level: 95 },
        { name: "Firebase (Auth, Firestore, Chat)", level: 85 },
        { name: "Flutter (UI Development)", level: 80 },
        { name: "Google Cloud Platform (GCP)", level: 82 }
      ]
    }
  ],
  projects: [
    {
      id: "getyourtable",
      title: "GetYourTable",
      subtitle: "AI-Powered Restaurant Recommendation & Table Booking System",
      year: "2025",
      description: "A full-stack AI-powered restaurant recommendation and table-booking web application using Flask and RESTful API design. Built a content-based ML recommendation engine using TF-IDF vectorization and cosine similarity, combined with rating/popularity signals and a collaborative-filtering personalization layer based on booking history. Implemented a self-initializing SQLite3 backend and an automated end-to-end reservation workflow.",
      techStack: ["Python", "Flask", "Scikit-learn", "TF-IDF", "Cosine Similarity", "SQLite3", "REST API", "Jinja2", "HTML/CSS", "UUID"],
      liveLink: "https://get-your-table.vercel.app/",
      githubLink: "https://github.com/gcpathak71-commits/GetYourTable",
      features: [
        "Content-based ML recommendation using TF-IDF & Cosine Similarity",
        "Collaborative-filtering personalization layer based on booking logs",
        "Automated end-to-end booking & reservation workflow",
        "Self-initializing SQLite3 database backend"
      ]
    },
    {
      id: "campusconnect",
      title: "CampusConnect",
      subtitle: "AI-Powered Belonging Semantic Matching Engine",
      year: "2026",
      description: "An AI-powered semantic matching platform using Vertex AI and Gemini LLM to analyze natural language student profiles and connect users to communities by intent. Integrated Firebase for real-time database, authentication, and chat; deployed cross-platform UI in Flutter, enabling personalized recommendations beyond keyword-based search.",
      techStack: ["Firebase Auth", "Firestore", "Firebase Chat", "Flutter (UI)", "Vertex AI + Gemini", "Real-Time Updates", "NLP"],
      liveLink: "https://campus-connect-blond-ten.vercel.app/#/login",
      githubLink: "https://github.com/gcpathak71-commits/CampusConnect",
      features: [
        "Semantic matching with Vertex AI and Gemini LLM to connect students by intent",
        "Real-time chatting, authentication, and database features through Firebase",
        "Cross-platform responsive layout using Flutter UI",
        "Personalized community recommendations based on natural language analysis"
      ]
    },
    {
      id: "studentperformance",
      title: "Student Performance Prediction",
      subtitle: "Multiclass Academic Performance Classification using DNN",
      year: "2026",
      description: "Designed and trained a multiclass classification Deep Neural Network (DNN) to predict student academic performance across grade categories. Applied an end-to-end ML pipeline: data cleaning, feature engineering, One-Hot/Ordinal Encoding, Standard Scaling, and SMOTE for class-imbalance handling, achieving over 88% classification accuracy.",
      techStack: ["TensorFlow", "Keras", "Scikit-learn", "Python", "SMOTE", "Feature Engineering", "DNN", "Data Analytics"],
      liveLink: "https://gcpathak71-commits.github.io/Student-Performance-Prediction-/",
      githubLink: "https://github.com/gcpathak71-commits/Student-Performance-Prediction-",
      features: [
        "Deep Neural Network (DNN) multiclass classifier",
        "Robust pipeline including SMOTE for handling class-imbalance",
        "Detailed feature engineering and statistical preprocessing scaling",
        "Achieved >88% classification accuracy across all academic grades"
      ]
    }
  ],
  education: [
    {
      id: "grad",
      degree: "B.Tech in Computer Science Engineering (Artificial Intelligence and Machine Learning)",
      institution: "Shri Ramswaroop Memorial College of Engineering & Management, Lucknow",
      duration: "2023 – Present",
      grade: "Percentage: 74.68% (First Class with Distinction)"
    },
    {
      id: "boards",
      degree: "Boards (10+2), PCM with Computer Science",
      institution: "Lucknow Public College, Vinamra Khand, Gomti Nagar, Lucknow",
      duration: "2021 – 2023",
      grade: "High School Certification"
    }
  ],
  certifications: [
    {
      name: "Fundamentals of Machine Learning and Artificial Intelligence",
      issuer: "AWS Training & Certification",
      year: "2026",
      details: "Comprehensive training in cloud-based ML workflows, AWS SageMaker, and AI services."
    },
    {
      name: "Oracle Cloud Infrastructure & Certified AI Foundation Associate",
      issuer: "Oracle Certified Foundation Associate",
      year: "2025",
      details: "Official certification in OCI Cloud Infrastructure architectures and foundational AI principles."
    },
    {
      name: "Core Java Certificate of Completion",
      issuer: "Precursor Info Solutions Pvt. Ltd.",
      year: "2026"
    },
    {
      name: "Machine Learning Fundamentals Pathway",
      issuer: "L&T EduTech",
      year: "2025"
    }
  ],
  achievements: [
    {
      title: "3rd Position Winner",
      organization: "CodeRush Hackathon, Google Developer Groups on Campus (SRMCEM)",
      year: "2026",
      details: "Won third place by developing an innovative AI-powered web prototype under tight time constraints."
    },
    {
      title: "GenAI Powered Data Analytics Job Simulation",
      organization: "Virtual Internship, TATA",
      year: "2026",
      details: "Completed industry-grade simulation tasks applying generative AI to business intelligence."
    },
    {
      title: "India AI Impact Buildathon",
      organization: "HCL GUVI Certificate of Participation",
      year: "2026"
    },
    {
      title: "Summer Internship in AIML",
      organization: "SRDT Pvt. Ltd.",
      year: "2025",
      details: "Focused on training and deploying real-world machine learning classifiers and NLP parsers."
    },
    {
      title: "Code Clash Participant",
      organization: "GeeksforGeeks",
      year: "2023"
    }
  ]
};
