import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Fetch sample posts from JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error))
  }, [])

  return (
    <div className="home-page">
      <div className="feed">
        <div className="post-composer">
          <img 
            src="https://picsum.photos/seed/user1/50/50.jpg" 
            alt="User" 
            className="user-avatar"
          />
          <textarea 
            placeholder="Start a post" 
            className="post-input"
          />
          <div className="post-actions">
            <button className="post-button">Post</button>
          </div>
        </div>

        <div className="posts-feed">
          {posts.map(post => (
            <div key={post.id} className="post">
              <div className="post-header">
                  <img 
                    src={`https://picsum.photos/seed/user${post.id}/50/50.jpg`} 
                    alt="User" 
                    className="user-avatar"
                  />
                  <div className="post-info">
                    <Link to={`/user/${post.id}`}> 
                    <h4>User {post.id}</h4>
                    </Link>
                    <p>Software Developer</p>
                  </div>
              </div>
              <div className="post-content">
                <p>{post.body}</p>
              </div>
              <div className="post-footer">
                <button className="action-button">Like</button>
                <button className="action-button">Comment</button>
                <button className="action-button">Share</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
