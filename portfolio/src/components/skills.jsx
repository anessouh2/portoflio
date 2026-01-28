import "../styles/skills.css";

export default function Skills() {
  const frontendSkills = ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"];
  const backendSkills = ["Node.js", "Express.js", "MongoDB", "REST APIs"];
  const otherSkills = ["C", "Python", "Pascal"];

  return (
    <div className="skills" id="skills">
      <div className="skills-header" data-aos='fade-right' data-aos-duration='1000'>
        <div className="header-line"></div>
        <h1 className="skills-title">Skills</h1>
      </div>

      <div className="skills-container">
        <div className="skills-main-card" data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
          <div className="card-header">
            <div className="card-icon">💻</div>
            <h2 className="card-title">Web Developer</h2>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Front-end</h3>
            <div className="skill-tags">
              {frontendSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Backend</h3>
            <div className="skill-tags">
              {backendSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">UI/UX</h3>
            <div className="skill-tags">
              <span className="skill-tag">Figma Basics</span>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">AI</h3>
            <div className="skill-tags">
              <span className="skill-tag">AI Agent</span>
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">Deep Learning</span>
            </div>
          </div>
        </div>

        <div className="skills-secondary">
          <div className="skill-card" data-aos='fade-up' data-aos-duration='1000' data-aos-delay='200'>
            <div className="card-accent"></div>
            <div className="card-content">
              <div className="card-icon-small">⚙️</div>
              <h3 className="card-title-small">Programming</h3>
              <p className="card-description">
                Experience with C, Python, Pascal, and other programming languages.
              </p>
              <div className="skill-tags-small">
                {otherSkills.map((skill, index) => (
                  <span key={index} className="skill-tag-small">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="skill-card" data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300'>
            <div className="card-accent"></div>
            <div className="card-content">
              <div className="card-icon-small">🐧</div>
              <h3 className="card-title-small">Linux User</h3>
              <p className="card-description">
                Efficient with terminal commands, file systems, and development environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
