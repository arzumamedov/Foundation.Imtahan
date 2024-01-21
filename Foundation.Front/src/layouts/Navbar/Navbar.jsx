import React, { useContext } from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { BasketContext } from '../../Context/BasketContext'
function Navbar() {
  const {basket} = useContext(BasketContext)
  return (
    <>
      <nav>
        <div className="navText">
          <p>FOUNDATION</p>
          <ul>
            <NavLink to={'/'}><li>Home</li></NavLink>
            <NavLink to={'/add'}><li>Add</li></NavLink>
            <NavLink to={'/wishlist'}><li>Wishlist</li></NavLink>
            <NavLink to={'/basket'}><li>Basket</li></NavLink>
            <li>Blog</li>
            <li>Contact</li>
            <i className="fa-solid fa-bars"></i>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar