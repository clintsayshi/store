import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart, incrementItemQty } from "../../redux/cart";

//import photo from "../../images/crocs.jpg";

export const MediumCard = ({
  product = { image: "", title: "Yeezy 350 v2", price: "3,200.00" },
}) => {
  return (
    <Link to={`/items/${product.pId}`}>
      <article className="">
        <div className="border">
          <img
            className="block w-full h-72 object-contain"
            src={product.image}
            alt={product.pName}
          />
        </div>
        <div>
          <h3 className="font-medium font-sans">{product.pName}</h3>
          <p className="font-mono text-sm">R {product.price}</p>
        </div>
      </article>
    </Link>
  );
};
