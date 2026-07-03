export const projects = [
  {
    id: "rigora",
    index: "01",
    name: "Rigora",
    tagline: "AI-Powered PC Builder & Compatibility Assistant",
    description:
      "A build assistant that recommends compatible components by budget and performance, then explains every recommendation instead of just listing parts.",
    points: [
      "Compatibility engine covering CPU, GPU, motherboard, RAM, storage, PSU, and cabinet selection",
      "Gemini AI integration for personalized recommendations, compatibility reasoning, and upgrade paths",
      "JWT-secured accounts with saved builds, build comparison, and a personalized dashboard",
      "Scalable REST APIs built on Node.js, Express.js, and MongoDB",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Gemini API"],
    github: "https://github.com/handevyanktesh/rigora",
    demo: null,
    accent: "circuit",
    nodes: ["CPU", "GPU", "RAM", "PSU", "MOBO", "SSD"],
  },
  {
    id: "ghostwriter",
    index: "02",
    name: "GhostWriter Detector",
    tagline: "Explainable AI Detection Platform",
    description:
      "An AI-text detector that shows its work — confidence scores paired with plain-language reasoning instead of an opaque verdict.",
    points: [
      "Detects AI-generated text and surfaces explainable confidence scores",
      "Gemini AI generates transparent, human-readable explanations behind each prediction",
      "Secure document upload, analysis, and report generation behind JWT authentication",
      "Dashboards for report history, document management, and analysis tracking",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "Gemini API"],
    github: "https://github.com/handevyanktesh/ghostwriter-detector",
    demo: null,
    accent: "signal",
    nodes: ["Input", "Model", "Score", "Explain"],
  },
];
