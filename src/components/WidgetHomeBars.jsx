import React from 'react';
import homeBars from '../assets/icon-menu.svg';

const WidgetHomeBars = ({handleActivatedNavbar}) => {
  return (
    <button onClick={handleActivatedNavbar}>
        <img src={homeBars} className='icon-home-bars' alt="home-bars-icon" />
    </button>
  )
}

export default WidgetHomeBars
