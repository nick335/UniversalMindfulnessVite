import  { ReactNode } from 'react'

interface props {
  children: ReactNode
}

const SectionBody = ({ children }: props) => {
  return (
    <section className='bg-white shadow-sectionBody px-[3.25rem] py-[1.12rem]'>
      {children}
    </section>
  )
}

export default SectionBody
