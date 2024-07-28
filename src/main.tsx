import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './utils/i18n.ts'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import EntryPage from './Pages/EntryPage.tsx'
import Home from './Pages/Home/Home.tsx'
import Default from './Pages/default/Default.tsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<EntryPage/>,
    children:[
      {
        index:true,
        element:<Default/>
      },
      {
        path:'photos',
        element:<Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
