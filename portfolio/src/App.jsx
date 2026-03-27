import './App.css'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Front from '../components/Front'
import About from '../components/About'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'

function App() {
  

  setTimeout(()=>{
   document.querySelector('.frontcont').classList.add('remove')
  },2000)
  setTimeout(()=>{
   document.querySelector('.contbody').classList.add('nowshow')
  },2000)
  return (
    <div className='body'>
      <Front className='Front'></Front>
    <div className="contbody">
    <div id='home' >
     <Navbar/>
     <Home/>
     </div>
     <About></About>
     <Projects></Projects>
     <Contact></Contact>
     </div>
    </div>
  )
}

export default App
