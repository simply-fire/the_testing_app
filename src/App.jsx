import './App.css'
import AdminDash from './components/Body-admin-landing/Body'
import StudentDash from './components/Body-student-landing/Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateCustomQuiz from './components/Create-quiz/custom'
import ExamConductor from './components/Conduct-quiz/ExamConductor'
import Login from './components/Login-Signup/Login'
import Signup from './components/Login-Signup/Signup'
import OTP from './components/Login-Signup/OTP'
import TDrawer from './components/Navbar-admin-landing/Drawer'
import Myprofile from './components/Navbar-admin-landing/My-profile'
import MyClassroom from './components/Navbar-admin-landing/My-Classroom'
import { ReqAuth } from './context/ReqAuthAdmin'
import { ReqAuthStu } from './context/ReqAuthStu'
import Responses from './components/Body-admin-landing/Responses'
import AnswerSheet from './components/Body-admin-landing/AnswerSheet'
function App() {

  // socket.on("rm", (message) => {
  //   console.log(message);
  // })

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/' element={<Login />} />


        {/* <Route path='/demo' element={<TDrawer />} /> */}
        <Route path='/AdminDashboard' element={<ReqAuth><AdminDash /></ReqAuth>} />
        <Route path='/CreateCustomQuiz' element={<ReqAuth><CreateCustomQuiz /></ReqAuth>} />
        <Route path='/AdminDashboard/Myprofile' element={<ReqAuth>< Myprofile /></ReqAuth>} />
        <Route path='/AdminDashboard/Myclassroom' element={<ReqAuth>< MyClassroom /></ReqAuth>} />
        <Route path='/AdminDashboard/Responses' element={<ReqAuth>< Responses /></ReqAuth>} />
        <Route path='/AdminDashboard/Responses/AnswerSheet' element={<ReqAuth><AnswerSheet /></ReqAuth>} />



        <Route path='/StuDashboard' element={<ReqAuthStu><StudentDash /></ReqAuthStu>} />
        <Route path='/ExamConductor' element={<ReqAuthStu><ExamConductor /></ReqAuthStu>} />


      </Routes>
    </BrowserRouter>

  )
}

export default App
