import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Home() {
  
  // const activeLinks = ['home', 'create_organization', 'add_manager', 'add_agent', 'services', 'service_agent'];

  const role = localStorage.getItem('role');
  let activeLinks = [];

  if (role === 'Super Admin') {
    activeLinks = ['home', 'create_organization', 'add_manager'];
  } else if (role === 'Admin') {
    activeLinks = ['add_agent', 'add_service', 'add_doctor'];
  }

  return (
    <div>
      {/* ======= Header ======= */}
      <Header />

      {/* ======= Sidebar ======= */}
      <SideBar activeLinks={activeLinks} />

      <main dir="rtl" id="main" className="main"></main>{/* End #main */}
    </div>
    
  )
}

export default Home