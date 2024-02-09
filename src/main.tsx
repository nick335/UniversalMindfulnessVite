import React, { lazy, Suspense } from 'react'
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
import PrivateRoute from "./components/utility/RouteProtector/PrivateRoute";
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
import Login from './components/Login/Login.tsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import adminAddRoutes from './Routes/adminAddRoutes.tsx'
import PageLoader from './components/utility/Loader/PageLoader.tsx'
import adminRoutes from './Routes/adminRoutes.tsx'

const Blog = lazy(() => import('./pages/Blog.tsx'))

const queryClient = new QueryClient()

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
        element: <Suspense fallback={<PageLoader />}><Blog /></Suspense>
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
    element: (
      <Suspense fallback={<PageLoader />}>
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      ...adminRoutes,
      ...adminAddRoutes
    ]
  },
  {
    path: '/admin',
    element: <Login />
  },
  {
    path: '/loader',
    element: <PageLoader />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode='wait' key={nanoid()}>
        <RouterProvider router={router} />
      </AnimatePresence>
    </QueryClientProvider>
    
  </React.StrictMode>,
)
