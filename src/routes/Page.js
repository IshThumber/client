import React from "react";
// import data from '../data/data.json';
import './Page.css';
import { DropDown } from '../components';
const Page = () => {
  return (
    <div className="page">
      <div className="page-container">
        <DropDown />
      </div>
    </div>
  )
};

export default Page;