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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
