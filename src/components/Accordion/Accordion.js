import React, { useState } from "react";

import AccordionItem from "../AccordionItem/AccordionItem";

const Accordion = ({ data }) => {
  const [currOpen, setcurrOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          currOpen={currOpen}
          num={index}
          title={el.title}
          key={index}
          onOpen={setcurrOpen}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
};

Accordion.propTypes = {};

Accordion.defaultProps = {};

export default Accordion;
