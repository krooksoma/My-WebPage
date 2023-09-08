import React from "react";

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} id={item.id}
       onChange={() => onToggleItem(item.id)}></input>
      <span style={item.packed ? {textDecoration:"line-through"}: {}}>
        {item.quantity} - {item.description}
      </span>
      {/* {the event needs to be passed as a function} */}
      <button className="btn btn-danger" onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

Item.propTypes = {};

Item.defaultProps = {};

export default Item;
