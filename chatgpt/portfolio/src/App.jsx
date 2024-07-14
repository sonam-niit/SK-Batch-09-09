import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import About from './components/about'
import Contact from './components/contact'
import Projects from './components/projects'
import Footer from './components/footer'

function App() {

  return (
    <BrowserRouter>

      <div className='container'>
        <Header />

        <Routes>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
