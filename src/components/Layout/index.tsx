import Navbar from '../Navbar'

type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
