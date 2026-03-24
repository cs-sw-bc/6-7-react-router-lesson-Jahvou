import { useState, useEffect } from 'react'

function PartTime() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    // Mock part-time job data
    setJobs([
      {
        id: 1,
        title: 'Junior React Developer',
        company: 'Digital Solutions',
        location: 'Vancouver, BC',
        type: 'Part-time',
        posted: '1 day ago',
        description: 'Great opportunity for students or those looking for flexible work arrangements...'
      },
      {
        id: 2,
        title: 'Content Writer',
        company: 'Tech Blog',
        location: 'Remote',
        type: 'Part-time',
        posted: '3 days ago',
        description: 'Write technical articles and tutorials for our developer audience...'
      },
      {
        id: 3,
        title: 'Social Media Manager',
        company: 'StartupXYZ',
        location: 'Toronto, ON',
        type: 'Part-time',
        posted: '5 days ago',
        description: 'Manage our social media presence and engage with our community...'
      },
      {
        id: 4,
        title: 'QA Tester',
        company: 'Software Co',
        location: 'Waterloo, ON',
        type: 'Part-time',
        posted: '1 week ago',
        description: 'Help us ensure quality by testing our web applications...'
      }
    ])
  }, [])

  return (
    <div className="jobs-list">
      <h2>Part-time Positions</h2>
      <p>Flexible work opportunities for students and professionals</p>
      {jobs.map(job => (
        <div key={job.id} className="job-card">
          <div className="job-header">
            <h3>{job.title}</h3>
            <span className="job-type part-time">Part-time</span>
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

export default PartTime
