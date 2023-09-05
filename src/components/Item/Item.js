import React from "react";

function Item({ item }) {
  return (
    <li>
      <input type="checkbox" id={item.id} value={item.description}></input>
      <span style={item.packed ? {textDecoration:"line-through"}: {}}>
        {item.quantity} - {item.description}
      </span>
      <button className="btn btn-danger">❌</button>
    </li>
  );
}

Item.propTypes = {};

Item.defaultProps = {};

export default Item;
