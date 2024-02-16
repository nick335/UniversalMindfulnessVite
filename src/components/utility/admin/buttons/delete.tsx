
const Delete = () => {

  function justDo (){
    console.log('doing something else')
  }
  return (
    <div onClick={justDo} className='w-[11.5124rem] h-[3.9375rem] bg-[#FFF2F2] rounded-lg text-[#FF8080] font-inter text-base font-bold flex items-center justify-center cursor-pointer'>
      Delete
    </div>
  )
}

export default Delete
