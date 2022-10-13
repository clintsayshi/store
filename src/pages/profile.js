import { useAuth0, User } from "@auth0/auth0-react";
import React from "react";
import Layout from "../components/Layout";

function Profile() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  console.log(User);

  if (isLoading)
    return (
      <Layout>
        <div className="h-screen flex justify-center items-center">
          <p>"Loading"</p>
        </div>
      </Layout>
    );

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="h-screen flex justify-center items-center">
          <button onClick={() => loginWithRedirect()}>Login</button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container mx-auto border py-6 flex flex-col items-center">
        <div className="w-28">
          <img
            className="block w-full object-cover rounded-full"
            src={user.picture}
            alt={user.given_name}
          />
        </div>
        <h1 className="my-2 text-xl text-center">{user.given_name}</h1>
        <p>Sportie member since </p>
      </section>
    </Layout>
  );
}

export default Profile;
