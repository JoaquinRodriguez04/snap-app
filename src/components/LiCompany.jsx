import React from 'react'

const LiCompany = ({handleCompany, company}) => {
  return (
    <li className='li-company' onClick={handleCompany}>
        Company
        <span class="material-symbols-outlined">
          {company ? 'expand_Less' : 'expand_more'}  
        </span>
    </li>
  )
};

export default LiCompany;
