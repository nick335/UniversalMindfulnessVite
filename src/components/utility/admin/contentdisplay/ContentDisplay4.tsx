import SectionBody from '../section/sectionBody'
import SectionHeader from '../header/sectionHeader'
import demo from '../../../../assets/admin/demo.png'
import ContentDisplayDelete from './ContentDisplayDelete'

// interface props {
//   header: string,
//   btnName: string,
// }

const ContentDisplay4 = () => {
  return (
    <SectionBody>
      <SectionHeader 
        header='Emotional Intellgence & Mindful Parents & Guardian with Me'
        btnName='edit'
      />

      <div className='mt-[1.13rem] font-inter'>
        <div className='w-full aspect-[4/1]'>
          <img src={demo} alt='demo' className='imgFocus object-cover' />
        </div>
        <div className=' mt-5 pb-8 leading-[1.4375rem] text-sm tracking-[-0.018rem]'>
          <h3 className='font-semibold'>Header: Emotional Intelligence & Mindful Parents & Guardian with Me </h3>
          <p className='mt-2'>Body: Mindfulness is a valuable life skill that can help us direct our attention to the present moment with open-minded curiosity and acceptance. Rather than worrying about the past or what might happen in the future, Mindfulness trains us to respond skilfully to whatever is happening right now, without judgment. 
          In essence, Mindfulness is a way of paying attention to, and seeing what is happening in our lives with clarity. But why is this important?</p>

          <h4 className='font-semibold mt-2'>Writer: Mary Oshell</h4>
          <h4 className='font-semibold mt-2'>Category: Money</h4>
          <div className="mt-8 flex items-center justify-end">
            <ContentDisplayDelete />
          </div>
        </div>
        
      </div>
    </SectionBody>
  )
}

export default ContentDisplay4
