/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './Components/Shop/Shop.jsx';
import Home from './Components/Layout/Home.jsx';
import Orders from './Components/Orders/Orders.jsx';
import Invemtory from './Components/Invemtory/Invemtory.jsx';
import Login from './Components/Login/Login.jsx';
import cartProductLoader from './Components/cartProductLoader.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'order',
        element:<Orders></Orders>,
        loader: () => cartProductLoader()
      },
      {
        path:'/inventry',
        element:<Invemtory></Invemtory>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />

  </StrictMode>,
)
