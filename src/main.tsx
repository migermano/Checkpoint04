import React from 'react'
import ReactDOM from 'react-dom/client'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:'/About',
    element: <About/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)