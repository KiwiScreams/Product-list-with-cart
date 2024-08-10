import { useState } from "react";
import Home from "./pages/home/Home";
import i18n from "i18next";
import { useTranslation, initReactI18next, Translation } from "react-i18next";
import common_eng from "./locales/eng.json";
import common_geo from "./locales/geo.json";
i18n.use(initReactI18next).init({
  resources: {
    eng: {
      eng: common_eng,
    },
    geo: {
      geo: common_geo,
    },
  },
  lng: "eng",
  fallbackLng: "eng",

  interpolation: {
    escapeValue: false,
  },
});
function App() {
  const { t } = useTranslation();
  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <select name="lang" id="lang" onChange={handleLanguageChange}>
        <option value="eng">ENG</option>
        <option value="geo">GEO</option>
      </select>
      <Home />
    </>
  );
}

export default App;
