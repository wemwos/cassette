import React from 'react'

import Layout from "../Layout/Layout"

import '../assets/css/dashboard.css'

function Dashboard() {
  return (
    <>
        <Layout activePage={'Dashboard'}>
            {/* Page Content */}
            <div className="container w-100 h-100 m-0 p-3 py-2 dashboard-container">
            <div className="row w-auto m-0 overflow-x-hidden overflow-y-auto">
                <div className="col p-2 m-0 mt-1 page-title d-flex align-items-center justify-content-between ">
                    <h1 className='m-0'>Dashbaord</h1>
                    <p className='text-light dashboard-nav m-0'>Home / Dashboard</p>
                </div>
            </div>
            </div>
        </Layout>
    </>
  )
}

export default Dashboard