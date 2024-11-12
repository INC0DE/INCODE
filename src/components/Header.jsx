import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { logoincode } from "../assets";
import { navigation, contactUS } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0  w-full z-50  border-b border-n-11/70 lg:bg-n-12/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-12" : "bg-n-12/90 backdrop-blur-sm"
        }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={logoincode} width={150} height={40} alt="Incode" />
        </a>

        <nav
          className={`${openNavigation ? "flex" : "hidden"
            } fixed top-[5rem]  right-0 bottom-0 bg-n-12 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-2 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

        </nav>
        {contactUS.map((item) => (
          <a
            href={item.urlContact}
            className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          >
            Contact us
          </a>
        ))}


        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;