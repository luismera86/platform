import { Route, Routes } from 'react-router-dom'

export const AuthRoutes = () => {
  return (
    <Routes >
      <Route path='/' element={<div>Inicio auth</div>} />
    </Routes>
  )
}
