import PageTransition from '../components/utility/motion/PageTransition'
import Subheader from '../components/utility/subHeaders/Subheader'
import ItemDescriptionImages from '../components/shop/ItemDescriptionImages'
import ItemDescriptionContent from '../components/shop/ItemDescriptionContent'
import useWindowDimensions from '../hooks/UseWindowDimensions'
import ShopDesktopHeader from '../components/shop/ShopDesktopHeader'

const ShopItemDescription = () => {
  const { width } = useWindowDimensions()
  const isDesktop = width >= 1024 ? true : false
  return (
    <PageTransition layout='layout'>
      {isDesktop ? <ShopDesktopHeader />  :<Subheader header='Shop' />}
      <section className='mt-8 lg:flex lg:gap-x-[2.8rem]'>
        <ItemDescriptionImages />
        <ItemDescriptionContent />
      </section>
    </PageTransition>
  )
}

export default ShopItemDescription
