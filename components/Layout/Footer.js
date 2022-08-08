import logo from "../../public/images/shared/desktop/logo-light.svg";
import facebook from "../../public/images/shared/desktop/icon-facebook.svg";
import twitter from "../../public/images/shared/desktop/icon-twitter.svg";
import instagram from "../../public/images/shared/desktop/icon-instagram.svg";

import Link from 'next/link';

const Footer = () => {
  const menuItems = [
    {
      page: 'home',
      path: '/'
    },
    {
      page: 'about us',
      path: '/about'
    },
    {
      page: 'create your plan',
      path: '/subscription'
    }
  ]

  return (
    <footer className="footer margin-fix">
      <div className="footer__container ">
        <img src={logo} alt="coffeeroasters" className="footer__logo" />
        <ul className="footer__list">
          {menuItems.map((item) => (
            <li key={item.page}><Link href={item.path} className="footer__list-item">
              {item.page}
            </Link></li>
          ))}
        </ul>
        <div className="footer__social">
          <img src={facebook} alt="facebook" className="footer__social-icon" />
          <img src={twitter} alt="twitter" className="footer__social-icon" />
          <img
            src={instagram}
            alt="instagram"
            className="footer__social-icon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
