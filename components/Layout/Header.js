import {useDispatch, useSelector} from 'react-redux';
import { visibilityActions } from '../../store';
import MobileMenu from '../MobileMenu';
import { useEffect } from 'react';

import logo from '../../public/images/shared/desktop/logo.svg';
import hamburger from '../../public/images/shared/mobile/icon-hamburger.svg';
import cross from '../../public/images/shared/mobile/icon-close.svg';
import Link from 'next/link';
import Image from 'next/image';
import Portal from "../Portal";

const Header = (props) => {
   
    const dispatch = useDispatch();

    const showMenuHandler = () => {
        dispatch (visibilityActions.isVisible())
    }

    const showMenu = useSelector(state => state.visibility.showElement);

    useEffect(() => {
        showMenu === true ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
    },[showMenu]) 
    

    return ( 

        <>
        <Portal selector={'#Portal'}>
            {showMenu && <MobileMenu/>}
        </Portal>
        <header className={props.className + " header"}>
            <nav className="header__nav">
                <div className='header__logo-container'>
                    <Link href={'/'}><a><Image src={logo} alt="coffeeroasters" className='header__logo'/></a></Link>
                </div>
                <div className='header__hamburger-container'>
                    <Image className='header__hamburger' src={!showMenu ? hamburger : cross} alt="menu" onClick={showMenuHandler} layout='intrinsic'/>
                </div>
                <ul className='header__list'>
                    <li className='header__list-item'><Link href={'/'}>Home</Link></li>
                    <li className='header__list-item'><Link href={'/about'} >About Us</Link></li>
                    <li className='header__list-item'><Link href={'/subscription'}>Create Your Plan</Link></li>
                </ul>
            </nav>
        </header>
        </>

     );
}
 
export default Header;