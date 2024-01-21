import LoginForm from "./LoginForm"

const LoginRightSection = () => {
  return (
    <section className="pl-20 font-inter">
      <div className="mt-48">
        <h3 className="font-bold text-textSecondary text-3xl">Universal Mindfulness Login</h3>
        <p className="mt-2 text-[#8692A6] leading-[1.75rem]">Please fill in your login details</p>
      </div>
      <LoginForm />
    </section>
  )
}

export default LoginRightSection
