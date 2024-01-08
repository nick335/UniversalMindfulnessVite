import { Link } from "react-router-dom"

const ShopDesktopHeader = () => {
  return (
    <h3 className="font-medium text-2xl"><Link to='/shop'>Shop</Link>`{'>'}` <span className=" text-headerPrimary">Bracelets</span></h3>
  )
}

export default ShopDesktopHeader
