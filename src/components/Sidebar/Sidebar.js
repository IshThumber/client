import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { BiMenu, BiHome, BiGroup, BiLockAlt, BiAnalyse } from "react-icons/bi";
import "./Sidebar-pro.css";

const styleIcon = {
  fontSize: "1.5rem",
  color: "white",
};

const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(true);

  return (
    <ProSidebar className="Sidebar" toggled={true} collapsed={isCollapse}>
      <Menu>
        <MenuItem
          onClick={() => setIsCollapse(!isCollapse)}
          className="MenuItem"
          icon={<BiMenu style={styleIcon} />}
        ></MenuItem>
        <MenuItem
          onClick={() => setIsCollapse(!isCollapse)}
          icon={<BiHome style={styleIcon} />}
          // style={styleText }
        >
          Dashboard
          <Link to="/admin/" />
        </MenuItem>
        <MenuItem
          onClick={() => setIsCollapse(!isCollapse)}
          icon={<BiGroup style={styleIcon} />}
        >
          Manage Students
          <Link to="/admin/StudentManagement" />
        </MenuItem>
        <MenuItem
          onClick={() => setIsCollapse(!isCollapse)}
          icon={<BiLockAlt style={styleIcon} />}
        >
          Manage Credentials
          <Link to="/admin/Credentials" />
        </MenuItem>
        <MenuItem
          onClick={() => setIsCollapse(!isCollapse)}
          icon={<BiAnalyse style={styleIcon} />}
        >
          Result Analysis
          <Link to="/admin/Analytics" />
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
