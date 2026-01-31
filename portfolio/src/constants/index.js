import { FaLinkedin, FaEnvelope, FaCode, FaCoffee } from 'react-icons/fa';

export const PERSONAL_INFO = {
  name: "Gojo Satoru",
  title: "The Honored One",
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
  { name: "TailwindCSS", level: 92 },
  { name: "React", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "Groq AI", level: 88 },
  { name: "Web Scraping", level: 90 },
  { name: "Flask", level: 82 },
  { name: "Firebase", level: 80 },
  { name: "PostgreSQL", level: 78 },
  { name: "MongoDB", level: 75 },
];

export const PROJECTS = [
  {
    id: "001",
    title: "AI Marketing Automation Platform",
    status: "Active Investigation",
    description: "Intelligent automation system for social media, email campaigns, and job applications. Features predictive analytics, content optimization, and multi-platform integration.",
    tech: ["Python", "Groq AI", "Flask", "React", "PostgreSQL"],
    evidence: ["Social Media Automation", "Email Campaign AI", "Job Application Bot", "Analytics Dashboard"]
  },
  {
    id: "002",
    title: "Risk-Based Proctoring System",
    status: "Case Closed",
    description: "Advanced behavioral analysis system for academic integrity monitoring. Uses ML to detect suspicious patterns and generate risk assessments.",
    tech: ["Python", "TensorFlow", "OpenCV", "Node.js", "MongoDB"],
    evidence: ["Behavioral Analysis", "Real-time Monitoring", "Risk Scoring", "Report Generation"]
  },
  {
    id: "003",
    title: "CNN Road Condition Analyzer",
    status: "Ongoing Investigation",
    description: "Computer vision application analyzing road conditions and traffic patterns. Provides real-time analytics for infrastructure management.",
    tech: ["Python", "TensorFlow", "OpenCV", "React", "Firebase"],
    evidence: ["Image Recognition", "Traffic Analytics", "Condition Mapping", "Predictive Maintenance"]
  },
  {
    id: "004",
    title: "Smart Food Redistribution Network",
    status: "Evidence Analysis",
    description: "AI-powered matching system connecting food donors with recipients and biogas plants. Optimizes resource allocation and reduces waste.",
    tech: ["Python", "Machine Learning", "React", "PostgreSQL", "Google Maps API"],
    evidence: ["Smart Matching", "Route Optimization", "Impact Tracking", "Mobile App"]
  },
  {
    id: "005",
    title: "Job Finder Bot",
    status: "Under Investigation",
    description: "Comprehensive job search automation with AI-powered resume scoring, job alerts, and multi-platform scraping from LinkedIn, Naukri, and more.",
    tech: ["Python", "Selenium", "NLP", "React", "Node.js"],
    evidence: ["Resume AI Scoring", "Job Alerts", "Platform Integration", "Application Tracking"]
  },
  {
    id: "006",
    title: "Procore Futuristic Landing", 
    status: "Case Closed",
    description: "Freelance Project. High-performance, futuristic landing page developed for a freelance client.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    link: "https://procore-futuristic-landing.vercel.app/"
  }
];

export const SERVICES = [
  {
    title: "AI + Automation Development",
    description: "Custom AI workflows and intelligent automation systems that think ahead and execute flawlessly.",
    items: ["Machine Learning Integration", "Process Automation", "Predictive Analytics", "AI-Powered Decision Making"]
  },
  {
    title: "Full-Stack Web Solutions",
    description: "End-to-end web applications with modern tech stacks and seamless user experiences.",
    items: ["React/Node.js Development", "Database Architecture", "API Development", "Cloud Deployment"]
  },
  {
    title: "Resume Building & Optimization",
    description: "AI-analyzed resume optimization with ATS compatibility and industry-specific tailoring.",
    items: ["ATS Optimization", "Industry Tailoring", "Keyword Analysis", "Performance Tracking"]
  },
  {
    title: "Bug Detection & Fixing",
    description: "Systematic debugging and code optimization using detective-level analytical approaches.",
    items: ["Code Review & Analysis", "Performance Optimization", "Security Assessment", "Technical Documentation"]
  }
];

export const STATISTICS = [
  { label: "Cases Solved", value: "50+" },
  { label: "Success Rate", value: "98%" },
  { label: "Avg Response", value: "24h" },
  { label: "Client Rating", value: "5★" },
];

