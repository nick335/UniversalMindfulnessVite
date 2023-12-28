import DesktopFooter from "./DesktopFooter"
// import MobileFooter from "./MobileFooter"

const Footer = () => {
  return (
    <footer className="mt-12 bg-footerBg text-footerText     py-6 lg:pt-12 flexCenter">
      {/* <MobileFooter /> */}
      <DesktopFooter />
    </footer>
  )
}

export default Footer
