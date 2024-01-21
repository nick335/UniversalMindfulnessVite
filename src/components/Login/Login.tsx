import LoginLeftSection from "./LoginLeftSection"
import LoginRightSection from "./LoginRightSection"

const Login = () => {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <LoginLeftSection />
      <LoginRightSection />
    </main>
  )
}

export default Login
