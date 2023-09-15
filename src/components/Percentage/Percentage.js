import React from "react";
import PropTypes from "prop-types";

const Percentage = ({ percentage, onSelect, children }) => {
  return (
    <div>
      <label> {children} &nbsp; </label>  
      <select value={percentage} 
      onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0"> Dissatisfied (0%)</option>
        <option value="5"> It Was OK (5%)</option>
        <option value="10"> It Was Good (10%)</option>
        <option value="20"> It Was Awesome!! (20%)</option>
      </select>
     </div>
  );
};

Percentage.propTypes = {};

Percentage.defaultProps = {};

export default Percentage;
