import css from "./ModalComponent.module.css";
import logIn from "../../assets/log_in.svg";

import { SetStateAction, useState } from "react";
import LoginForm from "../login/LoginForm";
import RegistrationForm from "../registration/Registration";

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState("");

  const handleOpenModal = (type: SetStateAction<string>) => {
    setFormType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormType("");
  };

  const renderForm = () => {
    switch (formType) {
      case "login":
        return <LoginForm onClose={handleCloseModal} />;
      case "registration":
        return <RegistrationForm onClose={handleCloseModal} />;
      default:
        return null;
    }
  };

  return (
    <div className={css.auth}>
      <button
        onClick={() => handleOpenModal("login")}
        className={css.btn_logIn}
      >
        <img src={logIn} alt="Log in" />
        <span className={css.btn_log_text}>Log in</span>
      </button>
      <button
        className={css.btn_reg}
        onClick={() => handleOpenModal("registration")}
      >
        <span className={css.btn_reg_text}>Registration</span>
      </button>

      {isModalOpen && <div className={css.overlay}>{renderForm()}</div>}
    </div>
  );
};

export default ModalComponent;
