import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import CartModal from './components/cart/CartModal'

function App() {

  return (
    <>
      <Header />
      <main className='font-lato text-textSecondary min-h-screen'>
        <Outlet />
      </main>
      <Footer />
      <CartModal />
      <ScrollRestoration />
    </>
  )
}

export default App
