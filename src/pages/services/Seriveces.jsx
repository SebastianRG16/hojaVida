import zaperoco from "../../assets/images/zaperocoSF.png";
import mucenos from "../../assets/images/mucenosGP.png";
import restaurant from "../../assets/images/restaurant.png";
import meraki from "../../assets/images/meraki.png";
import jac from "../../assets/images/jac.png";
import { useTranslation } from "react-i18next";

export function Servicies() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="w-full flex">
        <div className="w-full justify-center text-center flex text-5xl font-bold text-[#272727] mt-6">
          <p className="lg:w-3/4">{t("titleProjects")}</p>
        </div>
      </div>
      <div className="w-full flex">
        <div className="mt-16 w-full justify-center flex text-center">
          <p className="lg:w-4/6">{t("descriptionProjects")}</p>
        </div>
      </div>
      <div className="border-b-2 border-[#7d7df4] my-4 mt-20 mr-32 ml-32"></div>
      <section className="p-4 lg:p-8">
        <div className="container mx-auto space-y-12">
          <div className="flex shadow-xl bg-gray-100 flex-col overflow-hidden rounded-md shadow-sm lg:flex-row transform transition-transform hover:scale-105 duration-500">
            <img src={zaperoco} className="h-80  aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase "></span>
              <h3 className="text-3xl font-bold">Zaperoco Software</h3>
              <p className="my-6 ">
                La finalidad de zaperoco software es ayudar a una fundacion de
                niños con cancer a recaudar donaciones en sus eventos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex shadow-xl bg-gray-100 flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse transform transition-transform hover:scale-105 duration-500">
            <img src={mucenos} className="h-80  aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase "></span>
              <h3 className="text-3xl font-bold">Muceños Gastropub</h3>
              <p className="my-6 ">
                Software desarrollado para un restaurante con la finalidad de
                que los clientes interactuen con el sistema y puedan dispensar
                su serversa haciendo uso de esete sistema interactivo.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex shadow-xl bg-gray-100 flex-col overflow-hidden rounded-md shadow-sm lg:flex-row transform transition-transform hover:scale-105 duration-500">
            <img src={restaurant} className="h-80  aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase "></span>
              <h3 className="text-3xl font-bold">Smart Restaurant</h3>
              <p className="my-6 ">
                Es un software que busca automatizar proceso en la industria
                restaurantera, asi como llevar toda su contabilidad, brindando
                una nueva experiencia al cliente.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex shadow-xl bg-gray-100 flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse transform transition-transform hover:scale-105 duration-500">
            <img src={meraki} className="h-80  aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase "></span>
              <h3 className="text-3xl font-bold">Meraki Software</h3>
              <p className="my-6 ">
                Meraki software es un emprendimiento donde se busca desarrollar
                software a la medida y de la misma manera desarrollar un
                software que los caracterice.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex shadow-xl bg-gray-100 flex-col overflow-hidden rounded-md shadow-sm lg:flex-row transform transition-transform hover:scale-105 duration-500">
            <img src={jac} className="h-80  aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase "></span>
              <h3 className="text-3xl font-bold">JAC Software</h3>
              <p className="my-6 ">
                JAC es un software creado para una junta de accion comunal, con
                la finalidad de ayudar en el seguimiento de reuniones,
                interactividad con la comunidad y administracion de archivos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
