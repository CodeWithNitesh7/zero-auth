import React, { useState } from "react";
// Import icons (you might need to install 'npm install @heroicons/react')
import { AtSymbolIcon, LockClosedIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

// **************** Google and Facebook Icon Components (for simplicity) ****************
const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M44.5 20H24V28.5H35.4299C34.7899 32.39 31.8699 35.25 28.0099 36.88L28.0097 36.8797L28.0099 36.88C24.1499 38.51 19.8999 37.93 16.5999 35.19L16.5997 35.1897L16.5999 35.19L12.01 38.6499C17.06 42.6 24.12 44.1 30.56 41.68C36.99 39.26 41.7 33.72 43.15 26.85C44.6 19.98 42.79 12.91 38.31 7.97003C33.84 3.03003 27.24 0.99003 20.37 2.44003C13.5 3.89003 7.96 8.60003 5.54003 15.03C3.12003 21.46 4.62003 28.52 8.57003 33.57L13.16 30.11C10.42 27.29 8.89003 23.32 8.89003 19.01C8.89003 14.7 10.42 10.73 13.16 7.91L17.75 4.45003C15.11 3.53003 12.27 3.03003 9.49003 3.03003C4.24003 3.03003 0 7.27003 0 12.52C0 17.77 4.24003 22.01 9.49003 22.01H17.99V28.01H8.89003C8.89003 33.35 13.16 37.59 18.5 37.59C23.84 37.59 28.11 33.35 28.11 28.01H34.11C34.11 36.6 28.45 43.12 20.1 43.12C11.75 43.12 5.09003 36.6 5.09003 28.01H1.52003C1.52003 38.57 10.02 46.97 20.1 46.97C30.18 46.97 38.68 38.57 38.68 28.01V20H44.5Z" fill="#FFC107" stroke="none" mask="url(#a)" />
    <path d="M28.0099 36.88L28.0097 36.8797L28.0099 36.88C24.1499 38.51 19.8999 37.93 16.5999 35.19L16.5997 35.1897L16.5999 35.19L12.01 38.6499C17.06 42.6 24.12 44.1 30.56 41.68C36.99 39.26 41.7 33.72 43.15 26.85L37.15 28.01C36.03 32.32 32.74 35.45 28.0099 36.88Z" fill="#E64A19" stroke="none" mask="url(#a)" />
    <path d="M44.5 20H24V28.5H35.4299C34.7899 32.39 31.8699 35.25 28.0099 36.88L28.0097 36.8797L28.0099 36.88C24.1499 38.51 19.8999 37.93 16.5999 35.19L16.5997 35.1897L16.5999 35.19L12.01 38.6499C17.06 42.6 24.12 44.1 30.56 41.68C36.99 39.26 41.7 33.72 43.15 26.85C44.6 19.98 42.79 12.91 38.31 7.97003C33.84 3.03003 27.24 0.99003 20.37 2.44003C13.5 3.89003 7.96 8.60003 5.54003 15.03L11.54 16.19C12.08 13.91 13.43 12.02 15.22 10.74L19.81 7.28003C17.17 6.36003 14.33 5.86003 11.55 5.86003C6.3 5.86003 2.06 10.1 2.06 15.35C2.06 20.6 6.3 24.84 11.55 24.84H19.99V30.84H11.55C11.55 36.18 15.82 40.42 21.16 40.42C26.5 40.42 30.77 36.18 30.77 30.84H36.77C36.77 39.43 31.11 45.95 22.76 45.95C14.41 45.95 7.75003 39.43 7.75003 30.84H4.18003C4.18003 41.4 12.68 49.8 22.76 49.8C32.84 49.8 41.34 41.4 41.34 30.84V20H44.5Z" fill="#3D82F5" stroke="none" mask="url(#a)" />
  </svg>
);
const FacebookIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm3 8h-2c-1.104 0-2 .896-2 2v2h4l-1 4h-3v8H9v-8H7v-4h2V8c0-2.206 1.794-4 4-4h2v4z" />
  </svg>
);
// **************** End of Icon Components ****************


export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 📧 Handler for Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // **For Practice:** Replace this URL with your actual ZeroAuth Login API endpoint
      const res = await fetch("https://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Email/Password Login failed");
      }

      alert("Login Success! (Email/Password)");
      console.log("User Token:", data.token);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🌐 Handler for Social Login (Google, Facebook)
  const handleSocialLogin = (provider) => {
    setError("");
    setLoading(true);

    // **For Practice:**
    // Real ZeroAuth social login (OAuth) requires redirection, not a direct fetch.
    // The actual integration would involve redirecting the user to a ZeroAuth endpoint
    // which then handles the OAuth flow with Google/Facebook.
    // Example: window.location.href = `https://api.zeroauth.com/v1/auth/${provider}`;

    console.log(`Initiating login with ${provider}...`);
    alert(`Redirecting to ${provider} for ZeroAuth... Check console for details.`);

    // Dummy timeout to simulate delay
    setTimeout(() => {
      setLoading(false);
      // setError(`Redirection for ${provider} simulated. Actual API integration required.`);
    }, 1500);
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">

      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-gray-200 dark:border-gray-700">

        <div className="text-center mb-8">
          <AcademicCapIcon className="h-10 w-10 text-blue-600 mx-auto mb-2" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Sign In</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">to your ZeroAuth Account</p>
        </div>

        {/* --- Social Login Buttons --- */}
        <div className="space-y-4 mb-6">
          <button
            type="button"
            onClick={() => handleSocialLogin("google")}
            className="w-full flex items-center justify-center bg-white dark:bg-gray-700 text-gray-700 dark:text-white py-3 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-150 shadow-sm font-semibold"
            disabled={loading}
          >
            <GoogleIcon />
            Continue with Google
          </button>

          <button
            type="button"
            onClick={() => handleSocialLogin("facebook")}
            className="w-full flex items-center justify-center bg-white dark:bg-gray-700 text-gray-700 dark:text-white py-3 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-150 shadow-sm font-semibold"
            disabled={loading}
          >
            <FacebookIcon />
            Continue with Facebook
          </button>
        </div>

        {/* --- Divider --- */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="flex-shrink mx-4 text-gray-500 dark:text-gray-400 text-sm font-medium">Or log in with Email</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>

        {/* --- Email/Password Form --- */}
        <form onSubmit={handleEmailLogin}>

          {error && (
            <p className="text-red-500 dark:text-red-400 mb-4 text-center text-sm font-medium border border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900/20 p-2 rounded-lg">{error}</p>
          )}

          {/* Email Input */}
          <div className="relative mb-4">
            <AtSymbolIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-3 pl-10 rounded-xl focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-6">
            <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-3 pl-10 rounded-xl focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-150 font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/50"
          >
            {loading ? "Logging in..." : "Login to ZeroAuth"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Don't have an account? <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Sign up here</a>
        </p>

      </div>
    </div>
  );
}