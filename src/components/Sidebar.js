import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { AiFillHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import './Sidebar-pro.css'

const Sidebar = () => {
    const [isCollapse, setIsCollapse] = useState(true);

    return (
        <ProSidebar
            className="Sidebar"
            toggled={true}
            collapsed={isCollapse}
        >

            <Menu>
                <MenuItem
                    onClick={() =>
                        setIsCollapse(!isCollapse)}
                    className="MenuItem"
                >
                    Menu
                </MenuItem>
                <MenuItem
                    onClick={() =>
                        setIsCollapse(!isCollapse)}
                    icon={<AiFillHome />}
                >
                    Dashboard
                    <Link to="/admin/" />
                </MenuItem>
                <MenuItem
                    onClick={() =>
                        setIsCollapse(!isCollapse)}
                    icon={<FaUsers />}
                >
                    Manage Students
                    <Link to="/admin/StudentManagement" />
                </MenuItem>
                <MenuItem
                    onClick={() =>
                        setIsCollapse(!isCollapse)}
                    icon={<RiLockPasswordFill />}
                >
                    Manage Credentials
                    <Link to="/admin/Credentials" />
                </MenuItem>
                <MenuItem
                    onClick={() =>
                        setIsCollapse(!isCollapse)}
                    icon={<RiLockPasswordFill />}
                >
                    Result Analysis
                    <Link to="/admin/Analytics" />
                </MenuItem>
            </Menu>
        </ProSidebar>
    )
}

export default Sidebar;