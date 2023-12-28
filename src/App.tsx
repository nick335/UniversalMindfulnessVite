import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {

  return (
    <main className=' font-lato text-textSecondary'>
      <Header />
      <div className=''>
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default App
