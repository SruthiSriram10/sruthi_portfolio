import React, { useState } from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaEye, 
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaPlayCircle,
  FaDownload,
  FaMobileAlt,
  FaRobot,
  FaHeartbeat,
  FaBus,
  FaFileAlt,
  FaCode
} from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "GlycoSync: Diabetes Management App",
      description: "A comprehensive mobile application that empowers diabetic patients with AI-powered meal planning, real-time glucose tracking, and personalized healthcare insights.",
      longDescription: "GlycoSync is a comprehensive mobile application designed to empower diabetic patients with AI-powered meal planning, real-time glucose tracking, and personalized healthcare insights. The app helps users manage their diabetes effectively through intelligent recommendations and real-time monitoring.",
      tech: ['Flutter', 'Firebase', 'Dart', 'OpenAI API'],
      images: [],
      github: "https://github.com/SruthiSriram10/glycosync",
      demo: "https://drive.google.com/file/d/1zly2xix4iS3rYe4rs6g741118v2AmsnQ/view",
      apk: "https://drive.google.com/file/d/14u063R8tIj3Nq927hkfIHRaceQqW-fbU/view",
      category: "Mobile App",
      icon: <FaHeartbeat />
    },
    {
      id: 2,
      title: "Simple Chatbot",
      description: "A simple rule-based chatbot built using Python that interacts through the console.",
      longDescription: "A simple rule-based chatbot built using Python that interacts through the console. It processes user input using conditional logic and demonstrates core concepts like functions, loops, and string handling.",
      tech: ['Python', 'Hugging Face'],
      images: [],
      github: "#",
      demo: "",
      category: "AI/ML",
      icon: <FaRobot />
    },
    {
      id: 3,
      title: "Rescue Application - Built using Generative AI",
      description: "An AI-powered rescue application that provides real-time emergency guidance, safety instructions, and first-aid recommendations.",
      longDescription: "An AI-powered rescue application built using Generative AI that provides real-time emergency guidance, safety instructions, and first-aid recommendations. The app helps users during emergencies by providing instant AI-generated response strategies.",
      tech: ['Openweaver', 'Generative AI'],
      images: [],
      github: "#",
      demo: "",
      category: "AI/ML",
      icon: <FaRobot />
    },
    {
      id: 4,
      title: "Resume Builder",
      description: "A desktop-based Resume Builder developed using Java Swing that allows users to create structured resumes through an interactive GUI.",
      longDescription: "A desktop-based Resume Builder developed using Java Swing that allows users to create structured resumes through an interactive GUI. Users can input their details and generate professional resumes in a formatted layout.",
      tech: ['Java', 'Java Swing', 'AWT', 'Applets'],
      images: [],
      github: "",
      demo: "",
      category: "Desktop App",
      icon: <FaFileAlt />
    },
    {
      id: 5,
      title: "Bus Booking - Travelland",
      description: "A responsive bus booking website that enables users to browse routes and book tickets easily.",
      longDescription: "Travelland is a responsive bus booking website built using HTML, CSS, and JavaScript that enables users to browse routes and book tickets easily. The website features an intuitive interface for searching buses, selecting seats, and completing bookings.",
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      images: [],
      github: "https://github.com/SruthiSriram10/Travelland",
      demo: "https://travellandd.netlify.app/",
      category: "Web App",
      icon: <FaBus />
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const getProjectImages = (project) => {
    if (project.images && project.images.length > 0) {
      return project.images;
    }
    return [];
  };

  const currentImages = selectedProject ? getProjectImages(selectedProject) : [];
  const hasMultipleImages = currentImages.length > 1;

  const nextImage = (e) => {
    e.stopPropagation();
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
    }
  };

  return (
    <>
      <section id="projects" className="projects">
        <div className="section-container">
          <h2 className="section-title">My Projects</h2>
          <p className="projects-subtitle">Real-world applications built with modern technologies</p>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => handleProjectClick(project)}
              >
                <div className="project-image">
                  <div className="project-icon-large">
                    {project.icon}
                  </div>
                  <div className="project-overlay">
                    <button className="view-project-btn">
                      <FaEye /> View Details
                    </button>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-tag">+{project.tech.length - 4} more</span>
                    )}
                  </div>
                  <div className="project-links">
                    {project.github && project.github !== "#" && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    <button 
                      className="btn btn-outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demo, '_blank');
                      }}
                    >
                      <FaPlayCircle /> Demo
                    </button>
                    {project.apk && (
                      <a 
                        href={project.apk} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-secondary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaDownload /> APK
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT MODAL */}
      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-container project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              <FaTimes />
            </button>

            <div className="modal-content">
              {/* IMAGE SECTION WITH CAROUSEL */}
              <div className="modal-image-section">
                {currentImages.length > 0 ? (
                  <div className="image-carousel">
                    {hasMultipleImages && (
                      <>
                        <button className="carousel-btn prev" onClick={prevImage}>
                          <FaChevronLeft />
                        </button>
                        <button className="carousel-btn next" onClick={nextImage}>
                          <FaChevronRight />
                        </button>
                        <div className="image-counter">
                          {currentImageIndex + 1} / {currentImages.length}
                        </div>
                        <div className="carousel-dots">
                          {currentImages.map((_, idx) => (
                            <span
                              key={idx}
                              className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(idx);
                              }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    <img
                      src={currentImages[currentImageIndex]}
                      alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                      className="modal-image"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/500x300?text=Project+Preview";
                      }}
                    />
                  </div>
                ) : (
                  <div className="placeholder-image project-placeholder">
                    {selectedProject.icon}
                    <p>{selectedProject.title}</p>
                  </div>
                )}
              </div>

              {/* DETAILS SECTION - IMPROVED TECH DISPLAY */}
              <div className="modal-details-section">
                <div className="modal-header">
                  <div className="project-category-badge">
                    {selectedProject.category}
                  </div>
                  <h2 className="modal-title">{selectedProject.title}</h2>
                </div>

                <div className="modal-info">
                  <div className="modal-info-item">
                    <strong>📝 Description:</strong>
                    <p>{selectedProject.longDescription || selectedProject.description}</p>
                  </div>

                  <div className="modal-info-item">
                    <strong>🛠️ Technologies Used:</strong>
                    <div className="tech-list-container">
                      {selectedProject.tech.map((tech, idx) => (
                        <span key={idx} className="tech-badge-modern">
                          <FaCode className="tech-icon-small" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-info-item">
                    <strong>✨ Key Features:</strong>
                    <ul>
                      <li>User-friendly interface with intuitive design</li>
                      <li>Real-time data processing and updates</li>
                      <li>Secure authentication and data protection</li>
                      <li>Cross-platform compatibility</li>
                    </ul>
                  </div>
                </div>

                <div className="project-modal-links">
                  {selectedProject.github && selectedProject.github !== "#" && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="modal-certificate-btn github-btn"
                    >
                      <FaGithub />
                      View Code on GitHub
                    </a>
                  )}
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="modal-certificate-btn demo-btn"
                  >
                    <FaPlayCircle />
                    Watch Demo Video
                  </a>
                  {selectedProject.apk && (
                    <a 
                      href={selectedProject.apk} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="modal-certificate-btn apk-btn"
                    >
                      <FaDownload />
                      Download APK
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;