import { Suspense } from "react";
import PageLoader from "../components/utility/Loader/PageLoader";
import PrivateRoute from "../components/utility/RouteProtector/PrivateRoute";
import MainTestimonial from "../pages/edit/MainTestimonial";
import AboutSectionEdit from "../pages/edit/AboutSectionEdit";
import AdminWhatWeOfferEdit from "../pages/edit/AdminWhatWeOfferEdit";
import AdminBlogEdit from "../pages/edit/AdminBlogEdit";
import AdminEventsEdit from "../pages/edit/AdminEventsEdit";
import AdminMeetTheTeamEdit from "../pages/edit/AdminMeetTheTeamEdit";
import AdminParentTestimonialEdit from "../pages/edit/AdminParentTestimonialEdit";
import AdminChildrenTestimonialEdit from "../pages/edit/AdminChildrenTestimonialEdit";
import ServiceEdit from "../pages/edit/ServiceEdit";



const adminEditRoutes = [
  {
    path: '/admin/dashboard/testimonial/main/edit',
    element: <Suspense fallback={<PageLoader />} ><PrivateRoute children={<MainTestimonial />} /></Suspense>
  },
  {
    path: '/admin/dashboard/services/edit/:id',
    element: <Suspense fallback={<PageLoader />} ><PrivateRoute children={<ServiceEdit />} /></Suspense>
  },
  {
    path: '/admin/dashboard/testimonial/parent/edit/:id',
    element: <Suspense fallback={<PageLoader />} ><PrivateRoute children={<AdminParentTestimonialEdit />} /></Suspense>
  },
  {
    path: '/admin/dashboard/testimonial/children/edit/:id',
    element: <Suspense fallback={<PageLoader />} ><PrivateRoute children={<AdminChildrenTestimonialEdit />} /></Suspense>
  },
  {
    path: '/admin/dashboard/about/edit/:id',
    element: <Suspense fallback={<PageLoader />}><PrivateRoute children={<AboutSectionEdit />} /></Suspense>
  },
  {
    path: '/admin/dashboard/about/meettheteam/edit/:id',
    element: <Suspense fallback={<PageLoader />}><PrivateRoute children={<AdminMeetTheTeamEdit />} /></Suspense>
  },
  {
    path: '/admin/dashboard/whatweoffer/edit/:id',
    element: <Suspense ><PrivateRoute children={<AdminWhatWeOfferEdit />} /></Suspense>
  },
  {
    path: '/admin/dashboard/blog/edit/:id',
    element: <Suspense><PrivateRoute children={<AdminBlogEdit />} /></Suspense>
  },
  {
    path: '/admin/dashboard/events/edit/:id',
    element: <Suspense><PrivateRoute children={<AdminEventsEdit />} /></Suspense>
  },
]

export default adminEditRoutes