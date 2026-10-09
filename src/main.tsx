import './styles/tokens.css'
import './styles/globals.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider future={{ v7_startTransition: true }} router={router} />
  </React.StrictMode>,
)
