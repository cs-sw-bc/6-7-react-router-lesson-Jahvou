import { useState, useEffect } from 'react'

function FullTime() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    // Mock full-time job data
    setJobs([
      {
        id: 1,
        title: 'Senior Frontend Developer',
        company: 'Tech Innovations',
        location: 'Toronto, ON',
        type: 'Full-time',
        posted: '2 days ago',
        description: 'Looking for experienced React developer with 5+ years experience...'
      },
      {
        id: 2,
        title: 'UI/UX Designer',
        company: 'Creative Agency',
        location: 'Remote',
        type: 'Full-time',
        posted: '1 week ago',
        description: 'Join our design team to create amazing user experiences...'
      },
      {
        id: 3,
        title: 'Full Stack Developer',
        company: 'StartupXYZ',
        location: 'Waterloo, ON',
        type: 'Full-time',
        posted: '3 days ago',
        description: 'We need a versatile developer comfortable with both frontend and backend...'
      },
      {
        id: 5,
        title: 'DevOps Engineer',
        company: 'Cloud Systems',
        location: 'Montreal, QC',
        type: 'Full-time',
        posted: '4 days ago',
        description: 'Help us build and maintain our cloud infrastructure...'
      }
    ])
  }, [])

  return (
    <div className="jobs-list">
      <h2>Full-time Positions</h2>
      <p>Find your next full-time career opportunity</p>
      {jobs.map(job => (
        <div key={job.id} className="job-card">
          <div className="job-header">
            <h3>{job.title}</h3>
            <span className="job-type full-time">Full-time</span>
          </div>
          <div className="job-company">
            <h4>{job.company}</h4>
            <p>{job.location}</p>
            <p className="posted-date">Posted {job.posted}</p>
          </div>
          <div className="job-description">
            <p>{job.description}</p>
          </div>
          <div className="job-actions">
            <button className="apply-button">Apply Now</button>
            <button className="save-button">Save</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FullTime
