import './App.css'
import AdminDash from './components/Body-admin-landing/Body'
import StudentDash from './components/Body-student-landing/Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateCustomQuiz from './components/Create-quiz/custom'
import ExamConductor from './components/Conduct-quiz/ExamConductor'
import Login from './components/Login-Signup/Login'
import Signup from './components/Login-Signup/Signup'
import OTP from './components/Login-Signup/OTP'

// const socket = io.connect("http://localhost:3000");

function App() {

  // socket.on("rm", (message) => {
  //   console.log(message);
  // })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/AdminDashboard' element={<AdminDash />} />
        <Route path='/StuDashboard' element={<StudentDash />} />
        <Route path='/CreateCustomQuiz' element={<CreateCustomQuiz />} />
        <Route path='/ExamConductor' element={<ExamConductor />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/OTP' element={<OTP />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
