import React, { useState } from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("Tamanna");
  const [bio, setBio] = useState(
    "Hi Everyone! I am Tamanna,I am using QuickChat.",
  );
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    // Handle form submission logic here, such as sending data to the server
    console.log("Profile updated with:", { name, bio, selectedImage });
  };
  return (
    <div className="min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <div className="w-5/6 max-w-2xl  backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 p-10 flex-1"
        >
          <h3 className="text-lg">Profile Details</h3>
          <label htmlFor="avatar" className="flex items-center gap-3">
            {" "}
            <input
              onChange={(e) => setSelectedImage(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png,.jpg,.jpeg"
              hidden
            />
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : assets.avatar_icon
              }
              alt="Selected Avatar"
              className={`w-12 h-12 ${selectedImage ? "rounded-full" : ""} cursor-pointer object-cover`}
            />
            upload profile image
          </label>
          <input
            type="text"
            className="p-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            rows={4}
            className="p-2 border border-gray-500 rounded-md focus:outline-none bg-transparent resize-none"
            placeholder="Bio..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 p-5 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition-colors duration-300 w-max"
          >
            Save Changes
          </button>
        </form>
        <img
          src={assets.logo_icon}
          alt="Profile Avatar"
          className="max-w-44 aspect-square rounded-full max-10 max-sm:mt-10 p-5"
        />
      </div>
    </div>
  );
};
export default ProfilePage;
