import React from 'react';
import { 
  SiReact, 
  SiHtml5, 
  SiJavascript, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb, 
  SiFirebase, 
  SiGit, 
  SiFigma, 
  SiFlutter 
} from 'react-icons/si';
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaTools, 
  FaComments, 
  FaUsers, 
  FaLightbulb, 
  FaClock, 
  FaBrain,
  FaUserFriends, 
  FaRocket, 
  FaChartLine,
  FaCss3Alt
} from 'react-icons/fa';

const Skills = () => {
  const technicalSkills = {
    'Frontend': {
      icon: <FaCode />,
      skills: [
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' }
      ]
    },
    'Backend': {
      icon: <FaServer />,
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'Python', icon: <SiPython />, color: '#3776AB' }
      ]
    },
    'Database': {
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' }
      ]
    },
    'Tools & Others': {
      icon: <FaTools />,
      skills: [
        { name: 'Git', icon: <SiGit />, color: '#F05032' },
        { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
        { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' }
      ]
    }
  };

  const softSkills = [
    { name: 'Communication', icon: <FaComments />, color: '#4F46E5' },
    { name: 'Team Collaboration', icon: <FaUsers />, color: '#06B6D4' },
    { name: 'Problem Solving', icon: <FaLightbulb />, color: '#F59E0B' },
    { name: 'Time Management', icon: <FaClock />, color: '#10B981' },
    { name: 'Critical Thinking', icon: <FaBrain />, color: '#EF4444' },
    { name: 'Adaptability', icon: <FaRocket />, color: '#8B5CF6' },
    { name: 'Leadership', icon: <FaUserFriends />, color: '#EC4899' },
    { name: 'Creativity', icon: <FaChartLine />, color: '#14B8A6' }
  ];

  return (
    <section id="skills" className="skills-modern">
      <div className="section-container">
        <h2 className="section-title">Skills and Expertise</h2>
        
        {/* Technical Skills */}
        <div className="tech-skills-wrapper">
          <h3 className="tech-subtitle">
            <span className="tech-icon"></span> Technical Skills
          </h3>
          <div className="tech-grid">
            {Object.entries(technicalSkills).map(([category, data]) => (
              <div key={category} className="tech-category-card">
                <div className="category-header">
                  <div className="category-icon">{data.icon}</div>
                  <h4>{category}</h4>
                </div>
                <div className="tech-items">
                  {data.skills.map((skill, idx) => (
                    <div key={idx} className="tech-item">
                      <div className="tech-item-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="soft-skills-wrapper">
          <h3 className="soft-subtitle">
            <span className="soft-icon"></span> Soft Skills
          </h3>
          <div className="soft-skills-modern-grid">
            {softSkills.map((skill, idx) => (
              <div key={idx} className="modern-soft-card">
                <div className="soft-card-icon" style={{ background: `${skill.color}15`, color: skill.color }}>
                  {skill.icon}
                </div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;