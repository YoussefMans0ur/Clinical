import React from 'react'

function Header() {
  return (
    <div>
        {/* ======= Header ======= */}
        <header dir="rtl" id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
                <a href="/home" className="logo d-flex align-items-center">
                    <span className="d-none d-lg-block">Clinical website</span>
                    <i className="bi bi-heart" style={{color: "beige", fontSize: "30px"}}></i>
                </a>
                <i className="bi bi-list toggle-sidebar-btn"></i>
            </div>{/* End Logo */}

            <nav className="header-nav ms-auto">
            <ul style={{marginRight: "800px"}} className="d-flex align-items-center">
                <li className="nav-item dropdown pe-3">
                <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                    <span className="d-none d-md-block dropdown-toggle ps-2">username</span>
                </a>{/* End Profile Iamge Icon */}
                <ul  className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li style={{marginRight: "100px"}} className="dropdown-header">
                    <h6>username</h6>
                    </li>
                    <li>
                    <hr className="dropdown-divider" />
                    </li>
                    <li style={{marginRight: "150px"}}>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                    </a>
                    </li>
                </ul>{/* End Profile Dropdown Items */}
                </li>{/* End Profile Nav */}
            </ul>
            </nav>{/* End Icons Navigation */}
        </header>{/* End Header */}
    </div>
  )
}

export default Header