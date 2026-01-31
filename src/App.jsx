import React from 'react'
import Header from './components/Header'

import Body from './components/Body'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App