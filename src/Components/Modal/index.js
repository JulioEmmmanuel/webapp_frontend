import React from 'react';
// Necesitamos ReactDOM para renderizar nuestro modal en el DOM
import ReactDOM from 'react-dom';
import {ModalBackground} from './styles.js';

const Modal = ({ children }) => {
  // ReactDom tiene este método para crear portales
return ReactDOM.createPortal(
    <ModalBackground>
      {children}
    </ModalBackground>,
    document.getElementById('modal')
  );
}

export { Modal };