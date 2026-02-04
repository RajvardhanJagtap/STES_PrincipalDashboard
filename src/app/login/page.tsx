"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex">
      {/* Left Side - Image/Illustration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#026892] to-[#024a6b] items-center justify-center p-12">
        <div className="text-center text-white max-w-lg">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center mb-6 p-4">
              <Image
                src="/images/ur-logo.jpeg"
                alt="University of Rwanda Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <h2 className="text-3xl font-bold mb-4">Excellence in Education</h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Manage institutional performance with a unified principal
              dashboard. Review key metrics, track outcomes, and handle
              approvals in one place.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-1">Academic Tracking</div>
              <div className="text-blue-100">Monitor outcomes & compliance</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-1">Financial Management</div>
              <div className="text-blue-100">Track budgets & approvals</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-8 lg:px-12">
        <div className="max-w-md w-full">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Welcome back to
              <br />
              <span className="text-[#026892]">Principal Portal</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Institution Management Dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                Email or Username
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#026892] focus:border-transparent bg-white shadow-sm transition-all duration-200"
                placeholder="Enter your email or username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#026892] focus:border-transparent bg-white shadow-sm transition-all duration-200 pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 font-medium"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="text-left">
              <a
                href="#"
                className="text-[#026892] hover:text-[#024a6b] text-sm font-medium"
              >
                Forgot password?
              </a>
            </div>

            <div className="flex items-center justify-between py-2">
              <span className="text-sm font-medium text-gray-700">
                Remember sign in details
              </span>
              <button
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${rememberMe ? "bg-[#026892]" : "bg-gray-300"}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${rememberMe ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#026892] to-[#024a6b] text-white py-4 px-6 rounded-xl hover:from-[#024a6b] hover:to-[#013d56] focus:outline-none focus:ring-2 focus:ring-[#026892] focus:ring-offset-2 font-semibold text-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
