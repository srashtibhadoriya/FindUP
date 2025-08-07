 import { useState } from 'react';
 
 const Signin = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
 
   const handleSubmit = (e) => {
     e.preventDefault();
     console.log({ email, password });
   }
   return (
 <div className="bg-[#1B3C53] p-8 rounded-xl shadow-md w-full md:w-full ">
          <h2 className="text-xl font-semibold mb-4 text-white">Sign in to</h2>
          <p className="text-sm text-gray-300 mb-6">Welcome back! Please sign in to continue.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 bg-[#F9F3EF] p-2 w-full border rounded-md focus:ring-2 focus:ring-[#1B3C53] focus:outline-none"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Password</label>
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

          <p className="text-sm text-[#F9F3EF] text-center mt-4">
            Don’t have an account? <a href="#" className="text-[#F9F3EF] hover:underline">Sign up</a>
          </p>
        </div>
   );
 };
 export default Signin;