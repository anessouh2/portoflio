import "../styles/projects.css";
import Homepage from "../imgs/home.png";
import Alger20 from "../imgs/alger20.png";
import Medcine from "../imgs/medcine.png";
import Voices from "../imgs/voices.png";
import PredictionModel from "../imgs/predectionmodel.jpg";
import AIAgent from "../imgs/aiagent.jpg";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Restaurant Management Website",
      description: "A modern and visually engaging restaurant website designed to highlight signature dishes and promote a clean, appetizing aesthetic. Features a sleek, high-conversion landing page that delivers a premium dining experience through modern UI and clean aesthetics.",
      image: Homepage,
      link: "https://github.com/anessouh2/food-wesite"
    },
    {
      id: 2,
      title: "ALGERIA_20",
      description: "An AI-powered platform designed to streamline logistics operations for farmers, making agricultural management more efficient and accessible. The platform leverages artificial intelligence to optimize supply chains, track resources, and simplify complex farming logistics, empowering farmers with modern technology solutions.",
      image: Alger20,
      link: "https://github.com/alaa-gnt/algeria2.0_frontend-"
    },
    {
      id: 3,
      title: "Medical Science Club Website",
      description: "A professional website for a medical science club, designed to showcase club activities, events, and scientific research. Features include event management, member resources, research publications, and an interactive platform that connects medical students and professionals in the field of medicine.",
      image: Medcine,
      link: "https://hopemed.vercel.app/"
    },
    {
      id: 4,
      title: "Voices Community Platform",
      description: "A dynamic community platform that amplifies voices and connects people. Features real-time interactions, content sharing, and engagement tools that foster meaningful connections and discussions.",
      image: Voices,
      link: "#"
    },
    {
      id: 5,
      title: "Predictions Model",
      description: "An advanced prediction model designed to help farmers determine the best crops to plant based on multiple features including soil conditions, climate data, market trends, and historical yield patterns. The model leverages machine learning algorithms to analyze various agricultural parameters and provide data-driven recommendations for optimal crop selection.",
      image: PredictionModel,
      link: "https://github.com/anessouh2/predection_model"
    },
    {
      id: 6,
      title: "AI Agent with RAG",
      description: "An intelligent AI agent powered by Retrieval-Augmented Generation (RAG) technology. This system combines the power of large language models with external knowledge retrieval, enabling the agent to access and utilize up-to-date information from various sources. The RAG architecture allows for more accurate, context-aware responses by retrieving relevant documents and incorporating them into the generation process.",
      image: AIAgent,
      link: "https://github.com/TCXII-TEAM-7/ai-agent-Team07"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header" data-aos="fade-up" data-aos-duration="1000">
          <div className="header-accent-line"></div>
          <h1 className="projects-title">Projects</h1>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  className="project-image" 
                  alt={project.title}
                />
                <div className="project-overlay"></div>
              </div>
              
              <div className="project-info">
                <div className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                
                <div className="project-link-wrapper">
                  <a 
                    href={project.link} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="link-text">Link</span>
                    <svg className="link-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13V19A2 2 0 0 1 16 21H5A2 2 0 0 1 3 19V8A2 2 0 0 1 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
