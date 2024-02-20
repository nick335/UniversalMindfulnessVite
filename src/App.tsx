import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import CartModal from './components/cart/CartModal'
import SearchModal from './components/search/SearchModal'
import 'react-loading-skeleton/dist/skeleton.css'



function App() {

  return (
    <>
      <Header />
      <main className='font-lato text-textSecondary min-h-screen'>
        <Outlet />
      </main>
      <Footer />
      <CartModal />
      <SearchModal />
      <ScrollRestoration />
    </>
  )
}

export default App
