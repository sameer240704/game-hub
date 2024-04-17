import React from "react";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();
  return <div>{t("line")}</div>;
};

export default LandingPage;
