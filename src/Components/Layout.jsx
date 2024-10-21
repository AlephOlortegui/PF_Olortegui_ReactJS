import { Outlet } from "react-router-dom"
import { Message } from "./Message"
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"
import { DocTitle } from "./DocTitle"

export const Layout = () => {
  return (
    <>
      <DocTitle />
      <header>
        <Message />
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
