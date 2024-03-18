
interface props {
  vidurl: string
}

const AdminEmbeddedVideo = ({ vidurl }: props) => {
  return (
    <div className='w-full aspect-[4/1] mt-5'>
      <iframe
        title="Embedded Video"
        className='h-full w-full'
        src={`https://www.youtube.com/embed/${vidurl}`}
      ></iframe>
    </div>
  )
}

export default AdminEmbeddedVideo
