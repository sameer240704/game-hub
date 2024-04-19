import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const { t } = useTranslation();
  return <div className="landing-page-container">{t("line")}</div>;
};

export default LandingPage;
