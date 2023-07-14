import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { CreateQuizContextProvider } from './context/CreateQuizContext.jsx'
import { ConductQuizContextProvider } from './context/ConductQuizContext.jsx'
import { ExamDataContextProvider } from './context/ExamDataContest.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <CreateQuizContextProvider>
      <ConductQuizContextProvider>
        <ExamDataContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ExamDataContextProvider>
      </ConductQuizContextProvider>
    </CreateQuizContextProvider>
  </AuthContextProvider>


)
