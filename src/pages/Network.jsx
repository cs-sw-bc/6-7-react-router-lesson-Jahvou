import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Network() {
  const [users, setUsers] = useState([])
  const [connections, setConnections] = useState([])

  useEffect(() => {
    // Fetch users from JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error))

    // Mock connections data
    setConnections([
      { id: 1, name: 'Alice Johnson', title: 'Product Manager', company: 'Tech Corp' },
      { id: 2, name: 'Bob Smith', title: 'UX Designer', company: 'Design Studio' },
      { id: 3, name: 'Carol White', title: 'Backend Developer', company: 'StartupXYZ' },
    ])
  }, [])

  return (
    <div className="network-page">
      <div className="network-header">
        <h1>My Network</h1>
        <div className="network-tabs">
          <button className="tab active">Connections</button>
          <button className="tab">People You May Know</button>
        </div>
      </div>

      <div className="connections-section">
        <h2>Your Connections ({connections.length})</h2>
        <div className="connections-grid">
          {connections.map(connection => (
            <Link key={connection.id} to={`/user/${connection.id}`} className="connection-card">
              <img 
                src={`https://picsum.photos/seed/${connection.name}/100/100.jpg`} 
                alt={connection.name} 
                className="connection-avatar"
              />
              <div className="connection-info">
                <h4>{connection.name}</h4>
                <p>{connection.title}</p>
                <p>{connection.company}</p>
                <span className="view-profile">View Profile</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="suggestions-section">
        <h2>People You May Know</h2>
        <div className="suggestions-grid">
          {users.slice(0, 6).map(user => (
            <Link key={user.id} to={`/user/${user.id}`} className="suggestion-card">
              <img 
                src={`https://picsum.photos/seed/${user.name}/100/100.jpg`} 
                alt={user.name} 
                className="suggestion-avatar"
              />
              <div className="suggestion-info">
                <h4>{user.name}</h4>
                <p>{user.company?.name || 'Software Developer'}</p>
                <span className="view-profile">View Profile</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Network
