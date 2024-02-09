import PrivateRoute from "../components/utility/RouteProtector/PrivateRoute";
import BlogAdd from "../pages/add/BlogAdd";
import ChildrenTestimonialAdd from "../pages/add/ChildrenTestimonialAdd";
import EventsAdd from "../pages/add/EventsAdd";
import HeroCarouselAdd from "../pages/add/HeroCarouselAdd";
import MeettheTeamAdd from "../pages/add/MeettheTeamAdd";
import ParentTestimonialAdd from "../pages/add/ParentTestimonialAdd";
import SponsorImagesAdd from "../pages/add/SponsorImagesAdd";
import PageLoader from "../components/utility/Loader/PageLoader";
import { Suspense } from "react";


const adminAddRoutes = [
  {
    path: '/admin/dashboard/herocarouselimages/add',
    element: <Suspense fallback={<PageLoader />} ><PrivateRoute children={<HeroCarouselAdd />} /></Suspense>
  },
  {
    path: '/admin/dashboard/events/add',
    element: <Suspense fallback={<PageLoader />} ><PrivateRoute children={<EventsAdd />} /></Suspense>
  },
  {
    path: '/admin/dashboard/blog/add',
    element: <Suspense fallback={<PageLoader />} ><PrivateRoute children={<BlogAdd />} /></Suspense>
  },
  {
    path: '/admin/dashboard/about/meettheteam/add',
    element: <Suspense fallback={<PageLoader />} ><PrivateRoute children={<MeettheTeamAdd />} /></Suspense>
  },
  {
    path: '/admin/dashboard/testimonial/parent/add',
    element: <Suspense fallback={<PageLoader />} ><PrivateRoute children={<ParentTestimonialAdd />} /></Suspense>
  },
  {
    path: '/admin/dashboard/testimonial/children/add',
    element: <Suspense fallback={<PageLoader />} ><PrivateRoute children={<ChildrenTestimonialAdd />} /></Suspense>
  },
  {
    path: '/admin/dashboard/sponsorsimage/add',
    element: <Suspense fallback={<PageLoader />} ><PrivateRoute children={<SponsorImagesAdd />} /></Suspense>
  },
]

export default adminAddRoutes;