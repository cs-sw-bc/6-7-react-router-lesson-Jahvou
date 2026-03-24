import { useState, useEffect } from 'react'

function JobList() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    // Mock job data
    setJobs([
      {
        id: 1,
        title: 'Senior Frontend Developer',
        company: 'Tech Innovations',
        location: 'Toronto, ON',
        type: 'Full-time',
        posted: '2 days ago',
        description: 'Looking for experienced React developer...'
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
        id: 4,
        title: 'Junior React Developer',
        company: 'Digital Solutions',
        location: 'Vancouver, BC',
        type: 'Entry-level',
        posted: '1 day ago',
        description: 'Great opportunity for recent graduates to start their career...'
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
      Job searching can be a long and stressful activity. I have often heard it referred to as a full-time job in itself. This really is true! With the amount of time you take to search out opportunities, do research and target your resumes and cover letters, you’re already looking at a significant time investment. That’s not even including time for interviews. And waiting around, wondering if you’ll hear back or getting a rejection can all take its toll. Having said all that, job searching is a necessary part of life. How then can you help limit your stress and other negative feelings during this time? There are many ways.

The first thing to do is to get organized. Create a schedule to fit your job search around other responsibilities. Break everything down into more manageable tasks to help reduce the feeling of being overwhelmed. Look for online job search resources that can help. It’s also important to keep records of your completed job search tasks: the job descriptions of the positions you applied for, any specific documents you send, resumes and cover letters, references, etc. This way, if you ever need to review anything, you can grab it at a moment.

Preparation is key! Research your field to see if there are any norms you should know about, find the names of people to connect with for information and guidance. Practice answers to common interview questions. Practice any skills (such as Excel- there are many free online resources) that may help you get ahead in interviews. The more you know, the more prepared you are and the less stressed you’ll be.

And since your job search is a job in itself, you should make sure to have a healthy work-life balance! Take breaks, get plenty of sleep, and get out and socialize (networking can also help with your job search; you never know when/where you might meet someone). If you let the stress of job search take over your life you can be burnt out quickly. Self-care is important – whether it’s having regular talks with friends or family, or a quiet hour to yourself; find something that helps you relax and decompress.

Finally, you should expect some level of rejection. Practice positive self-talk in these situations. A rejection doesn’t mean that you’re not a skilled professional or that the company isn’t interested in you. It’s not personal; employers are just looking for the right person. You are also looking for the right company. Keep this in mind while applying at companies and while interviewing. Be compassionate and supportive of yourself.

Remember a job search can take time. Don’t get frustrated if your job search takes longer than you expected. Remember to get organized, be prepared, and take care of yourself. You will succeed!
    </div>
  )
}

export default JobList
