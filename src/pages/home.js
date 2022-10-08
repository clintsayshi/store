import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MediumCard } from "../components/DisplayCards/mediumcard";
import Layout from "../components/Layout";
import TabNavigation from "../components/TabNavigation";

import crocs from "../images/crocs.jpg";
import fila from "../images/fila.jpg";
import allstar from "../images/all-star.jpg";
import puma from "../images/puma.jpg";

const sh1 = { pName: "Crocs Altima", price: "1020.00", image: crocs };
const sh2 = { pName: "All Star Blue", price: "700.00", image: allstar };
const sh3 = { pName: "Fila - likeStar", price: "500.00", image: fila };
const sh4 = { pName: "Puma EXTND", price: "660.00", image: puma };

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        console.log(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Layout>
      <TabNavigation />

      <section className="py-6 space-y-4 container">
        <div className="relative flex flex-col items-center border-2 border-black justify-center h-96">
          {!isLoading && (
            <>
              <div className="space-y-4 z-10 text-center">
                <h1 className="text-2xl uppercase font-bold">
                  {data[0].pName}
                </h1>
                <Link
                  to={`/items/${data[0].pId}`}
                  className="block w-max mx-auto px-2 py-1 text-white bg-black rounded"
                >
                  Shop
                </Link>
              </div>

              <div className="absolute inset-0 ">
                <img
                  className="block w-full h-full object-scale-down object-left-top"
                  src={data[0].image}
                  alt={data[0].pName}
                />
              </div>
              <div className="absolute inset-0 ">
                <img
                  className="block w-full h-full object-scale-down object-right-top"
                  src={data[0].image}
                  alt={data[0].pName}
                />
              </div>
            </>
          )}
          {isLoading && <p>"Loading"</p>}
        </div>
      </section>

      <section className="py-6 space-y-4 container">
        <header className="flex justify-between">
          <h2 className="text-lg font-medium">New Arrivals</h2>

          <Link>See All</Link>
        </header>

        <div className="grid grid-cols-4 items-center gap-4">
          <MediumCard product={sh1} />
          <MediumCard product={sh2} />

          {!isLoading &&
            data.map((item, index) => {
              <MediumCard product={item} key={index} />;
            })}
        </div>
      </section>
    </Layout>
  );
}

export default Home;
