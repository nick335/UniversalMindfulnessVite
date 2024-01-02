import PageTransition from '../components/utility/motion/PageTransition'
import Subheader from '../components/utility/subHeaders/Subheader'
import ItemDescriptionImages from '../components/shop/ItemDescriptionImages'
import ItemDescriptionContent from '../components/shop/ItemDescriptionContent'

const ShopItemDescription = () => {
  return (
    <PageTransition layout='layout'>
      <Subheader header='Shop' />
      <section className='mt-8'>
        <ItemDescriptionImages />
        <ItemDescriptionContent />
      </section>
    </PageTransition>
  )
}

export default ShopItemDescription
