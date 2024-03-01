import pencil from '../../../../assets/admin/pencil.svg'



const Edit = () => {
  return (
    <button className='flex items-center gap-x-2'>
      <span className=' capitalize underline text-headerPrimary'>edit</span>
      <img src={pencil} alt="pencil" className='w-6 h-6 object-fill' />
    </button>
)
}

export default Edit
