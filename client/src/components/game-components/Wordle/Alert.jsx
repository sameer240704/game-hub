import React from "react";
import "../../../styles/Wordle.css";
import { ImCancelCircle } from "react-icons/im";

export default function Alert({ children, title, open, onClose }) {
  if (!open) return null;

  return (
    <div className="Alert-backdrop">
      <div className="Alert-container">
        <div className="Alert-header">
          <h2>{title}</h2>
          <button className="Alert-button--close" onClick={onClose}>
            <ImCancelCircle className="Modal-icon" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
