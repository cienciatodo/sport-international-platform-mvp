import React, { FC, CSSProperties } from 'react';
import { createPortal } from 'react-dom';

interface PropsDialog {
  children?: React.ReactNode;
  isOpen: boolean;
}

const DialogBoxPhoto: FC<PropsDialog> = ({ children, isOpen }) => {
  const dialogBoxElement = document.getElementById('dialogBox');

  if (!dialogBoxElement || !isOpen) return null;

  return createPortal(
    <div style={overlayStyle}>
      <div style={dialogStyle}>
        {children}
      </div>
    </div>,
    dialogBoxElement
  );
}

const overlayStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 100055,
};

const dialogStyle: CSSProperties = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '60%',
  maxHeight: '70%',
  overflow: 'hidden',
};

export default DialogBoxPhoto;
