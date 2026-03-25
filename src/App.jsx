import { Routes, Route, Navigate, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Network from './pages/Network'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import UserProfile from './pages/UserProfile'
import JobList from './pages/jobs/Joblist'
import PartTime from './pages/jobs/PartTime'
import FullTime from './pages/jobs/FullTime'
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className='navigation nav-links'>
        <NavLink to="/" className='nav-link'>Home</NavLink>
        <NavLink to="/network" className='nav-link'>Network</NavLink>
        <NavLink to="/profile" className='nav-link'>Profile</NavLink>
        <NavLink to="/jobs" className='nav-link'>Jobs</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/network" element={<Network />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/user/:id" element={<UserProfile />}></Route>
        <Route path="/jobs" element={<JobList/>}>
          <Route path="part-time" element={<PartTime/>}></Route>
          <Route path="full-time" element={<FullTime/>}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <main className="main-content">
        {/* <Home/> */}
      </main>
    </div>
  )
}

export default App
