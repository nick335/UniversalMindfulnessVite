import { z} from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import ErrorMessage from "../utility/Error/ErrorMessage"


const LoginForm = () => {

  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    email:z.string().email("Invalid email").min(1, "Email is Required"),
    password:z.string().min(1, 'password is Required').min(8, 'minimum of 8 characters')
  })
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting}
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data)
  }
  return (
    <div className="max-w-[26.625rem] mt-10">
      <form className="font-inter grid grid-cols-1 gap-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1">
          <label className="font-medium text-base text-[#696F79]">Email Address</label>
          <input type="email" className={`mt-2.5 transition-all ease-in duration-100 rounded-[0.375rem] text-[#494949] pl-6 border py-3 text-sm outline-[#FC5704] ${
            errors.email ? 'border-error' : ''
          }`} {...register("email")} />
          {errors.email && <ErrorMessage message={errors.email.message} />}
        </div>
        <div className="grid grid-cols-1">
          <label className="font-medium text-base text-[#696F79]">Password</label>
          <input type="password" className={`mt-2.5 rounded-[0.375rem] text-[#494949] transition-all ease-in duration-100 pl-6 border py-3 text-sm outline-[#FC5704] ${
            errors.password ? 'border-error' : ''
          }`} {...register("password")} />
          {errors.password && <ErrorMessage message={errors.password.message} />}
        </div>
        <button type="submit" disabled={isSubmitting} className="w-full cursor-pointer bg-[#FC5704] text-textPrimary rounded-[0.375rem] py-3.5 capitalize">sign in</button>
      </form>
    </div>
  )
}

export default LoginForm
