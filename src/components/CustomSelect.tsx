import React, { useState } from "react";
import { ElementsList } from "./ElementsList";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./CustomSelect.css";

export const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelectClick = () => setIsOpen(!isOpen);
  return (
    <>
      <h1>My Custom Select</h1>
      <button className={"btn"} onClick={handleSelectClick}>
        CustomSelect
        {!isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </button>
      {isOpen && <ElementsList />}
    </>
  );
};
