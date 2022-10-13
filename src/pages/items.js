import React, { useState } from "react";

import { useGetCategoriesQuery, useGetProductsQuery } from "../redux/shoesApi";

import { MediumCard } from "../components/DisplayCards/mediumcard";
import Layout from "../components/Layout";

import TabNavigation from "../components/TabNavigation";

function Items() {
  const [counter, setCounter] = useState(0);

  const {
    data: categories,
    error: cError,
    loading: cLoading,
  } = useGetCategoriesQuery();
  const {
    data: products,
    error: pError,
    loading: pLoading,
  } = useGetProductsQuery();

  const Category = ({ name = "Formal", categoryId = 22 }) => {
    return (
      <div className="space-x-2">
        <input id={categoryId} type="checkbox" />
        <label htmlFor={categoryId}>{name}</label>
      </div>
    );
  };

  return (
    <Layout>
      <TabNavigation />

      <section>
        <header className="container py-4">
          <h1 className="text-xl font-medium">Shop</h1>
        </header>

        <div className="container grid grid-cols-1 sm:grid-cols-5 gap-4">
          {/* Filters */}
          <div className="hidden sm:col-span-1 w-full">
            <header className="flex justify-between w-full">
              <h3 className="text-lg capitalize">Filters</h3>
              <button className="sm:hidden w-8 h-8 flex justify-center items-center bg-gray-100">
                "+"
              </button>
            </header>

            <div
              className={`flex flex-col gap-2 hidden sm:flex flex-col gap-2`}
            >
              {categories && (
                <>
                  {categories.map((category, index) => (
                    <Category
                      name={category.name}
                      categoryId={category.Id}
                      key={index}
                    />
                  ))}
                </>
              )}

              {cLoading && <p>"Loading"</p>}
            </div>
          </div>

          {/* Items */}
          <div className="sm:col-span-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
        </div>
      </section>
    </Layout>
  );
}

export default Items;
