import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MediumCard } from "../components/DisplayCards/mediumcard";
import Layout from "../components/Layout";

function Items() {
  const [page, setPage] = useState(1);
  const category = useSelector((state) => state.shopping.category);

  const [pLoading, setProductsLoading] = useState(true);
  const [pError, setProductsError] = useState(false);
  const [products, setProducts] = useState();

  useEffect(() => {
    setProductsLoading(true);
    setProductsError(false);
    setProducts();
    fetch(
      `http://localhost:8080/api/products?page=${page}&category=${category}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setProductsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setProductsError(true);
      });
  }, [category, page]);

  return (
    <Layout>
      <section>
        <header className="container py-4">
          <h1 className="text-xl font-medium">Shop</h1>
        </header>

        {pError && (
          <div className="container h-72 flex justify-center items-center">
            <p>"Error fetching data"</p>
          </div>
        )}
        {pLoading && (
          <div className="container h-72 flex justify-center items-center">
            <p>"Loading"</p>
          </div>
        )}
        {products && products.length < 1 && (
          <div className="container h-72 flex justify-center items-center">
            <p>"Out of stock"</p>
          </div>
        )}

        <div className="container grid grid-cols-1 sm:grid-cols-5 gap-4">
          {/* Items */}
          <div className="sm:col-span-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products &&
              products.map((item, index) => {
                return <MediumCard key={index} product={item} />;
              })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Items;
