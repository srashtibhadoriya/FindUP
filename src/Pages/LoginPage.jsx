import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#932F67] via-[#DDDEAB] to-[#D92C54] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-white mb-4">Your Dream Home is Just a Click Away</h1>
          <p className="text-white mb-6">Homes that Find You</p>
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex -space-x-2 overflow-hidden">
              <img className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="User 1" />
              <img className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" alt="User 2" />
              <img className="w-8 h-8 rounded-full" src="https://randomuser.me/api/portraits/men/3.jpg" alt="User 3" />
            </div>
            <span className="text-sm text-black">Used by 12k+ developers ⭐⭐⭐⭐⭐</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 rounded-xl shadow-md w-full md:w-1/2 max-w-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Sign in to</h2>
          <p className="text-sm text-gray-500 mb-6">Welcome back! Please sign in to continue.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Password here"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-900 text-white py-2 rounded-md hover:bg-purple-700 transition"
            >
              Continue »
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-4">
            Don’t have an account? <a href="#" className="text-purple-600 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;