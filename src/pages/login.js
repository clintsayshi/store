import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container md:w-96 h-max mt-20 space-y-10 flex flex-col justify-center">
        <header className="text-left">
          <div className="text-lg font-medium">Sportie shoe</div>
          <h1 className="text-2xl">Login into your account</h1>
        </header>
        <form className="">
          <div className="mb-6 flex flex-col gap-2">
            <label>Enter you email</label>
            <input
              className="px-4 py-1 text-base rounded border-2 border-black"
              id="login_email"
              type="email"
              required
            />
          </div>

          <div className="mb-6 flex flex-col gap-2">
            <label>Enter you password</label>
            <input
              className="px-4 py-1 text-base rounded border-2 border-black"
              id="login_password"
              type="password"
              required
            />
          </div>

          <input
            className="w-full py-1 text-base font-medium text-white rounded bg-blue-500"
            type="submit"
            value="Login"
          />
        </form>

        <div>
          <p>
            You already have an account?{" "}
            <Link className="inline underline" to="/">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
