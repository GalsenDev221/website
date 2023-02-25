import { ReactNode } from "react"
import Footer from "./Footer"

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    {children}
    <Footer />
  </>
)

export default Layout
