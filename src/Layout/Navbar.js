import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import NavImage from './NavImage';
import NavDecoration from '../assets/Decoration1.png';
import NavDivider from '../assets/Divider.png';
import classes from './Navbar.module.css';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // CLICK HANDLERS
  const openNavbarHandler = () => {
    setNavbarOpen(true);
  };
  const closeNavbarhandler = () => {
    setNavbarOpen(false);
  };

  // DYNAMIC CLASSES
  let navbarClasses = classes.navbar;
  if (navbarOpen) {
    navbarClasses = `${classes.navbar} ${classes.navbarOpen}`;
  };

  let openNavbarButtonClass = classes.navbarButtonActive;
  if (navbarOpen) {
    openNavbarButtonClass = undefined;
  };

  let closeNavbarButtonClass = undefined;
  if (navbarOpen) {
    closeNavbarButtonClass = classes.navbarButtonActive;
  };

  return (
    <div className={navbarClasses}>
      <div className={classes.navbarControl}>
        <button 
          className={openNavbarButtonClass}
          onClick={openNavbarHandler}
        >&#11162;</button>
        <button 
          className={closeNavbarButtonClass}
          onClick={closeNavbarhandler}
        >&#11160;</button>
      </div>
      <div className={classes.navSpacing}>
        <NavImage />
        <div className={classes.navLinks}>
          <h1>Jessie Madsen</h1>
          <img src={NavDivider} alt="" />
          <NavLink 
            to="/"
            className={({ isActive }) => isActive ? classes.active : undefined}
            onClick={closeNavbarhandler}
          >About Me</NavLink>
          <NavLink 
            to="/qualifications"
            className={({ isActive }) => isActive ? classes.active : undefined}
            onClick={closeNavbarhandler}
          >Qualifications</NavLink> 
          <NavLink 
            to="/portfolio"
            className={({ isActive }) => isActive ? classes.active : undefined}
            onClick={closeNavbarhandler}
          >Portfolio</NavLink>
          <NavLink 
            to="/contact"
            className={({ isActive }) => isActive ? classes.active : undefined}
            onClick={closeNavbarhandler}
          >Contact</NavLink>
        </div>
        <div className={classes.navbarDecoration}>
          <img src={NavDecoration} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;