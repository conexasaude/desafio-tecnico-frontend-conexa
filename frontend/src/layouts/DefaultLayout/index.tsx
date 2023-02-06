import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Footer />
      <Outlet />
    </>
  )
}
