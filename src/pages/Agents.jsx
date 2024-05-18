import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Agents() {

  const activeLinks = ['add_agent', 'add_service', 'add_doctor'];



  return (
    <div>
        {/* ======= Header ======= */}
        <Header />

        {/* ======= Sidebar ======= */}
        <SideBar activeLinks={activeLinks} />

    </div>
  )
}

export default Agents