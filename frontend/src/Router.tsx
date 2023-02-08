import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { ConsultationsPage } from './pages/Consultations'
import { LoginPage } from './pages/Login'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/consultations" element={<ConsultationsPage />} />
      </Route>
    </Routes>
  )
}
