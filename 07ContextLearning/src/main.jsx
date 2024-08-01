import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Login from './Components/Login/Login.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Usercontextprovider from './Context/Usercontext/Usercontextprovider.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Layout />} >

      <Route path="" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />



    </Route>

  )
)



ReactDOM.createRoot(document.getElementById('root')).render(

  <Usercontextprovider>
  
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
  </React.StrictMode>


  </Usercontextprovider>
)
