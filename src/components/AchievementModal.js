import React, { useState, useEffect } from 'react';
import {
  FaTimes,
  FaTrophy,
  FaMedal,
  FaAward,
  FaPalette,
  FaBullhorn,
  FaExternalLinkAlt,
  FaLightbulb,
  FaRobot,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaImage
} from 'react-icons/fa';

const AchievementModal = ({ achievement, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState({});

  useEffect(() => {
    // Reset image index when achievement changes
    setCurrentImageIndex(0);
    setImageError({});
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Close modal on Escape key
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [achievement, onClose]);

  if (!achievement) return null;

  const getIcon = (title) => {
    if (title.includes("Make-A-Thon")) return <FaTrophy />;
    if (title.includes("Ideathon")) return <FaMedal />;
    if (title.includes("Marketing")) return <FaBullhorn />;
    if (title.includes("Design")) return <FaPalette />;
    if (title.includes("IDE Bootcamp")) return <FaLightbulb />;
    if (title.includes("DeepRacer")) return <FaRobot />;
    if (title.includes("CreateX")) return <FaUsers />;
    return <FaAward />;
  };

  const getIconClass = (title) => {
    if (title.includes("Make-A-Thon")) return "gold-bg";
    if (title.includes("Ideathon")) return "silver-bg";
    if (title.includes("Marketing")) return "orange-bg";
    if (title.includes("Design")) return "purple-bg";
    if (title.includes("IDE Bootcamp")) return "blue-bg";
    if (title.includes("DeepRacer")) return "green-bg";
    if (title.includes("CreateX")) return "special-bg";
    return "special-bg";
  };

  const getImages = () => {
    if (achievement.images) return achievement.images;
    if (achievement.image) return [achievement.image];
    return [];
  };

  const images = getImages();
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageError = (index) => {
    setImageError(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-content">
          {/* LEFT IMAGE SECTION */}
          <div className="modal-image-section">
            {images.length > 0 && !imageError[currentImageIndex] ? (
              <div className="image-carousel">
                {hasMultipleImages && (
                  <>
                    <button className="carousel-btn prev" onClick={prevImage}>
                      <FaChevronLeft />
                    </button>
                    <button className="carousel-btn next" onClick={nextImage}>
                      <FaChevronRight />
                    </button>
                    <div className="carousel-dots">
                      {images.map((_, idx) => (
                        <span
                          key={idx}
                          className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(idx)}
                        />
                      ))}
                    </div>
                  </>
                )}
                <img
                  src={images[currentImageIndex]}
                  alt={`${achievement.title} - ${currentImageIndex + 1}`}
                  className="modal-image"
                  onError={() => handleImageError(currentImageIndex)}
                />
              </div>
            ) : (
              /* PLACEHOLDER */
              <div className="placeholder-image">
                <div className={`achievement-icon modal-achievement-icon ${getIconClass(achievement.title)}`}>
                  {getIcon(achievement.title)}
                </div>
                <p>{imageError[currentImageIndex] ? 'Image failed to load' : 'No Image Available'}</p>
                {imageError[currentImageIndex] && (
                  <button 
                    className="retry-btn"
                    onClick={() => setImageError(prev => ({ ...prev, [currentImageIndex]: false }))}
                  >
                    <FaImage /> Retry
                  </button>
                )}
              </div>
            )}
          </div>

          {/* RIGHT DETAILS SECTION */}
          <div className="modal-details-section">
            <div className="modal-header">
              {/* POSITION BADGE */}
              <div
                className={`modal-position-badge
                ${achievement.position?.toLowerCase().includes('first')
                    ? 'gold'
                    : achievement.position?.toLowerCase().includes('second')
                    ? 'silver'
                    : achievement.position?.toLowerCase().includes('third')
                    ? 'bronze'
                    : 'special'
                  }`}
              >
                {achievement.position || 'Achievement'}
              </div>

              {/* TITLE */}
              <h2 className="modal-title">{achievement.title}</h2>
            </div>

            {/* INFORMATION */}
            <div className="modal-info">
              <div className="modal-info-item">
                <strong>🏛️ Organization:</strong>
                <p>{achievement.organization || 'Not specified'}</p>
              </div>

              <div className="modal-info-item">
                <strong>📅 Date:</strong>
                <p>{achievement.date || 'Not specified'}</p>
              </div>

              <div className="modal-info-item">
                <strong>📝 Description:</strong>
                <p>{achievement.description || 'No description available'}</p>
              </div>

              <div className="modal-info-item">
                <strong>✨ Key Achievements:</strong>
                <ul>
                  {achievement.keyPoints?.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                  {!achievement.keyPoints?.length && (
                    <>
                      <li>Successfully competed against multiple teams</li>
                      <li>Demonstrated exceptional skills and creativity</li>
                      <li>Recognized by industry experts</li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* SINGLE CERTIFICATE */}
            {achievement.certificateLink && (
              <a
                href={achievement.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-certificate-btn"
              >
                <FaDownload />
                View Certificate
              </a>
            )}

            {/* MULTIPLE CERTIFICATES */}
            {achievement.certificates && achievement.certificates.length > 0 && (
              <div className="multiple-certificates">
                <h4>📜 Certificates</h4>
                <div className="certificate-buttons">
                  {achievement.certificates.map((cert, index) => (
                    <a
                      key={index}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-certificate-btn"
                    >
                      <FaExternalLinkAlt />
                      {cert.name || `Certificate ${index + 1}`}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementModal;