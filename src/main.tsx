import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './pages/ErrorPage.tsx'
import PrivateRoute from "./components/utility/RouteProtector/PrivateRoute";
import { AnimatePresence } from 'framer-motion'
import { nanoid } from 'nanoid'
import Checkout from './components/checkout/Checkout.tsx'
import Testimonial from './pages/Testimonial.tsx'
import Layout from './components/admin/Layout/Layout.tsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import adminAddRoutes from './Routes/adminAddRoutes.tsx'
import PageLoader from './components/utility/Loader/PageLoader.tsx'
import adminRoutes from './Routes/adminRoutes.tsx'
import PrivacyPolicy from './components/privacypolicy/PrivacyPolicy.tsx'
import adminEditRoutes from './Routes/adminEditRoutes.tsx'
import BlogPageSorter from './components/blogs/BlogPageSorter.tsx'

// user routes
const ShopItemDescription = lazy(() => import('./pages/ShopItemDescription.tsx'))
const Login = lazy(() => import('./components/Login/Login.tsx'))
const BlogDetails = lazy(() => import('./pages/BlogDetails.tsx'))
const About = lazy(() => import('./pages/About.tsx'))
const Blog = lazy(() => import('./pages/Blog.tsx'))
const Home = lazy(() => import('./pages/Home.tsx'))
const ContactUs = lazy(() => import('./pages/ContactUs.tsx'))
const MeetTheTeam = lazy(() => import('./pages/MeetTheTeam.tsx'))
const Events = lazy(() => import('./pages/Events.tsx'))
const Shop = lazy(() => import('./pages/Shop.tsx'))
const WhatWeOffer =lazy(() => import('./pages/WhatWeOffer.tsx'))
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<PageLoader />}><Home /></Suspense>
      },
      {
        path: '/contactus',
        element: <Suspense fallback={<PageLoader />}><ContactUs /></Suspense>
      },
      {
        path: '/meettheteam',
        element: <Suspense fallback={<PageLoader />}><MeetTheTeam /></Suspense>,
      },
      {
        path: '/events',
        element: <Suspense fallback={<PageLoader />}><Events /></Suspense>
      },
      {
        path: '/blog',
        element: <Suspense fallback={<PageLoader />}><Blog /></Suspense>,
        children:[
          {
            path: '/blog/page/:id',
            element: <Suspense fallback={<PageLoader />}><BlogPageSorter /></Suspense>
          },
          {
            path: '/blog',
            element: <Suspense fallback={<PageLoader />}><BlogPageSorter /></Suspense>
          }
        ]
      },
      {
        path:'/shop',
        element: <Suspense fallback={<PageLoader />}><Shop /></Suspense>
      },
      {
        path:'/shop/bracelet',
        element: <Suspense fallback={<PageLoader />}><ShopItemDescription /></Suspense>
      },
      {
        path:'/about',
        element: <Suspense fallback={<PageLoader />}><About /></Suspense>
      },
      {
        path: '/whatweoffer',
        element: <Suspense fallback={<PageLoader />}><WhatWeOffer /></Suspense>
      },
      {
        path: 'blog/:id',
        element: <Suspense fallback={<PageLoader />}><BlogDetails /></Suspense>,
      },
      {
        path: 'shop/checkout',
        element: <Suspense fallback={<PageLoader />}><Checkout /></Suspense>
      },
      {
        path:'/testimonials',
        element: <Suspense fallback={<PageLoader />}><Testimonial /></Suspense>
      },
      {
        path: '/privacy-policy',
        element: <Suspense fallback={<PageLoader />}><PrivacyPolicy /></Suspense>
      }
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
      ...adminAddRoutes,
      ...adminEditRoutes
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
