import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import Error from './pages/error/Error'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Works from './pages/works/Works'
import WorkDetail, { workDetailLoader } from './pages/works/WorkDetail'

/* This code snippet is creating a router using a function `createBrowserRouter` with an empty array as
an argument. The router is then exported as the default export of the module. */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: '/works',
    element: <Works />,
    errorElement: <Error />,
  },
  {
    path: '/works/:id',
    element: <WorkDetail />,
    loader: workDetailLoader,
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <Error />,
  },
])

export default router
