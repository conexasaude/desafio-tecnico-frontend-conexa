import { Outlet } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { AuthContext } from '../../contexts/AuthContext'

export function DefaultLayout() {
  const isAuthenticated = useContextSelector(AuthContext, (context) => {
    return context.isAuthenticated
  })
  return (
    <>
      <Header />
      {isAuthenticated && <Footer />}
      <Outlet />
    </>
  )
}
