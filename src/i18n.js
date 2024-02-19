import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Configuración de i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        titleInicio:
          "Desarrollador de software, emprendedor y aficionado a los autos.",
        descriptionInicio:
          "Soy Sebastián Rodríguez Garzón, estudiante de Ingeniería en Sistemas, apasionado por la tecnología y los automóviles, me dedico cada día a dejar lo mejor de mí en los proyectos y códigos que desarrollo. Busco combinar mi entusiasmo por la innovación tecnológica con mi formación en ingeniería para crear soluciones creativas y efectivas, estoy comprometido con el aprendizaje continuo y siempre estoy en busca de nuevos desafíos que me permitan crecer tanto profesional como personalmente.",
        textButtonInicio: "Descargar CV",
        titleTecnologies: 'Tecnologías en las que tengo conocimiento',
        descriptionTecnologies: 'En mi trayectoria, he adquirido experiencia y conocimientos sólidos en una variedad de tecnologías de vanguardia. Desde lenguajes de programación como JavaScript y Python, hasta frameworks populares como React.js y Django, mi competencia abarca un amplio espectro tecnológico. Además, tengo experiencia en el uso de herramientas de desarrollo y metodologías ágiles, lo que me permite adaptarme rápidamente a nuevas tecnologías y entornos de trabajo.',
        titleExperience: 'Experiencia laboral como desarrollador de software',
        descriptionExperience : 'Como desarrollado de software cuento con experiencia y participación en diferentes proyectos y empresas, contribuyendo con el desarrollo y mantenimiento de software, mis habilidades incluyen desarrollar Frontend, Backend y Móvil, llevando una comunicación efectiva y ágil con el equipo.',
        titleProjects: 'Proyectos de más valor que he desarrollado',
        descriptionProjects: 'He tenido la oportunidad de liderar y contribuir en proyectos de alto valor, centrados en la entrega de soluciones de calidad e innovadoras, asi como la optimizacion de procesos empresariales.',
      },
    },
    es: {
      translation: {
        titleInicio:
          "Desenvolvedor de software, empreendedor e entusiasta de automobilismo.",
        descriptionInicio:
          "Soy Sebastián Rodríguez Garzón, estudiante de Ingeniería en Sistemas. Apasionado por la tecnología y los automóviles, me dedico cada día a dejar lo mejor de mí en los proyectos y códigos que desarrollo. Busco combinar mi entusiasmo por la innovación tecnológica con mi formación en ingeniería para crear soluciones creativas y efectivas. Estoy comprometido con el aprendizaje continuo y siempre estoy en busca de nuevos desafíos que me permitan crecer tanto profesional como personalmente.",
        textButtonInicio: "Descargar CV",
        titleTecnologies: 'Tecnologias en las que tengo conocimiento',
        descriptionTecnologies: 'En mi trayectoria, he adquirido experiencia y conocimientos sólidos en una variedad de tecnologías de vanguardia. Desde lenguajes de programación como JavaScript y Python, hasta frameworks populares como React.js y Django, mi competencia abarca un amplio espectro tecnológico. Además, tengo experiencia en el uso de herramientas de desarrollo y metodologías ágiles, lo que me permite adaptarme rápidamente a nuevas tecnologías y entornos de trabajo.',
        titleExperience: 'Experiencia laboral como desarrollador de software',
        descriptionExperience : 'Como desarrollado de software cuento con experiencia y participación en diferentes proyectos y empresas, contribuyendo con el desarrollo y mantenimiento de software, mis habilidades incluyen desarrollar Frontend, Backend y Móvil, llevando una comunicación efectiva y ágil con el equipo.',
        titleProjects: 'Proyectos de más valor que he desarrollado',
        descriptionProjects: 'He tenido la oportunidad de liderar y contribuir en proyectos de alto valor, centrados en la entrega de soluciones de calidad e innovadoras, asi como la optimizacion de procesos empresariales.',
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
