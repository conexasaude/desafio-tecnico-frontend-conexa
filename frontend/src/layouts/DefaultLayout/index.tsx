import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export function DefaultLayout() {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <>
      <Header />
      {isAuthenticated && <Footer />}
      <Outlet />
    </>
  )
}
