import React from 'react'
import MainNavigation from './MainNavigation'

export default function Layout({children}) {
  return (

    <div>
        <MainNavigation />
        <div>
            {children}
        </div>
    </div>
  )
}
