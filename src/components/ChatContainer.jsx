import React, { useEffect, useRef } from "react";
import assets, { messagesDummyData } from "../assets/assets";
import { formateMessageTime } from "../lib/utils";

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  const scrollEnd = useRef();
  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return selectedUser ? (
    <div className="h-full overflow-scroll relative backdrop-blur-lg">
      {/* {-----chat header------} */}
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img
          src={assets.profile_martin}
          alt="profile"
          className="w-8 rounded-full"
        />
        <p className="flex-1 text-lg text-white flex items-center gap-2">
          Martin johnson
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </p>
        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt="arrow"
          className="md:hidden max-w-7"
        />
        <img src={assets.help_icon} alt="" className="max-md:hidden max-w-5" />
      </div>
      {/* {-----chat area ----} */}
      <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
        {messagesDummyData.map((message, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 justify-end ${
              message.senderId !== "680f50e4f10f3cd28382ecf9" &&
              "flex-row-reverse"
            }`}
          >
            {message.image ? (
              <img
                src={assets.avatar_icon}
                alt="message"
                className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8"
              />
            ) : (
              <p
                className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${message.senderId !== "680f50e4f10f3cd28382ecf9" ? "ml-auto" : ""}`}
              >
                {message.text}
              </p>
            )}
            <div>
              <img
                src={
                  message.senderId === "680f50e4f10f3cd28382ecf9"
                    ? assets.avatar_icon
                    : assets.profile_martin
                }
                alt="profile"
                className="w-6 rounded-full"
              />
              <p className="text-xs text-gray-500 mt-1">
                {formateMessageTime(message.createdAt)}
              </p>
            </div>
          </div>
        ))}
        <div ref={scrollEnd}></div>
      </div>
      {/* {-----chat input -----} */}
      <div className="flex items-center gap-3 mx-4 mt-auto">
        <div className="flex items-center gap-3 flex-1">
          <input
            type="text"
            placeholder="Type a message..."
            className="bg-transparent border border-gray-700 rounded-full flex-1 px-4 py-2 text-sm text-white outline-none"
          />
          <input type="file" id="fileInput" className="hidden" />
          <label htmlFor="fileInput">
            <img
              src={assets.gallery_icon}
              alt="attach"
              className="max-w-5 rotate-45 cursor-pointer"
            />
          </label>
        </div>
        <img
          src={assets.send_button}
          alt="send"
          className="max-w-5 rotate-90 cursor-pointer"
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
      <img src={assets.logo_icon} className="max-w-16" alt="logo" />
      <p className="text-lg font-medium text-white">Chat anytime, anywhere!</p>
    </div>
  );
};

export default ChatContainer;
