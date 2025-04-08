import { useState } from 'react'
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
    <>
      <Header className="App" state={user} setState={setUser} />
      <About className="App" />
      <Admin className="App" />
      <Create className="App" />
      <Home className="App" />
      <Login className="App" state={user} setState={setUser} />
      <Signup className="App" state={user} setState={setUser} />
      <Update className="App" />
      <Footer className="App" />
    </>
  );
}

export default App;
