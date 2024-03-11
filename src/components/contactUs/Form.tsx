import { z } from 'zod'
import styles from './contactUs.module.css'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import ErrorMessage from '../utility/Error/ErrorMessage'
import { useMutation } from '@tanstack/react-query'
import { contactus } from '../../api/contactus'
import showToast from '../../utilsFunction/showToast'
import { postContactusPayload } from '../../types/api/content'
import ErrorHandler from '../../utilsFunction/ErrorHandler'
import { Icon } from '@iconify/react';
const Form = () => {

  const mutation = useMutation(contactus, {
    onSuccess: () => {
      reset()
      showToast('Email sent successfully', 'success')
    }
  })
  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    firstName: z.string().min(1, 'first name is required'),
    lastName: z.string().min(1, 'last name is required'),
    phoneNumber: z.string().min(1, 'phone number is required'),
    email: z.string().email('invalid email format').min(1, 'email is required'),
    subject: z.string(),
    message: z.string().min(1, 'please enter message')
  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,   },

  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    const body: postContactusPayload = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phoneNumber,
      subject: data.subject,
      message: data.message
    }

    try{
      await mutation.mutateAsync(body)
    }catch(error){
      ErrorHandler(error)
    }
  }
  return (
    <form className="mt-[2.32rem] border rounded-2xl py-8 px-7 border-formBorder lg:flex-[1.3] lg:mt-0" onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.divContainer}>
        <div className={`${styles.inputDiv} lg:flex-1`}>
          <label className={`${styles.formLabel}`}>First Name (required)</label>
          <input className={`${styles.formInput} ${ errors.firstName ? styles.formError : '' }`} type='text' {...register("firstName")} />
          {
            errors.firstName && <ErrorMessage message={errors.firstName.message} />
          }
        </div>
        <div className={`${styles.inputDiv} lg:flex-1`}>
          <label className={`${styles.formLabel}`}>Last Name (required)</label>
          <input className={`${styles.formInput} ${ errors.lastName ? styles.formError : '' }`} type='text' {...register("lastName")}  />
          {
            errors.lastName && <ErrorMessage message={errors.lastName.message} />
          }
        </div>
      </div>
      <div className={styles.divContainer}>
        <div className={`${styles.inputDiv} lg:flex-1`}>
          <label className={`${styles.formLabel}`}> Email (required)</label>
          <input className={`${styles.formInput} ${ errors.email ? styles.formError : '' }`} type='email' {...register("email")} />
          {
            errors.email && <ErrorMessage message={errors.email.message} />
          }
        </div>
        <div className={`${styles.inputDiv} lg:flex-1`}>
          <label className={`${styles.formLabel}`}>Phone Number (required)</label>
          <input className={`${styles.formInput} ${ errors.phoneNumber ? styles.formError : '' }`} type='text' {...register("phoneNumber")} />
          {
            errors.phoneNumber && <ErrorMessage message={errors.phoneNumber.message} />
          }
        </div>
      </div>
      <div>
        <div className={`${styles.inputDiv}`}>
          <label className={`${styles.formLabel}`}> Subject (immediate need)</label>
          <input className={`${styles.formInput} ${ errors.subject ? styles.formError : '' }`} type='text' {...register("subject")} />
          {
            errors.subject && <ErrorMessage message={errors.subject.message} />
          }
        </div>
      </div>
      <div className={`${styles.inputDiv}`}>
        <label className={`${styles.formLabel}`}> Your Message</label>
        <textarea className={`outline-none border  rounded-[0.25rem] w-full h-[11.25rem]  p-2 ${ errors.message ? styles.formError : 'border-formBorder' }`} {...register("message")} />
        {
        errors.message && <ErrorMessage message={errors.message.message} />
        }
      </div>
      <button className='btn w-full text-textPrimary h-[3.4375rem] lg:max-w-[16.5625rem] lg:mx-auto lg:flexCenter'>
        {
          mutation.isLoading ? <Icon icon="line-md:loading-loop" className='text-2xl'/> : 'Get in Touch'  
        }
      </button>
    </form>
  )
}

export default Form
