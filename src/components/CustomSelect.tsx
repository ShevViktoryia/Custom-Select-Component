import React, { useState } from "react";
import { ElementsList } from "./ElementsList";

export const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelectClick = () => setIsOpen(!isOpen);
  return (
    <>
      <button onClick={handleSelectClick}>CustomSelect</button>
      {isOpen && <ElementsList />}
    </>
  );
};
