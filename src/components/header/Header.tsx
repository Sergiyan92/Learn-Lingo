import css from "./Header.module.css";
import logo from "../../assets/ukraine.svg";

import { Link } from "react-router-dom";
import ModalComponent from "../modal/ModalComponent";

const Header = () => {
  return (
    <div className={css.header}>
      <nav className={css.nav}>
        <a href="/" className={css.logo}>
          <img src={logo} alt="logo" />
          <span className={css.logo_text}>LearnLingo</span>
        </a>
        <div className={css.link_list}>
          <Link className={css.link} to={"/"}>
            Home
          </Link>
          <Link className={css.link} to={"/teachers"}>
            Teachers
          </Link>
        </div>
      </nav>
      <div className={css.auth}>
        <ModalComponent />
      </div>
    </div>
  );
};

export default Header;
