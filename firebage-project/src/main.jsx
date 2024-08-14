import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/components/Root/Root.jsx';

import Home from './assets/components/Home/Home.jsx';
import ErrorPage from './assets/components/ErrorPage/Errorpage.jsx';
import Login from './assets/components/Login/Login.jsx';
import Register from './assets/components/Register/Register.jsx';
import AuthProvider from './assets/components/AuthProvider/AuthProvider.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      }

    ]



  },
]);



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
