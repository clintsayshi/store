import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementItemQty,
  decrementItemQty,
} from "../../redux/cart";

const CartCard = ({ product }) => {
  const { image, pName, price, pId } = product;
  const dispatch = useDispatch();

  const incrementQty = () => {
    dispatch(incrementItemQty(product.pId));
  };

  const decrementQty = () => {
    dispatch(decrementItemQty(product.pId));
  };

  const removeItem = () => {
    dispatch(removeFromCart(product.pId));
  };

  return (
    <article>
      <div className="space-y-4 sm:grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <img
            className="block w-full h-72 sm:h-60 object-contain"
            src={image}
            alt={pName}
          />
        </div>

        <div className="col-span-2 space-y-2">
          <Link to={`/items/${pId}`}>
            <h2 className="font-medium">{pName}</h2>
          </Link>
          <p className="font-mono">R {price}</p>

          <div className="mb-4">
            <p>Qty:</p>
            <div className="flex items-center">
              <button
                onClick={decrementQty}
                className="h-8 w-8 flex justify-center items-center bg-gray-100 text-2xl"
              >
                -
              </button>
              <span className="w-[4ch] text-center">{product.count}</span>
              <button
                onClick={incrementQty}
                className="py-1 px-2 bg-gray-100 text-xl"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={removeItem}
            className="block px-3 py-1 bg-red-500 text-sm text-white rounded"
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};
export default CartCard;
