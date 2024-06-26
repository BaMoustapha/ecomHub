import React from "react";
// import { useLocation } from "react-router";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import useSidebare from "../../utils/hook/useSidebare";

const SidebareLink = ({ menus, open }) => {
  const location = useLocation();
  const { screenSize, setOpen, smallScreen, closedrop } = useSidebare();
  const handleSidebare = () => {
    setOpen(!open);
  };

  return (
    <div className="mt-7 flex flex-col gap-5 relative">
      {menus?.map((menu, i) => (
        <NavLink
          to={menu?.link}
          onClick={!open && smallScreen <= 767 ? handleSidebare : screenSize}
          key={i}
          className={` ${
            location.pathname === menu?.link ? "bg-gray-200" : ""
          } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-blue-600 hover:text-white   rounded-md`}
        >
          <div onClick={closedrop} className="flex gap-3.5 ">
            <div className={"text-xl"} size={20}>
              {menu?.icon}
            </div>
            <h2
            // style={{ transitionDelay: `${i + 1}00ms` }}
            // className={`whitespace-pre duration-500 ${
            //   !open &&
            //   `md:opacity-0 sm:translate-x-5 md:translate-x-20  overflow-hidden`
            // }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden md:group-hover:px-2 md:group-hover:py-1 md:group-hover:left-14 md:group-hover:duration-300 md:group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default SidebareLink;
