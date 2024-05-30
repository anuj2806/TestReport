
import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assests/avtar.png'
import customer from '../assests/sidebaricon/customer.png'
import dash from '../assests/sidebaricon/dash.png'
import file from '../assests/sidebaricon/file.png'
import setting from '../assests/sidebaricon/setting.png'
import upload from '../assests/upload.png'

const NavBar = () => {
  return (
    <nav>
        <div className="userdetail">
            <img src={avatar} alt="avtar" width={'100px'} height={'100px'}/>
            <label htmlFor="username" id='username' >Neha Sharma</label>
            <p className="role">Manager</p>
        </div>
        <div className="navbuttons">
            <Link to={'/dashboard'}  style={{ textDecoration: 'none' }}>
            <button className="navbutton">
                <img src={dash} alt="dashboard" width={'20px'}/>
                <label htmlFor="">Dashboard</label>
            </button>
            </Link>
            <Link to={'/customer'} style={{ textDecoration: 'none' }}>
            <button className="navbutton">
                <img src={customer} alt="customer" width={'20px'}/>
                <label htmlFor="">Customer</label>
            </button>
            </Link>
            
            <Link to={'/settings'} style={{ textDecoration: 'none' }}>
            <button className="navbutton">
                    <img src={setting} alt="setting" width={'20px'}/>
                    <label htmlFor="">Settings</label>
                </button>
            </Link>
            <Link to={'/genratereport'} style={{ textDecoration: 'none' }}>
            <button className="navbutton">
                <img src={file} alt="file" width={'20px'}/>
                <label htmlFor="">Genrate Report</label>
            </button>
            </Link>
            <Link to={'/uploadexcel'} style={{ textDecoration: 'none' }}>
            <button className="navbutton">
                <img src={upload} alt="upload" width={'20px'} />
                <label htmlFor="">Upload Excel</label>
            </button>
            </Link>
        </div>
    </nav>
  )
}

export default NavBar
