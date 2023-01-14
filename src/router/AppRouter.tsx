import { Route, Routes } from 'react-router-dom'

import { AuthRoutes } from '@/auth/routes'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/auth/*' element={<AuthRoutes />} />
      <Route path='/' element={<div>Inicio</div>} />
    </Routes>
  )
}
