import BlogLists from "../BlogLists"

const YouMightLIkeThis = () => {
  return (
    <div className="mt-4">
      <h3 className="text-[2rem] lg:text-[3.525rem] font-semibold text-center text-headerPrimary mb-4 lg:mb-10">You Might Also Like</h3>
      <BlogLists />
    </div>
  )
}

export default YouMightLIkeThis
