import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Error from './Components/Error'
import Showcase from './Pages/Showcase'
import Home from './Components/Home'
import SharedLayout from './Components/SharedLayout'
import Projects from './Components/Projects'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='*' element={<Error />} />
      <Route path='project' element={<SharedLayout />}>
        <Route index element={<Projects />} />
        <Route path=':name' element={<Showcase />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
