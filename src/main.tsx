import './styles/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from './components/Home'

function Layout() {
  return (
    <div className="flex min-h-[100vh] min-w-[100vw] items-center justify-center">
      <Home />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
)
