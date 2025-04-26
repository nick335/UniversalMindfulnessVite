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
import PageHeaderEditForm from "../components/admin/utility/PageHeaderEditForm";
import AdminContactUsEdit from "../pages/edit/AdminContactUsEdit";



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
  {
    path: '/admin/dashboard/events/editHeader',
    element: <Suspense><PrivateRoute children={<PageHeaderEditForm page="events" value="events" />} /></Suspense>
  },
  {
    path: '/admin/dashboard/meettheteam/editHeader',
    element: <Suspense><PrivateRoute children={<PageHeaderEditForm page="meet the team" value="team" />} /></Suspense>
  },
  {
    path: '/admin/dashboard/about/editHeader',
    element: <Suspense><PrivateRoute children={<PageHeaderEditForm page="about" value="about" />} /></Suspense>
  },
  {
    path: '/admin/dashboard/whatweoffer/editHeader',
    element: <Suspense><PrivateRoute children={<PageHeaderEditForm page="whatweoffer" value="whatweoffer" />} /></Suspense>
  },
  {
    path: '/admin/dashboard/testimonial/editHeader',
    element: <Suspense><PrivateRoute children={<PageHeaderEditForm page="testimonial" value="testimonial" />} /></Suspense>
  },
  {
    path: '/admin/dashboard/contactus',
    element: <Suspense><PrivateRoute children={<AdminContactUsEdit />} /></Suspense>
  }
]

export default adminEditRoutes