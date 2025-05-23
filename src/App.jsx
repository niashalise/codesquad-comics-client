import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import About from './components/About'
import Admin from './components/Admin'
import Create from './components/Create'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Update from './components/Update'
import Header from './shared/Header'
import Footer from './shared/Footer'

function App() {

  const [user, setUser] = useState({});
  return (
    <div>
      <Header className="App" user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home className="App" />} />
        <Route path="/about" element={<About className="App" />} />
        <Route path="/admin" element={<Admin className="App" />} />
        <Route path="/create" element={<Create className="App" />} />
        <Route path="/login" element={<Login className="App" user={user} setUser={setUser} />} />
        <Route path="/signup" element={<Signup className="App" user={user} setUser={setUser} />} />
        <Route path="/update/:bookId" element={<Update className="App" />} />
      </Routes>
      <Footer className="App" />
    </div>
  );
}

export default App
