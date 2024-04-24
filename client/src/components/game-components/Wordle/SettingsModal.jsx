import React from "react";
import Modal from "./Modal";
import "../../../styles/Wordle.css";

export default function SettingsModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title="Settings">
      <div className="Settings-modal--content">
        <ul>
          <li>Settings will be added over time :)</li>
          <li>
            Feedback
            <div>
              <a href="https://localhost:5173">Twitter</a> |{" "}
              <a href="https://localhost:5173">GitHub</a>
            </div>
          </li>
        </ul>
      </div>
    </Modal>
  );
}
