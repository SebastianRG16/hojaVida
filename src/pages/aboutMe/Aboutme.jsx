import { faPython, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react from "../../assets/images/React.png";
import vue from "../../assets/images/vue.png";
import python from "../../assets/images/python.png";
import { useTranslation } from "react-i18next";

export function Aboutme() {
  const { t } = useTranslation();

  const frameworks = [
    {
      icon: react,
      name: "ReactJS",
      description: t("descriptionReact"),
    },
    {
      icon: react,
      name: "React Native",
      description: t("descriptionReactNative"),
    },
    {
      icon: vue,
      name: "Vue 3",
      description: t("descriptionVue"),
    },
    {
      icon: python,
      name: "Django",
      description: t("descriptionDjango"),
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="md:w-3/4 text-5xl font-bold text-[#272727] mt-6 dark:text-gray-200">
        {t("titleTecnologies")}
      </div>
      <div className="mt-16 md:w-4/6 dark:text-white">
        {t("descriptionTecnologies")}
      </div>
      <div className="w-full flex mt-10 grid max-md:grid-cols-2 md:grid-cols-3">
        {frameworks &&
          frameworks.map((framework, index) => (
            <div
              key={index}
              className="px-4 py-5 w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex-auto transform transition-full duration-300"
            >
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full dark:bg-gray-500 bg-white">
                <i className="fas fa-sitemap">
                  <img className="" src={framework.icon} />
                </i>
              </div>
              <h6 className="text-xl mb-1 font-semibold dark:text-white">
                {framework.name}
              </h6>
              <p className="mb-4 text-blueGray-500 dark:text-white">
                {framework.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
