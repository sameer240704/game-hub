import React, { useState } from "react";
import Flag from "react-flagkit";
import { languages } from "../../data/navbarData";
import { HiLanguage } from "react-icons/hi2";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../../styles/Navbar.css";

const LanguageButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("language") || "English"
  );

  const { i18n } = useTranslation();

  const openLanguageButton = () => setIsOpen(!isOpen);

  const changeCurrentLanguage = (value, code) => {
    localStorage.setItem("language", value.toString());
    setCurrentLanguage(value);
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <>
      <div className="language-button" onClick={openLanguageButton}>
        <HiLanguage className="icon" />
        <h3 className="current-language">{currentLanguage}</h3>
        {!isOpen ? (
          <FaChevronDown className="chevron-icons" />
        ) : (
          <FaChevronUp className="chevron-icons" />
        )}
      </div>
      <div className={isOpen ? "popup-modal" : "popup-modal-hidden"}>
        {isOpen &&
          languages.map((item) => (
            <div
              key={item.lang}
              className="flag-modal"
              onClick={() => changeCurrentLanguage(item.lang, item.code)}
            >
              <Flag country={item.flag} />
              <h1>{item.lang}</h1>
            </div>
          ))}
      </div>
    </>
  );
};

export default LanguageButton;
