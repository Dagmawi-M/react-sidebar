import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarContent = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "[Page one]",
    path: "/PageOne",
    icon: <IoIcons.IoMdPlanet />,
    cName: "nav-text",
  },
  {
    title: "[Page Two]",
    path: "/PageTwo",
    icon: <IoIcons.IoMdSchool />,
    cName: "nav-text",
  },
  {
    title: "[Page Three]",
    path: "/PageThree",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
