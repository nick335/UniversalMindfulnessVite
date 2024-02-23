
import SectionBody from '../section/sectionBody'
import SectionHeader from '../header/sectionHeader'
import demo from '../../../../assets/admin/demo.png'

const ContentDisplay6 = () => {
  return (
    <SectionBody>
      <SectionHeader 
        header='What is NLC'
        btnName='edit'
        routePath='/admin/dashboard'
      />
      <div className='mt-[1.13rem] font-inter'>
        <div className='w-full aspect-[4/1]'>
          <img src={demo} alt='demo' className='imgFocus object-cover' />
        </div>
        <div className=' mt-5 pb-8 leading-[1.4375rem] text-sm tracking-[-0.018rem]'>
          <h3 className='font-semibold mb-2'>Header: What is NLC</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam iure dicta, rem corporis tenetur sapiente esse, dignissimos saepe quae omnis. Molestias dolor ea placeat libero et sit rerum recusandae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis atque quam delectus provident sapiente officia repellendus, excepturi iusto libero esse, tempora natus. Consequuntur saepe ducimus atque. Harum officia voluptas quae.</p>
        </div>
      </div>
    </SectionBody>
  )
}

export default ContentDisplay6
