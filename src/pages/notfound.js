import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function NotFound() {
  return (
    <Layout>
      <div className="h-96 flex flex-col justify-center items-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-medium">Oops! You seem to be lost.</h1>
          <p className="">
            Go back <Link to="/">home</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
