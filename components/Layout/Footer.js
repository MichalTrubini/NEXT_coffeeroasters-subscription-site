import logo from "../../public/images/shared/desktop/logo-light.svg";
import facebook from "../../public/images/shared/desktop/icon-facebook.svg";
import twitter from "../../public/images/shared/desktop/icon-twitter.svg";
import instagram from "../../public/images/shared/desktop/icon-instagram.svg";

import Image from 'next/image';
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
        <Image src={logo} alt="coffeeroasters" className="footer__logo" />
        <ul className="footer__list">
          {menuItems.map((item) => (
            <li key={item.page} className="footer__list-item"><Link href={item.path}>
              {item.page}
            </Link></li>
          ))}
        </ul>
        <div className="footer__social">
          <Image src={facebook} alt="facebook" className="footer__social-icon" />
          <Image src={twitter} alt="twitter" className="footer__social-icon" />
          <Image
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
