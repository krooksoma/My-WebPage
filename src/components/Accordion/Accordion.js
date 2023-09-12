import React, { useState } from "react";
import PropTypes from "prop-types";
import AccordionItem from "../AccordionItem/AccordionItem";

const Accordion = (props) => {
  return (
    <div className="accordion">
      {props.map((el, index) => (
        <AccordionItem num={index} title={el.title} text={el.text} />
      ))}
    </div>
  );
};

Accordion.propTypes = {};

Accordion.defaultProps = {};

export default Accordion;
