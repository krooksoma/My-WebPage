import React from "react";
import { useState } from "react";

const AccordionItem = ({ num, title, text }) => {
  const[isOpen, setIsOpen] = useState(false);


  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num +1}`: num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon" >{isOpen ? "➖" : "➕"}</p>
      {isOpen ?
      <div className="content-box text">
          {text}
      </div>: ""
      }
    </div>
  );
};

AccordionItem.propTypes = {};

AccordionItem.defaultProps = {};

export default AccordionItem;
