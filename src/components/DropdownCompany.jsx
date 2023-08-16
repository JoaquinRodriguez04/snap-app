import React from 'react'

const DropdownCompany = ({company}) => {
  return (
    <div className={`dropdown-container ${company && 'dropdown-asset'} dropdown-company`}>
      <ul className='dropdown-ul-wrapper'>
        <li className='dropdown-li-item'>
          History
        </li>
        <li className='dropdown-li-item'>
            Our Team
        </li>
        <li className='dropdown-li-item'>
            Blog
        </li>
       </ul>
    </div>
  )
};

export default DropdownCompany;
