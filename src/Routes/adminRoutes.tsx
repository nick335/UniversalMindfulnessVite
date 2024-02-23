// /* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import PrivateRoute from "../components/utility/RouteProtector/PrivateRoute";
import { Suspense } from "react";
import PageLoader from "../components/utility/Loader/PageLoader";
import AdminMeetTheTeam from "../pages/AdminMeetTheTeam";
const AboutSections = lazy(() => import('../components/admin/about/AboutSections'))
const AdminHome = lazy(() => import('../components/admin/home/Home'))
const AdminAbout = lazy(() => import('../pages/AdminAbout'))
const AdminBlog = lazy(() => import('../pages/AdminBlog'))
const AdminShop = lazy(() => import('../pages/AdminShop'))
const AdminTestimonial = lazy(() => import('../pages/AdminTestimonial'))
const AdminEvents = lazy(() => import('../pages/AdminEvents'))
const AdminWhatWeOffer = lazy(() => import('../pages/AdminWhatWeOffer'))


const adminRoutes = [
  {
    path: '/admin/dashboard',
    element: <Suspense fallback={<PageLoader />}><PrivateRoute  children={<AdminHome />}/></Suspense> 
  },
  {
    path: '/admin/dashboard/testimonial',
    element: <Suspense fallback={<PageLoader />}><PrivateRoute children={<AdminTestimonial />} /></Suspense> 
  },
  {
    path: '/admin/dashboard/events',
    element: <Suspense fallback={<PageLoader />}><PrivateRoute children={<AdminEvents />}/></Suspense> 
  },
  {
    path: '/admin/dashboard/blog',
    element: <Suspense fallback={<PageLoader />}><PrivateRoute children={<AdminBlog />} /></Suspense> 
  },
  {
    path: '/admin/dashboard/whatweoffer',
    element: <Suspense fallback={<PageLoader />}><PrivateRoute children={<AdminWhatWeOffer />} /></Suspense> 
  },
  {
    path: '/admin/dashboard/shop',
    element: <Suspense fallback={<PageLoader />}><PrivateRoute children={<AdminShop />} /></Suspense> 
  },
  {
    path: '/admin/dashboard/about',
    element: <Suspense fallback={<PageLoader />}><PrivateRoute children={<AdminAbout />} /></Suspense>,
    children: [
      {
        path: '/admin/dashboard/about',
        element: <Suspense fallback={<PageLoader />}><PrivateRoute  children={<AboutSections />}/></Suspense> 
      },
      {
        path: '/admin/dashboard/about/meettheteam',
        element: <Suspense fallback={<PageLoader />}><PrivateRoute children={<AdminMeetTheTeam />} /></Suspense> 
      }
    ]
  }, 
]

export default adminRoutes;