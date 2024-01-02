import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import CartModal from './components/cart/CartModal'

function App() {

  return (
    <main className=' font-lato text-textSecondary h-screen'>
      <Header />
      <div className=''>
        <Outlet />
      </div>
      <Footer />
      <CartModal />
    </main>
  )
}

export default App
