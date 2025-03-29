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

  return (
    <>
      <Header className="App" />
      <About className="App" />
      <Admin className="App" />
      <Create className="App" />
      <Home className="App" />
      <Login className="App" />
      <Signup className="App" />
      <Update className="App" />
      <Footer className="App" />
    </>
  )
}

export default App;
