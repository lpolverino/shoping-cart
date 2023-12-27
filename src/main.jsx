import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./componets/App/App"
import './index.css'
import Shop from './componets/Shop/Shop'
import ErrorPage from "./componets/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage msg="Oh no, this route doesn't exist!"/>,
  },
  {
    path: "shop",
    element: <Shop />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
