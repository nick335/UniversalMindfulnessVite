import PageTransition from '../components/utility/motion/PageTransition'
import Subheader from '../components/utility/subHeaders/Subheader'
import PageHeaderSection from '../components/utility/subHeaders/PageHeaderSection'
import ShopItem from '../components/shop/ShopItem'
import SEOPageHeader from '../components/utility/seo/SEOPageHeader'

const Shop = () => {
  return (
    <PageTransition layout='layout'>
      <SEOPageHeader 
        page='Shop'
      />
      <Subheader header='Shop' />
      <PageHeaderSection 
        header='Bling for a Cause: Buy Bracelets, Support Charity'
        para="So don't wait - shop now and start making a difference today!"
        max='57.125'
      />
      <section className='mt-10 sm:grid sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:mb-32'>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </section>
    </PageTransition>
  )
}

export default Shop
