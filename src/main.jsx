import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

// const router = createBrowserRouter([{
//   path : '/',
//   element : <Layout/>,
//   children : [
//     {
//       path : "",
//       element : <Home/>
//     },
//     {
//       path : "about",
//       element : <About/>
//     },
//     {
//       path : "Contact",
//       element : <Contact/>
//     },
//     {
//       path : "Github",
//       element : <Github/>
//     }
//   ]

// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<Layout/>}>
         <Route path ="" element={<Home/>}/>
         <Route path ="Contact" element={<Contact/>}/>
         <Route path ="about" element={<About/>}/>
         <Route path ="user/:userID" element={<User/>}/>  
         // we are providing userid as a userid key ao that later on we can use it in the component we are rendering 
         <Route 
         //loader (can make or fire callback from here only for api fetching)
         
         path ="github" element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
