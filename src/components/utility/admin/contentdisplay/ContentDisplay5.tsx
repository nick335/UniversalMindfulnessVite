import pencil from '../../../../assets/admin/pencil.svg'
import bin from '../../../../assets/admin/bin.svg'
import demo from '../../../../assets/shop/bracelet.png'

const ContentDisplay5 = () => {
  return (
    <div className="font-inter leading-[1.4375rem] text-sm tracking-[-0.018rem]">
      <div className='w-full aspect-[1.11/1]'>
        <img src={demo} alt='demo' className='imgFocus object-cover' />
      </div>
      <h4 className='font-semibold mt-[1.3rem]'>Bracelet</h4>
      <p className="font-semibold mt-3">
      This Lucky bracelet features an 18k Gold diamond-cut chain,hand braided with orange silk and finished with a smile charm symbolizing Happiness.It is approximately 34cm, including 4.5cm long tassels on either end. Meant to be worn alone or layered — or mixed-and-matched with our 1885 Links to create new combinations.
      </p>
      <div className='mt-2'>
        <h4>Price: £750</h4>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <button className='flex items-center gap-x-2'>
          <span className=' capitalize underline text-headerPrimary'>edit</span>
          <img src={pencil} alt="pencil" className='w-6 h-6 object-fill' />
        </button>
        <button className='flex items-center gap-x-2'>
          <span className=' capitalize text-[#8692A6] hover:text-[#FF8080] transition-all ease-in duration-100'>delete</span>
          <img src={bin} alt='bin' className='w-[0.90419rem] h-[0.90419rem] object-fill ' />
        </button>
      </div>
    </div>
  )
}

export default ContentDisplay5
