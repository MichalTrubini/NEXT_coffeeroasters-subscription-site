//import {useDispatch} from 'react-redux';
//import { visibilityActions } from '../store';

import logo from '../../public/images/shared/desktop/logo.svg';
import Link from 'next/link';

const Header = (props) => {
   
    //const dispatch = useDispatch();

    const showMenuHandler = () => {
        //dispatch (visibilityActions.isVisible())
    }

    return ( 
        <header className={props.className + " header"}>
            <nav className="header__nav">
                <Link href={'/'}><img src={logo} alt="coffeeroasters" className='header__logo'/></Link>
                <img className='header__hamburger' src={props.src} alt="menu" onClick={showMenuHandler}/>
                <ul className='header__list'>
                    <li><Link href={'/'} className='header__list-item'>Home</Link></li>
                    <li><Link href={'/about'} className='header__list-item'>About Us</Link></li>
                    <li><Link href={'/subscription'} className='header__list-item'>Create Your Plan</Link></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;