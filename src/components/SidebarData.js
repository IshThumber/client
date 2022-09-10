import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdAnalytics } from "react-icons/md";

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <AiFillHome />,
        link: "/admin/",
    },

    {
        title: "Manage Students",
        icon: <FaUsers />,
        link: "/admin/StudentManagement/",
    },

    {
        title: "Manage Credentials",
        icon: <RiLockPasswordFill />,
        link: "/admin/Credentials/",
    },

    {
        title: "Result Analysis",
        icon: <MdAnalytics />,
        link: "/admin/Analytics/",
    },
];
