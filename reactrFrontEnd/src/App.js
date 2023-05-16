import Lspage from './components/Login_signup/Lspage';
import Spage from './components/Login_signup/Spage';
import Ec from './components/MainFunc/ExamCreator'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AD from './components/MainFunc/AdminDashboard'
import ExamCreator from './components/MainFunc/ExamCreator';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lspage />} />
          <Route path="/Lspage" element={<Lspage />} />
          <Route path='/Spage' element={<Spage />} />
          <Route path='/ExamCreator' element={<Ec />} />
          <Route path='/AdminDashboard' element={<AD />} />
          <Route path='/ExamCreator' element={<ExamCreator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
