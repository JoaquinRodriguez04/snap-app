import React from 'react'
import close from '../assets/icon-close-menu.svg';

const WidgetClose = ({handleCloseNavbar}) => {
  return (
    <button onClick={handleCloseNavbar}>
        <img src={close} className='icon-close-navbar' alt="home-bars-icon" />
    </button>
  )
};

export default WidgetClose;
