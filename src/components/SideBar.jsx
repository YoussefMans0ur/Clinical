import React from 'react';

function SideBar({ activeLinks }) {
  return (
    <div>
      <aside dir="rtl" id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          {activeLinks && activeLinks.includes('home') && (
            <li className="nav-item">
              <a className="nav-link" href="/home">
                <i className="bi bi-grid"></i>
                <span>الرئيسية</span>
              </a>
            </li>
          )}
          {activeLinks && activeLinks.includes('create_organization') && (
            <li className="nav-item">
              <a className="nav-link" href="/organization">
                <i className="bi bi-person"></i>
                <span>إنشاء منظمة</span>
              </a>
            </li>
          )}
          {activeLinks && activeLinks.includes('add_manager') && (
            <li className="nav-item">
              <a className="nav-link" href="/managers">
                <i className="bi bi-person"></i>
                <span>إضافة مدير</span>
              </a>
            </li>
          )}
          {activeLinks && activeLinks.includes('add_service') && (
            <li className="nav-item">
              <a className="nav-link" href="/add_service">
                <i className="bi bi-person"></i>
                <span>إضافة خدمة</span>
              </a>
            </li>
          )}
          {activeLinks && activeLinks.includes('add_doctor') && (
            <li className="nav-item">
              <a className="nav-link" href="/add_doctor">
                <i className="bi bi-person"></i>
                <span>إضافة دكتور</span>
              </a>
            </li>
          )}
          
        </ul>
      </aside>
    </div>
  );
}

export default SideBar;
