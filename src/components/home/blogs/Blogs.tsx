import Subheader from '../../utility/subHeaders/Subheader'
import Blog from './Blog'
import data from './blogData'

const Blogs = () => {
  const blogEL = data.map((each, idx) => {
    return <Blog key={idx} img={each} />
  })
  return (
    <section className=' mt-12 '>
      <Subheader header='Our Blog' />
      <div className='mt-10 grid gap-y-10 sm:grid-cols-2 sm:gap-x-6 md:gap-x-10 lg:grid-cols-3 xl:gap-x-20'>
        {blogEL}
      </div>
    </section>
  )
}

export default Blogs
