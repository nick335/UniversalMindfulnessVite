// import { lazy, Suspense } from "react"
// import MeetTheTeam from '../pages/MeetTheTeam.tsx'
// import Events from '../pages/Events.tsx'
// import BlogDetails from '../pages/BlogDetails.tsx'
// import Checkout from '../components/checkout/Checkout.tsx'
// import Testimonial from '../pages/Testimonial.tsx'
// const Blog = lazy(() => import('../pages/Blog.tsx'))
// const Home = lazy(() => import('../pages/Home.tsx'))
// const ContactUs = lazy(() => import('../pages/ContactUs.tsx'))
// const userRoutes = [
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/contactus',
//     element: <ContactUs />
//   },
//   {
//     path: '/meettheteam',
//     element: <MeetTheTeam />,
//   },
//   {
//     path: '/events',
//     element: <Events />
//   },
//   {
//     path: '/blog',
//     element: <Suspense fallback={<PageLoader />}><Blog /></Suspense>
//   },
//   {
//     path:'/shop',
//     element: <Shop />
//   },
//   {
//     path:'/shop/bracelet',
//     element: <ShopItemDescription />
//   },
//   {
//     path:'/about',
//     element: <About />
//   },
//   {
//     path: '/whatweoffer',
//     element: <WhatWeOffer />
//   },
//   {
//     path: 'blog/content',
//     element: <BlogDetails />
//   },
//   {
//     path: 'shop/checkout',
//     element: <Checkout />
//   },
//   {
//     path:'/testimonials',
//     element: <Testimonial/>
//   },
// ]