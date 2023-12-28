import Subheader from '../../utility/subHeaders/Subheader'
import Blog from './Blog'

const Blogs = () => {
  return (
    <section className=' mt-12 '>
      <Subheader header='Our Blog' />
      <div className='mt-10 grid gap-y-10 sm:grid-cols-2 sm:gap-x-6 md:gap-x-10 lg:grid-cols-3 xl:gap-x-20'>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </section>
  )
}

export default Blogs
