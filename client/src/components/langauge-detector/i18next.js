import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "",
    resources: {
      en: {
        translation: {
          line: "Language Translator",
        },
      },
      hi: {
        translation: {
          line: "भाषा अनुवादक",
        },
      },
      fr: {
        translation: {
          line: "Traducteur de la langue",
        },
      },
      es: {
        translation: {
          line: "Traductor de idiomas",
        },
      },
      cn: {
        translation: {
          line: "语言翻译",
        },
      },
    },
  });
