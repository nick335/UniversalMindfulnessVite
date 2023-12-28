import Logo from '../../assets/header/Logo.svg'

const FooterNewsLetter = () => {
  return (
    <div className='max-w-[70%] mx-auto min-w-[16.875rem] w-full lg:mx-0 lg:max-w-[90%]'>
      <img src={Logo} alt='logo' className='w-[4.96875rem] h-[3.04688rem] object-fill' />
      <p className='mr-5 my-4 text-xs'>Join our newsletter to stay up to date on features and releases.</p>
      <div className='p-[0.33rem] border-none border-inputBorder bg-inputBg rounded-md flex gap-x-3 '>
        <input type='email' name='email' placeholder='Enter your Email' className='bg-transparent outline-none border-none w-full' />
        <button className='h-[2.38125rem] min-w-[5.06388rem] btn-sec bg-white text-textSecondary font-semibold rounded-md'>Sign Up</button>
      </div>
    </div>
  )
}

export default FooterNewsLetter
