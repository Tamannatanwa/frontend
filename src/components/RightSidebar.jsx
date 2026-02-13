import React from "react";
import assets, { imagesDummyData } from "../assets/assets";

const RightSidebar = ({ selectedUser }) => {
  return (
    selectedUser && (
      <div
        className={`bg-[#8185B2]/10 h-full p-5 rounded-l-xl overflow-y-scroll text-white ${selectedUser ? "max-md:hidden" : ""}`}
      >
        <div className="flex flex-col items-center gap-3 py-5 border-b border-stone-500">
          <img
            src={selectedUser?.profilePic || assets.avatar_icon}
            alt="profile"
            className="w-20 aspect-[1/1] rounded-full mx-auto"
          />
          <h1>
            <p>{selectedUser?.fullName}</p>
            <p className="text-sm text-gray-400">
              {selectedUser?.bio || "No bio available"}
            </p>
          </h1>
        </div>
        <hr className="border-stone-500" />
        <div className="flex flex-col gap-3 py-5 border-b border-stone-500">
          <p>Media</p>
          <div className="flex items-center gap-2 overflow-x-scroll">
            {imagesDummyData.map((url, index) => (
              <div
                key={index}
                onClick={() => window.open(url)}
                className="max-w-[120px] max-h-[120px] border border-gray-700 rounded-lg overflow-hidden mb-8"
              >
                <img
                  key={index}
                  src={url}
                  alt="media"
                  className="w-20 h-20 rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <button className="w-full mt-5 py-2 bg-red-500 rounded-lg text-white">
          Logout
        </button>
      </div>
    )
  );
};

export default RightSidebar;
