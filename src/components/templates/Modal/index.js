import React from 'react';
import "./index.css"
const Modal = ({ handleClose, show, children, name }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className={name}>
        {children}
        <button onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;