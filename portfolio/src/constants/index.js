import { FaLinkedin, FaEnvelope, FaCode, FaCoffee } from 'react-icons/fa';

export const PERSONAL_INFO = {
  name: "L.",
  title: "Detective L",
  tagline: "Turning code into clues. Every bug solved is a case closed.",
  email: "shivarajmani2005@gmail.com",
};

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mshivaraj/",
    icon: FaLinkedin,
    color: "#0077b5"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/shivarajm8234/",
    icon: FaCode,
    color: "#ffa116"
  },
  {
    name: "Email",
    url: "mailto:shivarajmani2005@gmail.com",
    icon: FaEnvelope,
    color: "#ea4335"
  },
  {
    name: "Support",
    url: "https://buymeacoffee.com/shivarajm",
    icon: FaCoffee,
    color: "#FFDD00"
  }
];

export const SKILLS = [
  { name: "Python", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "AI/ML", level: 88 },
  { name: "Cybersecurity", level: 80 },
];

export const PROJECTS = [
  {
    id: "001",
    title: "AI Marketing Automation",
    status: "Active Investigation",
    description: "Intelligent automation system for social media and campaigns featuring predictive analytics.",
    tech: ["Python", "Groq AI", "React"],
  },
  {
    id: "002",
    title: "Risk-Based Proctoring",
    status: "Case Closed",
    description: "Behavioral analysis system for academic integrity using Machine Learning to detect patterns.",
    tech: ["TensorFlow", "OpenCV", "Node.js"],
  },
  {
    id: "003",
    title: "CNN Road Analyzer",
    status: "Ongoing",
    description: "Computer vision application for real-time infrastructure and traffic analysis.",
    tech: ["Python", "CNN", "Firebase"],
  },
  {
    id: "004",
    title: "Procore Futuristic Landing", // Freelance
    status: "Case Closed",
    description: "High-performance, futuristic landing page developed for a freelance client.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    link: "https://procore-futuristic-landing.vercel.app/"
  }
];

export const STATISTICS = [
  { label: "Cases Solved", value: "50+" },
  { label: "Checkmate Rate", value: "98%" }, // Renamed from Success Rate for flavor
  { label: "Avg Deduction Time", value: "24h" },
];
