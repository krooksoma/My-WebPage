import React from "react";
import { useState } from "react";

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    const itemForm = {
      id: crypto.randomUUID(),
      description,
      quantity,
      packed: false,
    };
    console.log("form submitted values:");
    console.log(itemForm);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your trip? </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
