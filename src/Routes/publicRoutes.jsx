import { Route, Router, Routes } from 'react-router-dom'
import Login from '../UserAuthentication/login'
import Signup from '../UserAuthentication/signup'


const PublicRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}   

export default PublicRoutes