/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa"; // Import icons
import { useLogin } from "./useLogin";
import { useState } from "react";
import MiniLoader from "../../Ui/MiniLoader";
import { loginWithProvider } from "../../Services/apiAuthentication";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-darkGray px-4">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white shadow-xl rounded-lg md:space-y-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-darkGray">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500">
          Please sign in to access your account.
        </p>

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="username"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
          >
            {isLoading ? <MiniLoader /> : "Login"}
          </button>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b border-gray-300"></span>
          <p className="text-sm text-gray-500">Or sign in with</p>
          <span className="w-1/5 border-b border-gray-300"></span>
        </div>

        <div className="flex mt-4">
          <button
            onClick={() => loginWithProvider("github")}
            className="flex-1 py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all"
          >
            <FaGithub className="inline mr-2" /> GitHub
          </button>
        </div>

        <p className="text-sm text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
