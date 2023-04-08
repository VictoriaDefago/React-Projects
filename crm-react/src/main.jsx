import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorPage from "./components/ErrorPage"
import EditClient, { loader as editClientsLoader } from "./components/EditClient"
import NewClient, { action as newClientAction } from './pages/NewClient'
import Index, { loader as clientsLoader } from './pages/Index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clientes/nuevo',
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clientes/:clientID/editar',
        element: <EditClient />,
        loader: editClientsLoader,
        errorElement: <ErrorPage />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
