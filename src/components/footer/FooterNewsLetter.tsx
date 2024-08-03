import { useMutation } from '@tanstack/react-query'
import Logo from '../../assets/header/Logo.svg'
import { useState } from 'react'
import showToast from '../../utilsFunction/showToast'
import ErrorHandler from '../../utilsFunction/ErrorHandler'
import { subscribeToNewsletter } from '../../api/subscribeToNewsletter'
// Config variables (replace with actual values)

const FooterNewsLetter = () => {
  const [email, setEmail] = useState('')
  const mutation = useMutation(subscribeToNewsletter, {
    onSuccess: async () => {
      showToast('subscribed successfully', 'success')
      setEmail('')
    }
  })

  const handleSubscribeToNewsLetter = async () => {
    try{
      await mutation.mutateAsync({
        section: 'newsletterSubscribers',
        body1: email,
      })
    }catch(error){
      ErrorHandler(error)
    }
  }

  const handleEmailChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
  }
  return (
    <div className='max-w-[80%] mx-auto min-w-[16.875rem] w-full lg:mx-0 lg:max-w-[90%]'>
      <img src={Logo} alt='logo' className='w-[4.96875rem] h-[3.04688rem] object-fill' />
      <p className='mr-5 my-4 text-xs'>Join our newsletter to stay up to date on features and releases.</p>
      <form onSubmit={(e) => {e.preventDefault()
        handleSubscribeToNewsLetter()
      }}>
        <div className='p-[0.33rem] border-none border-inputBorder bg-inputBg rounded-md flex gap-x-3 '>
          <input value={email} onChange={(e) => handleEmailChange(e)}  type='email' name='email' placeholder='Enter your Email' className='bg-transparent outline-none border-none w-full' required />
          <button className='h-[2.38125rem] min-w-[5.06388rem] btn-sec bg-white text-textSecondary font-semibold rounded-md' disabled={mutation.isLoading} onClick={handleSubscribeToNewsLetter} >Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default FooterNewsLetter
