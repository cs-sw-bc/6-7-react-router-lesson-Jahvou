function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="cover-photo">
          <img src="https://picsum.photos/seed/cover/800/200.jpg" alt="Cover" />
        </div>
        <div className="profile-info">
          <img 
            src="https://picsum.photos/seed/profile/150/150.jpg" 
            alt="Profile" 
            className="profile-picture"
          />
          <div className="profile-details">
            <h1>John Developer</h1>
            <h2>Senior Frontend Developer</h2>
            <p>Toronto, Ontario, Canada</p>
            <div className="profile-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Connections</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Posts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div className="about-section">
          <h3>About</h3>
          <p>
            Passionate frontend developer with 5+ years of experience building 
            modern web applications using React, JavaScript, and CSS. Love creating 
            intuitive user interfaces and solving complex problems.
          </p>
        </div>

        <div className="experience-section">
          <h3>Experience</h3>
          <div className="experience-item">
            <h4>Senior Frontend Developer</h4>
            <p>Tech Company • Toronto</p>
            <p>2022 - Present</p>
            <ul>
              <li>Lead development of React applications</li>
              <li>Mentor junior developers</li>
              <li>Improve application performance</li>
            </ul>
          </div>
          <div className="experience-item">
            <h4>Frontend Developer</h4>
            <p>Startup Inc • Toronto</p>
            <p>2019 - 2022</p>
            <ul>
              <li>Built responsive web applications</li>
              <li>Implemented UI components</li>
              <li>Collaborated with design team</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
