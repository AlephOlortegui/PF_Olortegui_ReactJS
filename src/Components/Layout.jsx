import { Outlet } from 'react-router-dom'
import { Message } from './Message'
import { NavBar } from './NavBar'
import { Footer } from './Footer'

export const Layout = () => {
  return (
    <>
      <header>
        <Message />
        <NavBar/>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
