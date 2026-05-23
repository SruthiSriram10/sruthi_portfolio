import React, { useState } from 'react';
import {
  FaTrophy,
  FaLightbulb,
  FaCode,
  FaRobot,
  FaUsers,
  FaMedal,
  FaAward,
  FaPalette,
  FaEye,
  FaTimes,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const achievements = [
    {
      id: 1,
      title: "Marketing Competition",
      position: "First Place",
      organization: "Ramakrishna College of Arts & Science",
      icon: <FaAward />,
      date: "March 15 2023",
      description: "Demonstrated exceptional marketing strategies and execution.",
      keyPoints: [
        "Developed comprehensive marketing campaign strategy",
        "Achieved highest engagement rate among participants",
        "Recognized for creative promotional techniques",
        "Presented marketing plan to industry judges"
      ],
      certificateLink: "/certificates/marketing.pdf"
    },
    {
      id: 2,
      title: "Ideathon",
      position: "Second Place",
      organization: "KPR Institute of Technology, Coimbatore",
      icon: <FaMedal />,
      date: "April 5 2023",
      description: "Presented unique ideas and problem-solving approaches.",
      keyPoints: [
        "Proposed innovative solution for sustainable development",
        "Selected among 50+ participating teams",
        "Received appreciation from judging panel",
        "Advanced to final round of presentations"
      ],
      image: "/images/achievements/ideathon.jpeg",
      certificateLink: "/certificates/ideathon.pdf"
    },
    {
      id: 3,
      title: "Make-A-Thon",
      position: "Third Place",
      organization: "Rajalakshmi Institute of Technology, Chennai",
      icon: <FaTrophy />,
      date: "November 22 2023",
      description: "Competed against multiple teams to build innovative solutions.",
      keyPoints: [
        "Developed working prototype within 24 hours",
        "Collaborated effectively with team members",
        "Presented solution to industry experts",
        "Solved real-world problem using technology"
      ],
      image: "/images/achievements/makeathon.jpeg",
      certificateLink: "/certificates/makeathon.pdf"
    },
    {
      id: 4,
      title: "Design Contest",
      position: "Second Place",
      organization: "KG College of Arts and Science, Coimbatore",
      icon: <FaPalette />,
      date: "October 17 2024",
      description: "Showcased creative design skills and innovation.",
      keyPoints: [
        "Created user-centric design solution",
        "Applied modern design principles effectively",
        "Received positive feedback from judges",
        "Demonstrated strong visual communication skills"
      ],
      image: "/images/achievements/design.jpeg",
      certificateLink: "/certificates/design.pdf"
    },
    {
      id: 5,
      title: "Make-A-Thon Recognition",
      position: "Special Recognition Award",
      organization: "KG College of Arts and Science, Coimbatore",
      icon: <FaAward />,
      date: "February 22, 2024",
      description: "Received special recognition for Make-A-Thon achievement.",
      keyPoints: [
        "Honored for innovative AI-based project development",
        "Recognized during achievers felicitation ceremony",
        "Presented project outcomes before academic leaders",
        "Represented teamwork and innovation"
      ],
      image: "/images/achievements/minister.jpeg"
    },
    {
      id: 6,
      title: "IDE Bootcamp 2024",
      position: "Participant",
      organization: "SRM University, Trichy",
      icon: <FaLightbulb />,
      date: "September 23 – September 27, 2024",
      description: "Successfully participated in Innovation, Design and Entrepreneurship Bootcamp.",
      keyPoints: [
        "Participated in innovation and entrepreneurship sessions",
        "Learned design thinking concepts",
        "Collaborated with teams",
        "Enhanced creativity and leadership skills"
      ],
      image: "/images/achievements/ide.jpeg",
      certificateLink: "/certificates/IDE.pdf"
    },
    {
      id: 7,
      title: "CreateX 2026",
      position: "National Level Participant",
      organization: "Marudhar Kesari Jain College for Women",
      icon: <FaUsers />,
      date: "February 27, 2026",
      description: "Participated in National Level Idea and Prototype Fest.",
      keyPoints: [
        "Collaborated effectively in a 3-member team",
        "Presented innovative prototype concepts",
        "Participated in national-level technical event",
        "Enhanced teamwork and presentation skills"
      ],
      image: "/images/achievements/createx.jpeg",
      certificateLink: "/certificates/STARTUP.pdf"
    },
    {
      id: 8,
      title: "AWS DeepRacer League",
      position: "Participant",
      organization: "KGISL Educational Institutions",
      icon: <FaRobot />,
      date: "March 2023 & August 2024",
      description: "Participated in AWS DeepRacer League bootcamp.",
      keyPoints: [
        "Explored AI and reinforcement learning",
        "Worked with AWS DeepRacer platform",
        "Enhanced analytical skills",
        "Participated in technical sessions"
      ],
      image: "/images/achievements/deepracer.jpeg",
      certificates: [
        {
          name: "DeepRacer 2023",
          link: "/certificates/DEEPRACER 2023.pdf"
        },
        {
          name: "DeepRacer 2024",
          link: "/certificates/DEEPRACER 2024.pdf"
        }
      ]
    },
    {
      id: 9,
      title: "Google Developer Groups (GDG)",
      position: "Participant",
      organization: "Google Developer Groups",
      icon: <FaCode />,
      date: "2023 & 2024",
      description: "Completed GDG technical programs during 2023 and 2024.",
      keyPoints: [
        "Participated in developer-focused sessions",
        "Explored modern technologies",
        "Enhanced development skills",
        "Collaborated with developer communities"
      ],
      images: [
        "/images/achievements/gdg.jpeg",
        "/images/achievements/gdg1.png"
      ],
      certificates: [
        {
          name: "GDG 2023",
          link: "/certificates/GDG 2023.pdf"
        },
        {
          name: "GDG 2024",
          link: "/certificates/GDG 2024.pdf"
        }
      ]
    }
  ];

  const handleAchievementClick = (achievement) => {
    setSelectedAchievement(achievement);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAchievement(null);
    setCurrentImageIndex(0);
  };

  const getPositionClass = (position) => {
    if (position.includes("First")) return "first";
    if (position.includes("Second")) return "second";
    if (position.includes("Third")) return "third";
    return "special";
  };

  // Get all images from achievement
  const getAchievementImages = (achievement) => {
    if (achievement.images && achievement.images.length > 0) {
      return achievement.images;
    }
    if (achievement.image) {
      return [achievement.image];
    }
    return [];
  };

  const currentImages = selectedAchievement ? getAchievementImages(selectedAchievement) : [];
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
      <section id="achievements" className="achievements">
        <div className="section-container">
          <h2 className="section-title">Achievements & Events</h2>
          <div className="achievements-grid">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`achievement-card ${getPositionClass(achievement.position)}`}
                onClick={() => handleAchievementClick(achievement)}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <div className="achievement-content">
                  <div className="achievement-header">
                    <h3>{achievement.title}</h3>
                    <span className="achievement-position">
                      {achievement.position}
                    </span>
                  </div>
                  <p className="achievement-organization">
                    {achievement.organization}
                  </p>
                  <p className="achievement-description">
                    {achievement.description}
                  </p>
                  <div className="achievement-footer">
                    <span className="achievement-date">
                      {achievement.date}
                    </span>
                    <button className="view-details-btn">
                      <FaEye />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL WITH CAROUSEL */}
      {isModalOpen && selectedAchievement && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
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
                      alt={`${selectedAchievement.title} - ${currentImageIndex + 1}`}
                      className="modal-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML += '<div class="image-error">Image failed to load</div>';
                      }}
                    />
                  </div>
                ) : (
                  <div className="placeholder-image">
                    {selectedAchievement.icon}
                    <p>No Image Available</p>
                  </div>
                )}
              </div>

              {/* DETAILS SECTION */}
              <div className="modal-details-section">
                <div className="modal-header">
                 
                  <h2 className="modal-title">{selectedAchievement.title}</h2>
                </div>

                <div className="modal-info">
                  <div className="modal-info-item">
                    <strong>🏛️ Organization:</strong>
                    <p>{selectedAchievement.organization}</p>
                  </div>

                  <div className="modal-info-item">
                    <strong>📅 Date:</strong>
                    <p>{selectedAchievement.date}</p>
                  </div>

                  

                  <div className="modal-info-item">
                    <strong>✨ Key Achievements:</strong>
                    <ul>
                      {selectedAchievement.keyPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {selectedAchievement.certificateLink && (
                  <a
                    href={selectedAchievement.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-certificate-btn"
                  >
                    <FaExternalLinkAlt />
                    Download Certificate
                  </a>
                )}

                {selectedAchievement.certificates && selectedAchievement.certificates.length > 0 && (
                  <div className="multiple-certificates">
                    <h4>📜 Certificates</h4>
                    <div className="certificate-buttons">
                      {selectedAchievement.certificates.map((cert, index) => (
                        <a
                          key={index}
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-certificate-btn"
                        >
                          <FaExternalLinkAlt />
                          {cert.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Achievements;