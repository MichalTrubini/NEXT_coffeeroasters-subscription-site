//import {useDispatch} from 'react-redux';
//import { visibilityActions } from '../store';

import logo from '../../public/images/shared/desktop/logo.svg';
import Link from 'next/link';
import Image from 'next/image';

const Header = (props) => {
   
    //const dispatch = useDispatch();

    const showMenuHandler = () => {
        //dispatch (visibilityActions.isVisible())
    }

    return ( 
        <header className={props.className + " header"}>
            <nav className="header__nav">
                <div className='header__logo-container'>
                    <Link href={'/'}><a><Image src={logo} alt="coffeeroasters" className='header__logo'/></a></Link>
                </div>
                <div className='header__hamburger-container'>
                    <Image className='header__hamburger' src={props.src} alt="menu" onClick={showMenuHandler} layout='intrinsic'/>
                </div>
                <ul className='header__list'>
                    <li className='header__list-item'><Link href={'/'}>Home</Link></li>
                    <li className='header__list-item'><Link href={'/about'} >About Us</Link></li>
                    <li className='header__list-item'><Link href={'/subscription'}>Create Your Plan</Link></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;