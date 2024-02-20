import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImagenIA from "../../assets/images/imagenInicioHojaDeVida.png";
import { useTranslation } from "react-i18next";

export function Information() {
  const { t } = useTranslation();

  return (
    <div className="flex w-full h-full">
      <div className="lg:ml-20">
        <div className="flex w-full">
          <div className="max-md:w-full w-2/4 max-lg:w-3/4 text-5xl font-bold text-[#272727] md:mt-32 dark:text-gray-200">
            {t("titleInicio")}
          </div>
          <div className="grid max-lg:hidden w-2/4 justify-items-end items-center mt-100 origin-top-left rotate-[8deg]">
            <img className="h-[380px] rounded-lg mt-10" src={ImagenIA} />
          </div>
        </div>
        <div className="max-lg:mt-10">
          <button className="p-2 text-white rounded bg-gradient-to-r from-[#123ad3] to-[#5967e9] transform transition-transform hover:scale-110">
            {t("textButtonInicio")}
          </button>
        </div>
        <div className="mt-16 lg:w-4/6 dark:text-white">{t("descriptionInicio")}</div>
        <div className="mt-10 gap-5 flex max-sm:mb-10">
          <FontAwesomeIcon
            className="text-xl cursor-pointer dark:text-white hover:text-[#3650de] dark:hover:text-[#3650de] transform transition-transform hover:scale-110"
            icon={faXTwitter}
          />
          <FontAwesomeIcon
            className="text-xl cursor-pointer dark:text-white hover:text-[#3650de] dark:hover:text-[#3650de] transform transition-transform hover:scale-110"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="text-xl cursor-pointer dark:text-white hover:text-[#3650de] dark:hover:text-[#3650de] transform transition-transform hover:scale-110"
            icon={faGithub}
          />
          <FontAwesomeIcon
            className="text-xl cursor-pointer dark:text-white hover:text-[#3650de] dark:hover:text-[#3650de] transform transition-transform hover:scale-110"
            icon={faLinkedinIn}
          />
        </div>
      </div>
    </div>
  );
}
