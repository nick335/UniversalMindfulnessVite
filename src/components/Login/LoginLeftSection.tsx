import LoginFooter from "./LoginFooter"
import LoginLeftHero from "./LoginLeftHero"
import LoginLogos from "./LoginLogos"

const LoginLeftSection = () => {
  return (
    <section className="relative pl-12 w-full h-full bg-[#FF945E]">
      <LoginLogos />
      <LoginLeftHero />
      <LoginFooter />
    </section>
  )
}

export default LoginLeftSection
