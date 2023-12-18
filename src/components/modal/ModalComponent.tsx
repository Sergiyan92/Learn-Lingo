// ModalComponent.js

import { useState } from "react";
import RegistrationForm from "../registration/Registration";

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      {isModalOpen && (
        <div>
          <RegistrationForm onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

export default ModalComponent;
