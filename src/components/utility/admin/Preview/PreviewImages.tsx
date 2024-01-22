import PreviewImage from "./PreviewImage"

interface props {
  images: string[]
  deleteImg: (idx: number) => void

}

const PreviewImages = ({ images, deleteImg }: props) => {
  return (
    <section className='grid grid-cols-2 gap-8 mt-4'>
      {
        images.map((image, idx) => {
          return <PreviewImage
                    key={idx}
                    idx={idx} 
                    image={image}
                    deleteImg={deleteImg}
                  />
        })
      }
    </section>
  )
}

export default PreviewImages
