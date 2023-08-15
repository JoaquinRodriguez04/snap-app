import WidgetHomeBars from './WidgetHomeBars';
import NavBarLeft from './NavBarLeft';
import NavBarRight from './NavBarRight';
import WidgetClose from './widgetClose';
import { useState } from 'react';
import LogoImage from './LogoImage';

const NavBarSnap = () => {

    const [navbar, setNavbar] = useState(false);

    const handleActivatedNavbar = () => {
        setNavbar(!navbar);
    }

    const handleCloseNavbar = () => {
        setNavbar(false);
    };

    return (
        <header className='navbar-container'>
            <LogoImage/>
            <WidgetHomeBars handleActivatedNavbar={handleActivatedNavbar}/>
            <div className='navbar-desktop'>
                <NavBarLeft/>
                <NavBarRight/>
            </div>
            {navbar && 
            <div className='navbar-mobile'>
                <div className='mobile-flex'>
                    <div className='mobile-close-wrapper'>
                        <WidgetClose handleCloseNavbar={handleCloseNavbar}/>
                    </div>
                    <NavBarLeft/>
                    <NavBarRight/>
                </div>
            </div>
            }
        </header>
    )
};

export default NavBarSnap;
