import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Components/Layout/Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Router, RouterProvider, Route } from 'react-router-dom'
import ErrorPage from './Components/Error/ErrorPage.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, {githubFollowerInfo} from './Components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },

//       {
//         path: "/contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])



const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path='/' element={<Layout />} errorElement={<ErrorPage />} >

        <Route path="" element={<Home/>} />
        <Route path="about" element={<About/>} > 

          <Route path='me' element={<User />} />

        </Route>
        <Route path="contact" element={<Contact/>} />
        <Route path="user" element={<User/>} />
        <Route path="user/:userID" element={<User/>} />
        <Route path="github" element={<Github/>} loader={githubFollowerInfo} />



    </Route>


  ),
  {basename: "/React-Routing-Demo"}

)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
