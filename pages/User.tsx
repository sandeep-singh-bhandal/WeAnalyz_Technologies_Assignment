import { useState } from "react";
import { FaStar, FaRegEdit } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const User = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleSubmit = () => {
    alert(`Feedback submitted:\n"${feedback}"\nRating: ${rating} stars`);
    setFeedback("");
    setRating(0);
  };

  return (
    <main>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-5/6 h-screen pt-20 px-8">
          <h2 className="flex items-center text-4xl font-semibold h-2/12">User Profile</h2>

          <div className="flex justify-around p-8 bg-[#55D6C2] h-10/12">
            {/* Profile Card */}
            <div className="bg-white p-6 rounded-lg shadow-md relative w-1/3 h-fit py-16">
              <div className="absolute top-4 right-4 text-gray-700 cursor-pointer">
                <FaRegEdit />
              </div>
              <div className="flex flex-col">
                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto">
                  <IoPerson className="scale-150" />
                </div>
                <div className="text-left text-sm space-y-1">
                  <p>Username</p>
                  <p>Contact Number</p>
                  <p>Email</p>
                  <p>Department</p>
                </div>
              </div>
            </div>

            {/* Feedback Box */}
            <div className="bg-white p-4 rounded-lg shadow-md w-1/3 h-fit py-10 ">
              <h3 className="text-lg font-semibold text-center mb-2">
                Give Your Feedback
              </h3>
              <textarea
                placeholder="[Lorem Ipsum]"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full border border-gray-400 text-xs px-2 py-1 h-16 mb-2 resize-none"
              />
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => {
                  const currentRating = i + 1;
                  return (
                    <FaStar
                      key={i}
                      className={`cursor-pointer transition-colors text-sm ${
                        currentRating <= (hover || rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      onClick={() => setRating(currentRating)}
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(0)}
                    />
                  );
                })}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="bg-teal-600 hover:bg-teal-700 text-white text-sm px-6 py-2 rounded-lg cursor-pointer"
                >
                  Submit Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default User;
