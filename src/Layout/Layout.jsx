import React from 'react'

import Header from '../Components/Header'
import SideNav from '../Components/SideNav'


function Layout({children, activePage}) {
  return (
    <div className="container-fluid p-0 vw-100 vh-100 d-flex flex-column layout-container">
        <Header/>
        <div className="row w-100 h-100 m-0 overflow-hidden">
          <SideNav activePage={activePage}/>
          {/* Content Appended Here */}
          <div className="col overflow-auto p-0 m-0 container-parent h-100 ">
            {children}
          </div>
        </div>
    </div>
  )
}

export default Layout