import React from "react";
import { GiExitDoor } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "../../styles/ExitButton.css";

const ExitButton = () => {
  const navigate = useNavigate();

  const handleExitUser = () => {
    navigate("/");
    toast.info("Hello User");
  };

  return (
    <>
      <button className="exit-button" onClick={handleExitUser}>
        <GiExitDoor />
      </button>
    </>
  );
};

export default ExitButton;
