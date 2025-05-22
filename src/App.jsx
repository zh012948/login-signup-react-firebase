import { Route, Routes } from 'react-router-dom'
import './index.css'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
