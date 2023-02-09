import React, { useState } from "react";

function Item({ name, category }) {
  const [x, b] = useState(false)
  function handleClick(){
    b((x) => !x)
  }

  return (
    <li className={x ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={x ? "remove" : "add"}>{x ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
