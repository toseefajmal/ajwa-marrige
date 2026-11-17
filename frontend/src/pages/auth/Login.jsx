
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Login = ({ defaultRole = "customer" }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [role, setRole] = useState(defaultRole);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const redirect = searchParams.get("redirect") || "";

    if (role === "admin") {
      // Temporary frontend demo credentials only
      if (email === "admin@ajwa.com" && password === "Admin123") {
        sessionStorage.setItem("userRole", "admin");
        navigate("/admin");
      } else {
        setError("Invalid admin email or password.");
      }

      return;
    }

    const registeredEmail = sessionStorage.getItem("customerEmail");
    const registeredPassword = sessionStorage.getItem("customerPassword");

    if (sessionStorage.getItem("customerRegistered") !== "true") {
      navigate(`/register?redirect=${encodeURIComponent(redirect || "/booking")}`);
      return;
    }

    if (email !== registeredEmail || password !== registeredPassword) {
      setError("Incorrect email or password.");
      return;
    }

    sessionStorage.setItem("userRole", "customer");
    sessionStorage.setItem("userEmail", email);

    navigate(redirect || "/booking");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#17140f] px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-[#faf8f3] p-7 shadow-2xl md:p-10">
        <div className="mb-7 text-center">
          <h1 className="font-serif text-3xl tracking-widest text-[#a77d32]">
            AJWA
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Marriage Hall Management System
          </p>
        </div>

        <h2 className="mb-6 text-center text-2xl font-semibold text-[#17140f]">
          Welcome Back
        </h2>

        <div className="mb-6 grid grid-cols-2 gap-2 rounded-full bg-gray-200 p-1">
          <button
            type="button"
            onClick={() => {
              setRole("customer");
              setError("");
            }}
            className={`rounded-full py-3 text-sm font-medium ${
              role === "customer"
                ? "bg-[#b99753] text-[#17140f]"
                : "text-gray-600"
            }`}
          >
            Customer
          </button>

          <button
            type="button"
            onClick={() => {
              setRole("admin");
              setError("");
            }}
            className={`rounded-full py-3 text-sm font-medium ${
              role === "admin"
                ? "bg-[#b99753] text-[#17140f]"
                : "text-gray-600"
            }`}
          >
            Admin
          </button>
        </div>

        {error && (
          <p className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#b99753]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#b99753]"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-[#b99753] py-3 font-semibold text-[#17140f] transition hover:bg-[#d5b36a]"
          >
            {role === "admin" ? "Admin Login" : "Customer Login"}
          </button>
        </form>

        {role === "customer" && (
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="font-semibold text-[#a77d32]">
              Register Now
            </Link>
          </p>
        )}

        {role === "admin" && (
          <p className="mt-6 text-center text-xs text-gray-500">
            Admin access is only for authorized management.
          </p>
        )}

        <Link
          to="/"
          className="mt-5 block text-center text-sm text-gray-500 hover:text-[#a77d32]"
        >
          Back to Website
        </Link>
      </div>
    </div>
  );
};

export default Login;
