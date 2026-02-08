
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
const Cart = lazy(() => import('./components/Cart.jsx'));
const CheckoutPage = lazy(() => import('./components/CheckoutPage.jsx'));
// import ProductDetail from './components/ProductDetail.jsx'
const ProductDetail = lazy(() => import('./components/ProductDetail.jsx'));
import Error from './components/Error.jsx'



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/checkoutpage',
        element: <Suspense fallback={<p>Loading checkoutpage...</p>}><CheckoutPage /></Suspense>
      },
      {
        path: '/products/:id',

        element: <Suspense fallback={<p>Loading product details...</p>}><ProductDetail /></Suspense>
      },
      {
        path: '/cart',
        element: <Suspense fallback={<p>Loading Cart...</p>}><Cart /></Suspense>
      },

    ]

  },


])

createRoot(document.getElementById('root')).render(


  <RouterProvider router={appRouter}></RouterProvider>

)
