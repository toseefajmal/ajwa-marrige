
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    sessionStorage.setItem("customerRegistered", "true");
    sessionStorage.setItem("customerEmail", formData.email);
    sessionStorage.setItem("customerPassword", formData.password);
    sessionStorage.setItem("customerName", formData.name);

    const redirect = searchParams.get("redirect") || "/booking";

    navigate(`/login?redirect=${encodeURIComponent(redirect)}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#17140f] px-4 py-10">
      <div className="w-full max-w-lg rounded-2xl bg-[#faf8f3] p-7 shadow-2xl md:p-10">
        <div className="mb-7 text-center">
          <h1 className="font-serif text-3xl tracking-widest text-[#a77d32]">
            AJWA
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Create your customer account
          </p>
        </div>

        <h2 className="mb-6 text-center text-2xl font-semibold text-[#17140f]">
          Customer Registration
        </h2>

        {error && (
          <p className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700">
            {error}
          </p>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#b99753]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#b99753]"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#b99753]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#b99753]"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#b99753]"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-[#b99753] py-3 font-semibold text-[#17140f] transition hover:bg-[#d5b36a]"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-[#a77d32]">
            Login
          </Link>
        </p>

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

export default Register;
