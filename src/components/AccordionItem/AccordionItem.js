import React from "react";
import PropTypes from "prop-types";

const AccordionItem = ({ num, title, text }) => {

  

  return (
    <div className="item">
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">Icon</p>
      <div className="text">
          {text}
      </div>
    </div>
  );
};

AccordionItem.propTypes = {};

AccordionItem.defaultProps = {};

export default AccordionItem;
