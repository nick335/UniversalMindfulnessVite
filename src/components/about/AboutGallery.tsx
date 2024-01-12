
const AboutGallery = () => {
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
      <div className="aspect-square bg-red-950 w-full"></div>
      <div className="aspect-square bg-red-950 w-full lg:col-span-2 lg:row-span-2"></div>
      <div className="aspect-square bg-red-950 w-full col-span-2 lg:col-span-1 "></div>
      <div className="aspect-auto bg-red-950 w-full row-span-2 lg:row-span-1"></div>
      <div className="aspect-square bg-red-950 w-full"></div>
      <div className="aspect-square bg-red-950 w-full lg:hidden"></div>
    </div>
  )
}

export default AboutGallery
