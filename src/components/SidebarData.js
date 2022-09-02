import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdAnalytics } from "react-icons/md";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <AiFillHome />,
    link: "/",
  },

  {
    title: "Student Management",
    icon: <FaUsers />,
    link: "/StudentManagement",
  },

  {
    title: "Credentials Management",
    icon: <RiLockPasswordFill />,
    link: "/Credentials",
  },

  {
    title: "Analytics",
    icon: <MdAnalytics />,
    link: "/Analytics",
  },
];
