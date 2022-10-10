import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../redux/shoesApi";

import { MediumCard } from "../components/DisplayCards/mediumcard";
import Layout from "../components/Layout";
import TabNavigation from "../components/TabNavigation";

function Home() {
  const {
    data: products,
    error: pError,
    loading: pLoading,
  } = useGetProductsQuery();

  return (
    <Layout>
      <TabNavigation />

      <section className="py-6 space-y-4 container">
        <div className="relative flex flex-col items-center border-2 border-black justify-center h-96">
          {products && (
            <>
              <div className="space-y-4 z-10 text-center">
                <h1 className="text-2xl uppercase font-bold">
                  {products[0].pName}
                </h1>
                <Link
                  to={`/items/${products[0].pId}`}
                  className="block w-max mx-auto px-2 py-1 text-white bg-black rounded"
                >
                  Shop
                </Link>
              </div>

              <div className="absolute inset-0 ">
                <img
                  className="block w-full h-full object-scale-down object-left-top"
                  src={products[0].image}
                  alt={products[0].pName}
                />
              </div>
              <div className="absolute inset-0 ">
                <img
                  className="block w-full h-full object-scale-down object-right-top"
                  src={products[0].image}
                  alt={products[0].pName}
                />
              </div>
            </>
          )}
          {pLoading && <p>"Loading"</p>}
        </div>
      </section>

      <section className="py-6 space-y-4 container">
        <header className="flex justify-between">
          <h2 className="text-lg font-medium">Recents</h2>

          <Link to="/items">See All</Link>
        </header>

        <div className="grid grid-cols-4 items-center gap-4">
          {products &&
            products.map((item, index) => {
              return <MediumCard key={index} product={item} />;
            })}

          {pLoading && (
            <div className="h-full sm:col-span-3 flex justify-center items-center">
              <p>"Loading"</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Home;
