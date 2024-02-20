import { faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import colombia from "../assets/images/colombia.jpeg";
import brasil from "../assets/images/brasil.png";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Home() {
  const location = useLocation();

  const { t, i18n } = useTranslation();

  const [stateButton, setStateButton] = useState(false);
  const [menu, setMenu] = useState(false);

  function languajeStateButton() {
    setStateButton(!stateButton);
  }

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  function openMenu() {
    setMenu(!menu);
  }

  return (
    <div className="relative">
      <nav className="bg-transparent fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"> */}
          <form className="max-w-sm mx-auto absolute">
            <div className="flex flex-col">
              <button
                onClick={languajeStateButton}
                id="states-button"
                data-dropdown-toggle="dropdown-states"
                className="flex-shrink-0 gap-2 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                type="button"
              >
                <img className="w-[20px] rounded" src={colombia} alt="" />
                CO{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div
                id="dropdown-states"
                className={` ${
                  stateButton === false ? "hidden" : ""
                } z-10 absolute mt-14 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 "
                  aria-labelledby="states-button"
                >
                  <li>
                    <button
                      onClick={() => {
                        {
                          changeLanguage("en"), languajeStateButton();
                        }
                      }}
                      type="button"
                      className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <div className="inline-flex gap-2 items-center">
                        <img
                          className="w-[20px] rounded"
                          src={colombia}
                          alt=""
                        />
                        Español (CO)
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        changeLanguage("es"), languajeStateButton();
                      }}
                      type="button"
                      className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <div className="inline-flex items-center gap-2">
                        <img className="w-[20px] rounded" src={brasil} alt="" />
                        Português (BR)
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </form>
          <span className="self-center text-2xl font-semibold whitespace-nowrap "></span>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="relative">
              <div className="rounded">
                <div>
                  <FontAwesomeIcon
                    className="cursor-pointer text-[#3650de] text-2xl lg:mr-10 rounded-full p-2 border border-gray-100 bg-gray-50"
                    icon={faSun}
                  />
                </div>
              </div>
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => openMenu()}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div
            className={` ${
              menu === false ? "hidden" : ""
            } items-center justify-between z-20 w-full md:flex md:w-auto md:order-1 max-md:shadow-lg`}
            id="navbar-sticky"
          >
            <ul className="flex shadow-xl flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:rounded-full border-gray-100 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border md:border-gray-100 md:p-2 md:bg-white md:pr-3 md:pl-3">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    menu === true ? openMenu() : "";
                  }}
                  className={` ${
                    location.pathname === "/"
                      ? "text-[#3650de]"
                      : "text-gray-900"
                  } block py-2 px-3 rounded md:bg-transparent md:text-[14px] md:hover:text-[#3650de] md:p-0`}
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutMe"
                  onClick={() => {
                    menu === true ? openMenu() : "";
                  }}
                  className={` ${
                    location.pathname === "/aboutMe"
                      ? "text-[#3650de]"
                      : "text-gray-900"
                  }  block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-[14px] md:hover:text-[#3650de] md:p-0`}
                >
                  Tecnologias
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  onClick={() => {
                    menu === true ? openMenu() : "";
                  }}
                  className={` ${
                    location.pathname === "/experience"
                      ? "text-[#3650de]"
                      : "text-gray-900"
                  } block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-[14px] md:hover:text-[#3650de] md:p-0`}
                >
                  Experiencia
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => {
                    menu === true ? openMenu() : "";
                  }}
                  className={` ${
                    location.pathname === "/services"
                      ? "text-[#3650de]"
                      : "text-gray-900"
                  } block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-[14px] md:hover:text-[#3650de] md:p-0`}
                >
                  Proyectos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="max-w-screen-xl h-screen flex flex-wrap mx-auto p-4 text black">
        <div className="mt-20 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
