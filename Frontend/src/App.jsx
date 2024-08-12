import React from 'react'
import "./App.css";
import Home from '../pages/Home';
import {Toaster } from "react-hot-toast"
import Success from '../pages/Success';
import NotFound from '../pages/NotFound';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/success",
    element: <Success/>

  },
  {
    path: "/notfound",
    element: <NotFound/>

  }
]);

const App = () => {
  return (
    <>
    <Toaster/>
    <RouterProvider  router={router}/>
    </>

  )
}

export default App