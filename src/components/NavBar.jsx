
import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assests/avtar.png'
const NavBar = () => {
  return (
   <nav>
    <div className="userdetail">
        <img src={avatar} alt="avtar" width={'100px'} height={'100px'}/>
        <label htmlFor="username">Neha Shrama</label>
        <p className="role">Manager</p>
    </div>
    <div className="navbuttons">
        <Link to={'/'}>
        <button className="navbutton">
            <img src="" alt="" />
            <label htmlFor="">Customer</label>
        </button>
        </Link>
        <Link to={'/dashboard'}>
        <button className="navbutton">
            <img src="" alt="" />
            <label htmlFor="">Dashboard</label>
        </button>
        </Link>
       <Link to={'/settings'}>
       <button className="navbutton">
            <img src="" alt="" />
            <label htmlFor="">Settings</label>
        </button>
       </Link>
       <Link to={'genratereport'}>
        <button className="navbutton">
            <img src="" alt="" />
            <label htmlFor="">Genrate Report</label>
        </button>
        </Link>
        <Link to={'uploadexcel'}>
        <button className="navbutton">
            <img src="" alt="" />
            <label htmlFor="">Upload Excel</label>
        </button>
        </Link>
    </div>
   </nav>
  )
}

export default NavBar
