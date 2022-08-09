import Link from "next/link";
import Header from "./Layout/Header";

import { useDispatch } from "react-redux";
import { visibilityActions } from "../store";

const MobileMenu = () => {
  const dispatch = useDispatch();

    const showMenuHandler = () => {
        dispatch(visibilityActions.isVisible());
      };

  return (
    <>
      <div className="mobile-menu">
        <ul className="mobile-menu__list">
          <li className="mobile-menu__list-item">
            <Link
              href={"/"}>
              <a onClick={showMenuHandler}>Home</a>
            </Link>
          </li>
          <li className="mobile-menu__list-item">
            <Link
              href={"/about"}
            >
            <a onClick={showMenuHandler}>About Us</a>
            </Link>
          </li>
          <li className="mobile-menu__list-item">
            <Link
              href={"/subscription"}
            >
            <a onClick={showMenuHandler}>Create Your Plan</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu__overlay"></div>
    </>
  );
};

export default MobileMenu;
