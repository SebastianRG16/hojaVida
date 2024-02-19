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
      description:
        "descripcion generalizada de ejemplo para la tecnologia correspondiente",
    },
    {
      icon: react,
      name: "React Native",
      description:
        "descripcion generalizada de ejemplo para la tecnologia correspondiente",
    },
    {
      icon: vue,
      name: "Vue 3",
      description:
        "descripcion generalizada de ejemplo para la tecnologia correspondiente",
    },
    {
      icon: python,
      name: "Django",
      description:
        "descripcion generalizada de ejemplo para la tecnologia correspondiente",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="w-3/4 text-5xl font-bold text-[#272727] mt-6">
        {t('titleTecnologies')}
      </div>
      <div className="mt-16 w-4/6">
        {t('descriptionTecnologies')}
      </div>
      <div className="w-full flex mt-10 grid grid-cols-3">
        {frameworks &&
          frameworks.map((framework, index) => (
            <div
              key={index}
              className="px-4 py-5 w-full cursor-pointer hover:bg-gray-100 rounded-lg flex-auto transform transition-full duration-300"
            >
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap">
                    <img className="" src={framework.icon} />
                </i>
              </div>
              <h6 className="text-xl mb-1 font-semibold">{framework.name}</h6>
              <p className="mb-4 text-blueGray-500">{framework.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
