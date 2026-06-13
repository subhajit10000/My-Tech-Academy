import {NavLink} from 'react-router-dom'
import { useState } from 'react';
export default function SignIn() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Account Created:', formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md rounded-xl bg-[#0B132B] p-8 shadow-2xl text-white font-sans">
        <h2 className="mb-6 text-3xl font-bold tracking-tight">Create an account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="fullName">
             Enter Your Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Your Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-lg bg-[#2e3752] px-4 py-3 text-white placeholder-gray-400 border border-transparent focus:border-blue-500 focus:outline-none transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className="w-full rounded-lg bg-[#2e3752] px-4 py-3 text-white placeholder-gray-400 border border-transparent focus:border-blue-500 focus:outline-none transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg bg-[#2e3752] px-4 py-3 text-white placeholder-gray-400 border border-transparent focus:border-blue-500 focus:outline-none transition duration-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 rounded-lg bg-[#2563eb] py-3 text-center font-semibold text-white hover:bg-blue-600 active:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1e2640]"
          >
            Create an account
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-400">
          Already have an account?{' '}
          <NavLink to="/Login" className="text-blue-500 hover:underline font-medium">
            Sign in here
          </NavLink>
        </p>
      </div>
    </div>
  );
}