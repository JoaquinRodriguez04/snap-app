import React, { useState } from 'react';

import LiFeatures from './LiFeatures';
import LiCompany from './LiCompany';
import DropdownFeatures from './DropdownFeatures';
import DropdownCompany from './DropdownCompany';

const NavBarLeft = () => {

    const [features, setFeatures] = useState(false);

    const [company, setCompany] = useState(false);

    const handleFeatures= () => {
        setFeatures(!features);
        setCompany(false);
    };    
    
    const handleCompany= () => {
        setCompany(!company);
        setFeatures(false);
    };

    return (
      <div className='navbar-left-wrapper'>
            <div className='list-navbar-wrapper'>
                <ul className='ul-wrapper'>
                    <button className='btn-ul-navbar'>
                        <LiFeatures handleFeatures={handleFeatures} features={features}/>
                        <DropdownFeatures features={features}/> 
                    </button>
                    <button className='btn-ul-navbar'>
                        <LiCompany handleCompany={handleCompany} company={company}/>
                        <DropdownCompany company={company}/>  
                    </button>
                    <button>
                        <li>Careers</li>
                    </button>
                    <button>
                        <li>About</li>
                    </button>
                </ul>
            </div>
      </div> 
    )
};

export default NavBarLeft;