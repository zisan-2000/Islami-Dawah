"use client";

import { useRouter } from "next/navigation";
import LocationDropdown from "./LocationDropdown";

export default function Register() {
  let router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    // return
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      router.push("/admin/register");
      alert("User created successfully!");
    } else {
      alert("User Creation Faild! Try Again!");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 m-10">
      <div className="w-full p-8 space-y-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Add Role</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your Full name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Role Dropdown */}
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="centraladmin">কেন্দ্রীয় এডমিন</option>
              <option value="divisionadmin">বিভাগীয় এডমিন </option>
              <option value="districtadmin">জেলা এডমিন</option>
              <option value="areaadmin">এলাকার এডমিন</option>
              <option value="upozilaadmin">উপজেলা এডমিন</option>
              <option value="unionadmin">ইউনিয়ন এডমিন</option>
              <option value="daye">দা&apos;ঈ</option>
            </select>
          </div>

          <div>
            <LocationDropdown />
          </div>

          <div>
            <label
              htmlFor="markaz"
              className="block text-sm font-medium text-gray-700"
            >
              Markaz
            </label>
            <input
              type="text"
              id="markaz"
              name="markaz"
              placeholder="Enter your Markaz Name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your Phone Number"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Create New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your New Password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-32 py-2 px-4 bg-[#155E75] text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
