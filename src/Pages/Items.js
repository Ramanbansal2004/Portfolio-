import React, { useState } from "react";
import "../Styles/Items.css";


const items = [
  {
    id: 1,
    title: "Car",
    category: 'Toys',
    description: `A toy that will keep your baby happy`,
    price: '69',
  },
  {
    id: 2,
    title: "Dildo",
    category: 'Toys',
    description: `A toy that will keep your wife happy`,
    price: '49',
  }
];

const Items = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="learn">
      <div className="heading">
        <h1>Products</h1>
      </div>
      <div className="Items">
      {items.map((item) => (
        <div key={item.id} className="item">
          <img src="/" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
          <button onClick={() => toggleExpand(item.id)}>
              <i class="fa-solid fa-cart-shopping">Add to Cart</i>
          </button>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
