import { createContext, useState, useContext } from "react";

// Create the modal context
const ModalContext = createContext();

// Provider component
export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook for accessing modal context
export const useModal = () => useContext(ModalContext);
