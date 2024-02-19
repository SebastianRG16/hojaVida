import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImagenIA from "../../assets/images/imagenInicioHojaDeVida.png";
import { useTranslation } from 'react-i18next';

export function Information() {

  const { t } = useTranslation();

  return (
    <div className="flex w-full h-full">
      <div className="ml-20">
        <div className="flex w-full">
          <div className="w-2/4 text-5xl font-bold text-[#272727] mt-32">
            {t('titleInicio')}
          </div>
          <div className="grid w-2/4 justify-items-end items-center mt-100 origin-top-left rotate-[8deg]">
            <img className="h-[380px] rounded-lg mt-10" src={ImagenIA} />
          </div>
        </div>
        <div className="">
          <button className="p-2 text-white rounded bg-gradient-to-r from-[#123ad3] to-[#5967e9] transform transition-transform hover:scale-110">
            Descargar CV
          </button>
        </div>
        <div className="mt-16 w-4/6">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          repellendus blanditiis, facilis voluptatem nam, necessitatibus quis
          placeat possimus officiis labore veniam voluptate alias. Cum impedit
          eius eos velit. Ipsam, nisi.
        </div>
        <div className="mt-10 gap-5 flex">
          <FontAwesomeIcon
            className="text-xl cursor-pointer hover:text-[#3650de] transform transition-transform hover:scale-110"
            icon={faXTwitter}
          />
          <FontAwesomeIcon
            className="text-xl cursor-pointer hover:text-[#3650de] transform transition-transform hover:scale-110"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="text-xl cursor-pointer hover:text-[#3650de] transform transition-transform hover:scale-110"
            icon={faGithub}
          />
          <FontAwesomeIcon
            className="text-xl cursor-pointer hover:text-[#3650de] transform transition-transform hover:scale-110"
            icon={faLinkedinIn}
          />
        </div>
      </div>
    </div>
  );
}
