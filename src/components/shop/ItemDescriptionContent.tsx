import { Link } from "react-router-dom"
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../utility/motion/PageTransition";
import ItemDesc from "./ItemDesc";
import ItemShippingDetails from "./ItemShippingDetails";

const ItemDescriptionContent = () => {
  const [currentSection, setCurrentSection] = useState('desc');
  const switchToSection = (section: string) => {
    setCurrentSection(section);
  };
  return (
    <div>
      <div className="text-center mt-6">
        <h3 className="font-inter text-[1.54888rem] leading-[2.34888rem] capitalize ">Lucky Bracelet with Happiness Charm</h3>
        <h4>£750</h4>
      </div>
      <div className='flex justify-center items-center mt-6 gap-x-4'>
          <div className='flex items-center border rounded-[0.2815rem] py-3 px-4 gap-x-4 text-[0.87475rem] border-black leading-[0.60375rem]'>
            <h3>+</h3>
            <h3>1</h3>
            <h3>-</h3>
          </div>
          <p className='underline text-[0.87475rem] tracking-[0.00969rem] leading-[0.60375rem]'>Remove Item</p>
        </div>
      <div className="mt-6">
        <button className="btn w-full h-[3.4375rem] text-textPrimary">Add to Cart</button>
        <button className="mt-6 btn3 w-full h-[3.4375rem] text-headerSecondary border-navLiBorder"><Link to='/shop'>Back to Shopping</Link></button>
      </div>
      <div>
        <div className="text-[0.667rem] leading-[0.83375rem] tracking-[0.01331rem] capitalize flex justify-center gap-x-[0.77rem] mt-6 mb-0">
          <h3 className="cursor-pointer" onClick={() => switchToSection('desc')}>Description</h3>
          <h3 className="cursor-pointer" onClick={() => switchToSection('ship')}>Shipping & Returns</h3>
        </div>
        <AnimatePresence mode="wait">
          {
            currentSection === 'desc' ? 
            <PageTransition key='desc' layout="">
              <ItemDesc />
            </PageTransition> :
            <PageTransition key={'ship'} layout="">
              <ItemShippingDetails />
            </PageTransition>
          }
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ItemDescriptionContent
