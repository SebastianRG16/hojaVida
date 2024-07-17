import zaperoco from "../../assets/images/zaperocoSF.png";
import mucenos from "../../assets/images/mucenosGP.png";
import restaurant from "../../assets/images/restaurant.png";
import meraki from "../../assets/images/meraki.png";
import jac from "../../assets/images/jac.png";
import { useTranslation } from "react-i18next";

export function Servicies() {
  const { t } = useTranslation();

  function redirectToUrlInNewTab(url) {
    window.open(url, "_blank");
  }

  return (
    <div className="w-full">
      <div className="w-full flex">
        <div className="w-full justify-center text-center flex text-5xl font-bold text-[#272727] mt-6">
          <p className="lg:w-3/4 dark:text-gray-200">{t("titleProjects")}</p>
        </div>
      </div>
      <div className="w-full flex">
        <div className="mt-16 w-full justify-center flex text-center">
          <p className="lg:w-4/6 dark:text-white">{t("descriptionProjects")}</p>
        </div>
      </div>
      <div className="border-b-2 border-[#7d7df4] my-4 mt-20 mr-32 ml-32"></div>
      <section className="p-4 lg:p-8">
        <div className="container mx-auto space-y-12">
          <div className="flex shadow-xl bg-gray-100 dark:bg-gray-800 flex-col overflow-hidden rounded-md shadow-sm lg:flex-row transform transition-transform hover:scale-105 duration-500">
            <img src={zaperoco} className="h-80  aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase "></span>
              <h3 className="text-3xl font-bold dark:text-white">
                {t("titelZaperoco")}
              </h3>
              <p className="my-6 dark:text-white">{t("descriptionZaperoco")}</p>
              <button
                type="button"
                className="self-start dark:text-white"
                onClick={() => {
                  redirectToUrlInNewTab("https://zaperoco-8617.onrender.com");
                }}
              >
                {t("visualizar")}
              </button>
            </div>
          </div>
          <div className="flex shadow-xl bg-gray-100 dark:bg-gray-800 flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse transform transition-transform hover:scale-105 duration-500">
            <img src={mucenos} className="h-80  aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase "></span>
              <h3 className="text-3xl font-bold dark:text-white">
                {t("titelMucenos")}
              </h3>
              <p className="my-6 dark:text-white">{t("descriptionMucenos")}</p>
              <button
                type="button"
                className="self-start dark:text-white"
                onClick={() => {
                  redirectToUrlInNewTab("https://mucenos.onrender.com");
                }}
              >
                {t("visualizar")}
              </button>
            </div>
          </div>
          <div className="flex shadow-xl bg-gray-100 dark:bg-gray-800 flex-col overflow-hidden rounded-md shadow-sm lg:flex-row transform transition-transform hover:scale-105 duration-500">
            <img src={restaurant} className="h-80  aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase "></span>
              <h3 className="text-3xl font-bold dark:text-white">
                {t("titelRestaurant")}
              </h3>
              <p className="my-6 dark:text-white">
                {t("descriptionRestaurant")}
              </p>
              <button
                type="button"
                className="self-start dark:text-white"
                onClick={() => {
                  redirectToUrlInNewTab("https://restaurantsmart.onrender.com");
                }}
              >
                {t("visualizar")}
              </button>
            </div>
          </div>
          <div className="flex shadow-xl bg-gray-100 dark:bg-gray-800 flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse transform transition-transform hover:scale-105 duration-500">
            <img src={meraki} className="h-80  aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase "></span>
              <h3 className="text-3xl font-bold dark:text-white">
                {t("titelMeraki")}
              </h3>
              <p className="my-6 dark:text-white">{t("descriptionMeraki")}</p>
              <button
                type="button"
                className="self-start dark:text-white"
                onClick={() => {
                  redirectToUrlInNewTab("https://merakisoftware.onrender.com");
                }}
              >
                {t("visualizar")}
              </button>
            </div>
          </div>
          {/* <div className="flex shadow-xl bg-gray-100 dark:bg-gray-800 flex-col overflow-hidden rounded-md shadow-sm lg:flex-row transform transition-transform hover:scale-105 duration-500">
            <img src={jac} className="h-80  aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 ">
              <span className="text-xs uppercase "></span>
              <h3 className="text-3xl font-bold dark:text-white">
                {t("titelJAC")}
              </h3>
              <p className="my-6 dark:text-white">{t("descriptionJAC")}</p>
              <button
                type="button"
                className="self-start dark:text-white"
                onClick={() => {
                  redirectToUrlInNewTab("https://pgjac.onrender.com");
                }}
              >
                {t("visualizar")}
              </button>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}
