import { getEmbedding } from "../utils/gemini.embedding.js"
export const employees = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "skills": ["Python", "React", "AWS"],
      "experience_years": 5,
      "projects": ["E-commerce Platform", "Healthcare Dashboard"],
      "availability": "available",
      "embedding": []
    },
    {
      "id": 2,
      "name": "Michael Smith",
      "skills": ["Java", "Spring Boot", "MySQL"],
      "experience_years": 7,
      "projects": ["Banking API", "Inventory Management System"],
      "availability": "unavailable",
      "embedding": []
    },
    {
      "id": 3,
      "name": "Sophia Brown",
      "skills": ["Node.js", "Express", "MongoDB"],
      "experience_years": 4,
      "projects": ["Chat Application", "IoT Device Manager"],
      "availability": "available",
      "embedding": []
    },
    {
      "id": 4,
      "name": "James Davis",
      "skills": ["C#", ".NET", "Azure"],
      "experience_years": 6,
      "projects": ["Hospital Management System", "Fleet Tracking App"],
      "availability": "available",
      "embedding": []
    },
    {
      "id": 5,
      "name": "Olivia Wilson",
      "skills": ["Python", "Django", "PostgreSQL"],
      "experience_years": 3,
      "projects": ["Learning Management System", "Data ETL Pipeline"],
      "availability": "unavailable",
      "embedding": []
    },
    {
      "id": 6,
      "name": "Ethan Martinez",
      "skills": ["Go", "Kubernetes", "Docker"],
      "experience_years": 8,
      "projects": ["Video Streaming Backend", "Cloud Monitoring Tool"],
      "availability": "available",
      "embedding": []
    },
    {
      "id": 7,
      "name": "Ava Anderson",
      "skills": ["PHP", "Laravel", "Vue.js"],
      "experience_years": 5,
      "projects": ["Job Portal", "CRM System"],
      "availability": "available",
      "embedding": []
    },
    {
      "id": 8,
      "name": "William Thomas",
      "skills": ["Rust", "Actix", "PostgreSQL"],
      "experience_years": 4,
      "projects": ["Blockchain Wallet", "Game Server"],
      "availability": "unavailable",
      "embedding": []
    },
    {
      "id": 9,
      "name": "Isabella Taylor",
      "skills": ["Ruby", "Rails", "JavaScript"],
      "experience_years": 6,
      "projects": ["Social Media Platform", "Event Booking System"],
      "availability": "available",
      "embedding": []
    },
    {
      "id": 10,
      "name": "Liam Harris",
      "skills": ["Swift", "iOS Development", "Firebase"],
      "experience_years": 3,
      "projects": ["Fitness Tracker App", "Photo Editing App"],
      "availability": "available",
      "embedding": []
    },
    {
      "id": 11,
      "name": "Mia White",
      "skills": ["Kotlin", "Android Development", "SQLite"],
      "experience_years": 4,
      "projects": ["Food Delivery App", "Travel Guide App"],
      "availability": "unavailable",
      "embedding": []
    },
    {
      "id": 12,
      "name": "Benjamin Lewis",
      "skills": ["Python", "TensorFlow", "Pandas"],
      "experience_years": 5,
      "projects": ["AI Chatbot", "Fraud Detection System"],
      "availability": "available",
      "embedding": []
    },
    {
      "id": 13,
      "name": "Charlotte Walker",
      "skills": ["JavaScript", "Angular", "Node.js"],
      "experience_years": 6,
      "projects": ["Online Banking UI", "Document Collaboration Tool"],
      "availability": "available",
      "embedding": []
    },
    {
      "id": 14,
      "name": "Daniel Young",
      "skills": ["C++", "OpenGL", "Unreal Engine"],
      "experience_years": 7,
      "projects": ["3D Game Engine", "VR Simulation"],
      "availability": "unavailable",
      "embedding": []
    },
    {
      "id": 15,
      "name": "Amelia Hall",
      "skills": ["Scala", "Spark", "Hadoop"],
      "experience_years": 5,
      "projects": ["Big Data Analytics Platform", "Real-Time Ad Bidding System"],
      "availability": "available",
      "embedding": []
    },
    {
      "id": 16,
      "name": "Henry Allen",
      "skills": ["Perl", "Shell Scripting", "Oracle DB"],
      "experience_years": 9,
      "projects": ["Legacy System Migration", "Log Processing Pipeline"],
      "availability": "available",
      "embedding": []
    }
  ]
export const attachEmbeddings = async () => {
  for (let emp of employees){
    console.log(emp)
    const textTOEmbed = `
    Name: ${emp.name}
    Skills: ${emp.skills.join(", ")}
    Experience: ${emp.experience_years} years
    Projects: ${emp.projects.join(", ")}
    Availability: ${emp.availability}
    `;
    const embedding = await getEmbedding(textTOEmbed);
    emp.embedding = embedding;
  }
};

