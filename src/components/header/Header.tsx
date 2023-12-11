import css from "./Header.module.css";
import logo from "../../assets/ukraine.svg";
import logIn from "../../assets/log_in.svg";
import { Link } from "react-router-dom";

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
        <button className={css.btn_logIn}>
          <img src={logIn} alt="Log in" />
          <span>Log in</span>
        </button>
        <button className={css.btn_reg}>Registration</button>
      </div>
    </div>
  );
};

export default Header;
