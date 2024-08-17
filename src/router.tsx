import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import Error from './pages/error/Error'
import About from './pages/about/About'

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
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: '/contact',
    element: <About />,
    errorElement: <Error />,
  },
])

export default router
