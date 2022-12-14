import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../redux/shoesApi";
import { addToCart } from "../redux/cart";
import BreadCrumb from "../components/BreadCrumb";
import Layout from "../components/Layout";
import NotFound from "./notfound";

function ItemDetail() {
  const { Id } = useParams();
  const { data, error, isLoading } = useGetProductQuery(Id);
  const dispatch = useDispatch();

  const pushToCart = () => {
    dispatch(addToCart(data[0]));
  };

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <p>"Loading"</p>
      </div>
    );
  }

  if (error) {
    return <NotFound />;
  }

  return (
    <Layout>
      <div className="container mb-8">
        <BreadCrumb />
      </div>

      <section className="">
        <div className="container sm:grid grid-cols-3 gap-12">
          {/* Item images */}
          <div className=" col-span-2">
            <div className="">
              <img
                className="block w-full aspect-square object-contain"
                src={data[0].image}
                alt={data[0].pName}
              />
            </div>
          </div>
          {/* Item details */}
          <div className="cols-span-1 space-y-4">
            <h1 className="text-2xl font-medium">{data[0].pName}</h1>

            <article className="space-y-1">
              <h3 className="font-mono text-lg">R {data[0].price}</h3>
              <h4 className="text-base font-medium">Description:</h4>
              <p className="text-base">{data[0].pDesc}</p>
            </article>

            <button
              onClick={pushToCart}
              className="block px-3 py-1 bg-blue-500 text-white rounded"
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ItemDetail;
