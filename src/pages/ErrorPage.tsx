import { CiFaceFrown } from "react-icons/ci";
import { Link } from "react-router-dom";
import SEOPageHeader from "../components/utility/seo/SEOPageHeader";
const ErrorPage = () => {
  return (
    <main className="h-screen w-screen flexCenter text-center">
      <SEOPageHeader 
        page="404 page"
      />
        <div className="flexCenter  flex-col font-lato gap-y-6">
          <h3 className="text-3xl">404 Page Not Found</h3>
          <CiFaceFrown className=" text-linkPrimary  text-[12rem] " />
          <h4 className=" text-5xl">Looks Like Something Went Wrong!</h4>
          <button>
            <Link to='/'>Go to Home Page</Link>
          </button>
        </div>
    </main>
  )
}

export default ErrorPage
