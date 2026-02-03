
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import Cart from './components/Cart.jsx'
import CheckoutPage from './components/CheckoutPage.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import Error from './components/Error.jsx'
import Search from './components/Search.jsx'

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
        element: <CheckoutPage />
      },
      {
        path: '/products/:id',
        element: <ProductDetail />
      },
      {
        path: '/cart',
        element: <Cart />
      },

    ]

  },


])

createRoot(document.getElementById('root')).render(


  <RouterProvider router={appRouter}></RouterProvider>

)
