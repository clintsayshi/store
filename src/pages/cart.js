import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";

import CartCard from "../components/DisplayCards/cartcard";

import puma from "../images/puma.jpg";

const sh1 = { pName: "Puma XTND", price: "1020.00", image: puma };

function Cart() {
  const items = useSelector((state) => state.cart.cart);
  const [sum, setSum] = useState();

  useEffect(() => {
    if (items.length > 0) {
      if (items.length > 1) {
        setSum(() => items.reduce((item1, item2) => item1.price + item2.price));
      } else {
        setSum(items[0].price);
      }
    } else {
      setSum(0.0);
    }
    return () => {};
  }, [items]);

  console.log(items);

  return (
    <Layout>
      <header className="container py-4">
        <h1 className="text-2xl font-medium">Shopping Cart</h1>
      </header>

      <section className="">
        <div className="container sm:grid grid-cols-3">
          <div className="sm:col-span-2">
            {items.map((item, index) => (
              <CartCard product={item} key={index} />
            ))}
          </div>

          <div className="sm:col-span-1 h-max p-2">
            <header className="py-2 border-b-2 border-black">
              <h2 className="text-xl">Summary</h2>
            </header>
            <div className="py-4 gap-4 grid grid-cols-2">
              <p>Subtotal</p>
              <p>R {sum}</p>
              <p>Shipping</p>
              <p>R 0.00</p>
            </div>
            <button className="w-full px-4 py-1 text-base font-medium rounded bg-blue-500 text-white">
              Checkout
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Cart;
