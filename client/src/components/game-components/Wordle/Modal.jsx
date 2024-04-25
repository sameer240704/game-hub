import React from "react";
import { ImCancelCircle } from "react-icons/im";
import "../../../styles/Wordle.css";

export default function Modal({ children, title, open, onClose }) {
  if (!open) return null;

  return (
    <div className="Modal-backdrop">
      <div className="Modal-container">
        <div className="Modal-header">
          <h2>{title}</h2>
          <button className="Modal-button--close" onClick={onClose}>
            <ImCancelCircle className="Modal-icon" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
