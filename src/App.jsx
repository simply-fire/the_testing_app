import './App.css'
import AdminDash from './components/Body-admin-landing/Body'
import NavbarStuDash from './components/Navbar-student-landing/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateCustomQuiz from './components/Create-quiz/custom'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element />
        <Route path='/AdminDashboard' element={<AdminDash />} />
        <Route path='/StuDashboard' element={<NavbarStuDash />} />
        <Route path='/CreateCustomQuiz' element={<CreateCustomQuiz />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
