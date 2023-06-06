import './App.css'
import AdminDash from './components/Body-admin-landing/Body'
import NavbarStuDash from './components/Navbar-student-landing/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateCustomQuiz from './components/Create-quiz/custom'
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000");

function App() {

  socket.on("rm", (message) => {
    console.log(message);
  })

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
