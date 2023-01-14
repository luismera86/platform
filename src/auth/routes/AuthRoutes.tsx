import { LoginPage, RegisterPage } from '../pages'
import { Route, Routes } from 'react-router-dom'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/*' element={<LoginPage />} />
    </Routes>
  )
}
