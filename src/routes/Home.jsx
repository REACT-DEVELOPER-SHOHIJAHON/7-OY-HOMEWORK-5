import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 min-h-screen flex flex-col justify-center items-center text-white p-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center animate-fadeIn">
        Welcome to Our Platform
      </h1>
      <p className="text-lg md:text-xl text-center max-w-xl mb-12 animate-slideIn">
        Explore new opportunities with a platform crafted to help you achieve
        your goals and excel in your journey.
      </p>
      <button className="bg-white text-teal-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105">
        Get Started
      </button>
    </div>
  );
};

export default Home;
