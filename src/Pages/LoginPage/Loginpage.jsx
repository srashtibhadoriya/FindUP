import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 navigate hook

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // 👈 for redirect

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });

    // Abhi koi check nahi, sirf sidebar wale app me bhej denge
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B3C53] via-purple-100 to-[#D2C1B6] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-[#1B3C53] mb-4">
            More than just friends truly connect
          </h1>
          <p className="text-gray-600 mb-6">
            Connect with global community on pingup.
          </p>
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="w-8 h-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User 1"
              />
              <img
                className="w-8 h-8 rounded-full"
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="User 2"
              />
              <img
                className="w-8 h-8 rounded-full"
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="User 3"
              />
            </div>
            <span className="text-sm text-gray-600">
              Used by 12k+ developers ⭐⭐⭐⭐⭐
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 rounded-xl shadow-md w-full md:w-full max-w-sm">
          <h2 className="text-xl font-bold mb-2 text-[#1B3C53]">Sign in to</h2>
          <p className="text-sm text-[#1c4b6c] mb-6">Welcome back! Please sign in to continue.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 bg-[#F9F3EF] p-2 w-full border rounded-md focus:ring-2 focus:ring-[#1B3C53] focus:outline-none"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 bg-[#F9F3EF] p-2 w-full border rounded-md focus:ring-2 focus:ring-[#1B3C53] focus:outline-none"
                placeholder="Password here"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1B3C53] text-white py-2 rounded-md hover:bg-[#D2C1B6] hover:text-[#1B3C53] transition"
            >
              Continue »
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-[#1B3C53] hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
