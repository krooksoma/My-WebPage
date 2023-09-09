import { useState } from "react";
import React from "react";
import Item from "../Item/Item";

function PackingList({ items, onDeleteItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  switch (sortBy) {
    case "description":
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case "packed":
      sortedItems = items
      .slice()
      .sort((a,b) => Number(a.packed) - Number (b.packed));
      break;
    default:
      sortedItems = items;
  }

  return (
    <div className="list" data-testid="PackingList">
      <ul>
        {sortedItems.map((X) => (
          <Item
            item={X}
            key={X.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => setSortBy("input")}>Reset</button>
      </div>
    </div>
  );
}

export default PackingList;
