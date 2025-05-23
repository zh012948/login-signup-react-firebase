import './index.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Welcome from './pages/Welcome'

function App() {


  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </>
  )
}

export default App
