import { Suspense } from "react";
import PageLoader from "../components/utility/Loader/PageLoader";
import PrivateRoute from "../components/utility/RouteProtector/PrivateRoute";
import MainTestimonial from "../pages/edit/MainTestimonial";
import AboutSectionEdit from "../pages/edit/AboutSectionEdit";
import AdminWhatWeOfferEdit from "../pages/edit/AdminWhatWeOfferEdit";



const adminEditRoutes = [
  {
    path: '/admin/dashboard/testimonial/main/edit',
    element: <Suspense fallback={<PageLoader />} ><PrivateRoute children={<MainTestimonial />} /></Suspense>
  },
  {
    path: '/admin/dashboard/about/edit/:id',
    element: <Suspense fallback={<PageLoader />}><PrivateRoute children={<AboutSectionEdit />} /></Suspense>
  },
  {
    path: '/admin/dashboard/whatweoffer/edit/:id',
    element: <Suspense ><PrivateRoute children={<AdminWhatWeOfferEdit />} /></Suspense>
  }
]

export default adminEditRoutes