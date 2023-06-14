import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from './components/NavigationBar/NavigationBar'


function RootLayout() {
  return (
    <div>

        <NavigationBar/>
        
        <Outlet/>
    </div>
  )
}

export default RootLayout