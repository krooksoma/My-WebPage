import React from "react";

import AccordionItem from "../AccordionItem/AccordionItem";

const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem num={index} title={el.title} text={el.text} key={index} />
      ))}
    </div>
  );
};

Accordion.propTypes = {};

Accordion.defaultProps = {};

export default Accordion;
