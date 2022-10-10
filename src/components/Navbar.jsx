import { React } from 'react';
import "../assets/css/navbar.css";
import { NavLink } from "react-router-dom";
import logo from '../assets/img/pokebola.png'

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <nav className="navbar d-flex bd-highlight mb-3">
      <div className='me-auto p-2 bd-highlight'>
        <img src={logo} alt="" width="40" height="40"/>
      </div>
      <div className='p-2 bd-highlight'>
        <NavLink className={ setActiveClass } to="/"> <h4>Home</h4> </NavLink>
      </div>
      <div className='p-2 bd-highlight'>
        <NavLink className={ setActiveClass } to="/pokemones"> <h4>Pokemones</h4> </NavLink>
      </div>
    </nav>
  );
}
