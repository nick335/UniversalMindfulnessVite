import { Suspense } from "react";
import PageLoader from "../components/utility/Loader/PageLoader";
import PrivateRoute from "../components/utility/RouteProtector/PrivateRoute";
import MainTestimonial from "../pages/edit/MainTestimonial";



const adminEditRoutes = [
  {
    path: '/admin/dashboard/testimonial/main/edit',
    element: <Suspense fallback={<PageLoader />} ><PrivateRoute children={<MainTestimonial />} /></Suspense>
  }
]

export default adminEditRoutes