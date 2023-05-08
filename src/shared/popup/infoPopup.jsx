import React, { useState, useEffect } from "react";
import "./infoPopup.scss";

export const Infopopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('showWarning', false)
  }
  useEffect(() => {
    const warning = JSON.parse(localStorage.getItem('showWarning'));
    if (warning === null) {
      setIsOpen(true)
    }
    else {
      return
    }

  }, []);
  return (
    isOpen && (
      <div id="popup">
        <div>
          <span className="close" onClick={() => handleClose()}>
            X
          </span>
          <h3>Warning</h3>
          <p>
            This video has been identifies to potentially trigger seixures for
            pepple with photosensitive epilepsy
          </p>
          <span>Viewer discretion is advised</span>
          <button onClick={() => handleClose()}>continue</button>
        </div>
      </div>
    )
  );
};
