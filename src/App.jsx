import './App.css'
import AdminDash from './components/Body-admin-landing/Body'
import StudentDash from './components/Body-student-landing/Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateCustomQuiz from './components/Create-quiz/custom'
import ExamConductor from './components/Conduct-quiz/ExamConductor'
import io from "socket.io-client";

// const socket = io.connect("http://localhost:3000");

function App() {

  // socket.on("rm", (message) => {
  //   console.log(message);
  // })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element />
        <Route path='/AdminDashboard' element={<AdminDash />} />
        <Route path='/StuDashboard' element={<StudentDash />} />
        <Route path='/CreateCustomQuiz' element={<CreateCustomQuiz />} />
        <Route path='/ExamConductor' element={<ExamConductor />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
