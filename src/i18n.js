import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Configuración de i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        titleInicio: "Desarrollador de software, independiente y aficionado del deporte automotor",
      },
    },
    es: {
      translation: {
        titleInicio: "Desenvolvedor de software, freelancer e entusiasta de automobilismo",
      },
    },
  },
  lng: "en", // Idioma por defecto
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
