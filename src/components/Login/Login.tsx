import LoginLeftSection from "./LoginLeftSection"
import LoginRightSection from "./LoginRightSection"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Login = () => {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <LoginLeftSection />
      <LoginRightSection />
      <ToastContainer />
    </main>
  )
}

export default Login
