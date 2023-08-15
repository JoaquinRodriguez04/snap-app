import React from 'react';
import todo from '../assets/icon-todo.svg';
import calender from '../assets/icon-calendar.svg';
import Reminders from '../assets/icon-Reminders.svg';
import Planning from '../assets/icon-planning.svg';

const DropdownFeatures = () => {
  return (
    <div 
    className="dropdown-container dropdown-features">
        <ul className='dropdown-ul-wrapper'>
            <li className='dropdown-li-item'>
                <img src={todo} alt="image-of-todo" />
                Todo List
            </li>
            <li className='dropdown-li-item'>
                <img src={calender} alt="image-of-calender" />
                Calender
            </li>
            <li className='dropdown-li-item'>
                <img src={Reminders} alt="image-of-Reminders" />
                Reminders
            </li>
            <li className='dropdown-li-item'>
                <img src={Planning} alt="image-of-Planning" />
                Planning
            </li>
        </ul>
    </div>
  )
};

export default DropdownFeatures;
