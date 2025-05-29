import React, { useState } from 'react';
import CTAButton from '../../components/cta_button/CTAButton';
import Footer from '../../components/footer/footer';
import Logo from '../../assets/LogoW.png';
import { User, Key, Mail } from 'lucide-react';

export default function EmployeeLoginPage() {
  const [isResetting, setIsResetting] = useState(false);

  return (
    <>
      <div className="bg-[var(--color-footer-bg)] text-white py-16 pb-0 px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex justify-center">
            <img
              src={Logo}
              alt="DrMudhiwalla HealthCare"
              className="h-7 sm:h-10 lg:h-20 mx-auto"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            {isResetting ? 'Reset Your Password' : 'Employee Login'}
          </h1>
          <p className="text-base text-gray-300">
            {isResetting
              ? 'Enter your email to receive a password reset link.'
              : 'Please enter your credentials to access the employee portal.'}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // handle submit...
          }}
          className="mt-12 bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-md space-y-6"
        >
          {!isResetting ? (
            <>
              {/* Employee ID / Username */}
              <div>
                <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
                  Employee ID / Username *
                </label>
                <div className="relative">
                  <User className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                  <input
                    id="username"
                    type="text"
                    required
                    className="w-full pl-10 text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your ID or username"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                  Password *
                </label>
                <div className="relative">
                  <Key className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                  <input
                    id="password"
                    type="password"
                    required
                    className="w-full pl-10 text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2 text-gray-700">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  onClick={() => setIsResetting(true)}
                  className="text-blue-600 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit */}
              <div className="text-center">
                <CTAButton
                  as="button"
                  type="submit"
                  text="Login"
                  Icon={User}
                  bgColor="var(--color-button)"
                  hoverColor="var(--color-primary-hover)"
                  circleColor="var(--color-primary-circle)"
                  textColor="#fff"
                  className="mx-auto"
                />
              </div>
            </>
          ) : (
            <>
              {/* Email for reset */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full pl-10 text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Back to login */}
              <div className="flex justify-between text-sm">
                <button
                  type="button"
                  onClick={() => setIsResetting(false)}
                  className="text-gray-600 hover:underline"
                >
                  ← Back to login
                </button>
              </div>

              {/* Send Reset Link */}
              <div className="text-center">
                <CTAButton
                  as="button"
                  type="submit"
                  text="Send Reset Link"
                  Icon={Mail}
                  bgColor="var(--color-button)"
                  hoverColor="var(--color-primary-hover)"
                  circleColor="var(--color-primary-circle)"
                  textColor="#fff"
                  className="mx-auto"
                />
              </div>
            </>
          )}
        </form>
      </div>

      {/* Footer */}
      <div className="contact-footer-wrapper">
        <Footer />
      </div>
    </>
  );
}