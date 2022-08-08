import Footer from "./Footer";
import Header from "./Header";

import hamburger from '../../public/images/shared/mobile/icon-hamburger.svg';

const Layout = (props) => {
    return ( 
        <>
            <Header src={hamburger}/>
            <main>{props.children}</main>
            <Footer/>
        </>
     );
}
 
export default Layout;