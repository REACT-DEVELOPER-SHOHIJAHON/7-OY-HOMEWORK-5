import React, { useEffect, useState } from "react";
import axios from "../api";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import najot from "../assets/najot.png";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get("/users/2");
        setUserData(response.data);
      } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        setError("Failed to load user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-800 bg-gray-200">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600 bg-gray-200">
        <div className="text-center">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-blue-100 min-h-screen p-8 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center space-x-6 mb-8">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
            src={najot}
            alt="Profile"
          />
          <div>
            <h1 className="text-3xl font-extrabold mb-2">
              {userData.name.firstname} {userData.name.lastname}
            </h1>
            <p className="text-gray-600 text-lg">{userData.email}</p>
          </div>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaPhoneAlt className="mr-2 text-xl text-blue-600" />
            Contact Information
          </h2>
          <p className="text-lg">
            <span className="font-semibold">Phone:</span> {userData.phone}
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-xl text-blue-600" />
            Address
          </h2>
          <p className="text-lg">
            <span className="font-semibold">City:</span> {userData.address.city}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Zipcode:</span>{" "}
            {userData.address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
