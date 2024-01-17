import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './pages/ErrorPage.tsx'
import Home from './pages/Home.tsx'
import ContactUs from './pages/ContactUs.tsx'
import MeetTheTeam from './pages/MeetTheTeam.tsx'
import Events from './pages/Events.tsx'
import Blog from './pages/Blog.tsx'
import Shop from './pages/Shop.tsx'
import ShopItemDescription from './pages/ShopItemDescription.tsx'
import About from './pages/About.tsx'
import WhatWeOffer from './pages/WhatWeOffer.tsx'
import { AnimatePresence } from 'framer-motion'
import { nanoid } from 'nanoid'
import BlogDetails from './pages/BlogDetails.tsx'
import Checkout from './components/checkout/Checkout.tsx'
import Testimonial from './pages/Testimonial.tsx'
import Layout from './components/admin/Layout/Layout.tsx'
import AdminHome from './components/admin/home/Home.tsx'
import AdminTestimonial from './pages/AdminTestimonial.tsx'
import AdminEvents from './pages/AdminEvents.tsx'
import AdminBlog from './pages/AdminBlog.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contactus',
        element: <ContactUs />
      },
      {
        path: '/meettheteam',
        element: <MeetTheTeam />,
      },
      {
        path: '/events',
        element: <Events />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path:'/shop',
        element: <Shop />
      },
      {
        path:'/shop/bracelet',
        element: <ShopItemDescription />
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path: '/whatweoffer',
        element: <WhatWeOffer />
      },
      {
        path: 'blog/content',
        element: <BlogDetails />
      },
      {
        path: 'shop/checkout',
        element: <Checkout />
      },
      {
        path:'/testimonials',
        element: <Testimonial/>
      },
    ]
  },
  {
    path: '/admin/dashboard',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '/admin/dashboard',
        element: <AdminHome />
      },
      {
        path: '/admin/dashboard/testimonial',
        element: <AdminTestimonial />
      },
      {
        path: '/admin/dashboard/events',
        element: <AdminEvents />
      },
      {
        path: '/admin/dashboard/blog',
        element: <AdminBlog />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AnimatePresence mode='wait' key={nanoid()}>
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>,
)
