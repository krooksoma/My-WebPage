import React from "react";

const AccordionItem = ({ num, title, text, onOpen, currOpen, children }) => {
  
  const isOpen = num === currOpen;

  function handleToggle() {
    onOpen(isOpen? null: num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num +1}`: num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon" >{isOpen ? "➖" : "➕"}</p>
      {isOpen ?
      <div className="content-box text">
          {children}
      </div>: ""
      }
    </div>
  );
};

AccordionItem.propTypes = {};

AccordionItem.defaultProps = {};

export default AccordionItem;
