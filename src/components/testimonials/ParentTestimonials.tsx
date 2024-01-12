import TestimonialBox from "./TestimonialBox"

const ParentTestimonials = () => {
  return (
    <section className="mt-10">
      <h3 className="text-[1.75rem] text-headerPrimary font-semibold">Parents</h3>
      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12">
        <TestimonialBox />
        <TestimonialBox />
        <TestimonialBox />
        <TestimonialBox />
        <TestimonialBox />
        <TestimonialBox />
      </div>
    </section>
  )
}

export default ParentTestimonials
