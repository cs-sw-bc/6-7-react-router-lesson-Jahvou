import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function UserProfile() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch user data from JSONPlaceholder
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('User not found')
        }
        return response.json()
      })
      .then(data => {
        setUser(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching user:', error)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <div className="loading">Loading profile...</div>
  }

  if (!user) {
    return <div className="error">User not found</div>
  }

  return (
    <div className="user-profile-page">
      <div className="profile-header">
        <div className="cover-photo">
          <img src={`https://picsum.photos/seed/${user.name}/800/200.jpg`} alt="Cover" />
        </div>
        <div className="profile-info">
          <img 
            src={`https://picsum.photos/seed/${user.name}/150/150.jpg`} 
            alt="Profile" 
            className="profile-picture"
          />
          <div className="profile-details">
            <h1>{user.name}</h1>
            <h2>{user.company?.name || 'Software Developer'}</h2>
            <p>{user.address?.city}, {user.address?.city ? 'Canada' : 'Location Unknown'}</p>
            <div className="profile-stats">
              <div className="stat">
                <span className="stat-number">{Math.floor(Math.random() * 1000)}</span>
                <span className="stat-label">Connections</span>
              </div>
              <div className="stat">
                <span className="stat-number">{Math.floor(Math.random() * 100)}</span>
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
            Email: {user.email}<br />
            Phone: {user.phone}<br />
            Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
          </p>
        </div>

        <div className="contact-section">
          <h3>Contact Information</h3>
          <p><strong>Address:</strong> {user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}</p>
          <p><strong>Company:</strong> {user.company?.name}</p>
          <p><strong>Catchphrase:</strong> "{user.company?.catchPhrase}"</p>
        </div>

        <div className="actions">
          <button className="connect-button">Connect</button>
          <button className="message-button">Message</button>
          <button className="follow-button">Follow</button>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
