
const LoginForm = () => {
  return (
    <div className="max-w-[26.625rem] mt-10">
      <form className="font-inter grid grid-cols-1 gap-y-6">
        <div className="grid grid-cols-1">
          <label className="font-medium text-base text-[#696F79]">Email Address</label>
          <input type="email" className="mt-2.5 rounded-[0.375rem] text-[#494949] pl-6 border py-3 text-sm outline-[#FC5704]" />
        </div>
        <div className="grid grid-cols-1">
          <label className="font-medium text-base text-[#696F79]">Password</label>
          <input type="password" className="mt-2.5 rounded-[0.375rem] text-[#494949] pl-6 border py-3 text-sm outline-[#FC5704]" />
        </div>
        <button className="w-full cursor-pointer bg-[#FC5704] text-textPrimary rounded-[0.375rem] py-3.5 capitalize">sign in</button>
      </form>
    </div>
  )
}

export default LoginForm
