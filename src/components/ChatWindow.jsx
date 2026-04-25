import { useEffect, useRef } from "react";
import ChatInput from "./ChatInput";
import bg from "../assets/images/bg.png";
import CallButton from "./icons/CallButton";
import SearchButton from "./icons/SearchButton";
import MenuButton from "./icons/MenuButton";

function ChatWindow({ user, sendMessage, typing, setTyping }) {
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [user.messages]);

  return (
    <div className="flex-1 flex flex-col h-screen">

      {/* HEADER */}
      <div className="p-3 border-b flex items-center justify-between bg-white">
        <div className="flex items-center gap-3">
          <img src={user.image} className="w-10 h-10 rounded-full" />
          <div className="leading-tight">
            <h2 className="font-medium">{user.name}</h2>
            <p className="text-xs text-gray-500">online</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CallButton />
          <SearchButton />
          <MenuButton />
        </div>
      </div>

      
      <div
        className="flex-1 flex flex-col"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        {/* MESSAGES */}
        <div className="flex-1 px-10 pt-4 pb-2 overflow-y-auto flex flex-col justify-end">

          {/* TODAY */}
          <div className="flex justify-center mb-2">
            <span className="bg-white/80 text-xs px-3 py-1 rounded-lg text-gray-600">
              Today
            </span>
          </div>

          {/* MESSAGE LIST */}
          {user.messages.map((msg, index) => (
            <div
              key={index}
              className={`w-full flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`relative inline-block max-w-[65%] px-3 py-1.5 text-sm rounded-lg ${
                  msg.sender === "me"
                    ? "bg-[#d9fdd3]"
                    : "bg-white"
                }`}
              >
                {/* TAIL */}
                <div
                  className={`absolute top-0 ${
                    msg.sender === "me"
                      ? "right-[-5px] border-l-[6px] border-l-[#d9fdd3]"
                      : "left-[-5px] border-r-[6px] border-r-white"
                  } border-t-[6px] border-t-transparent`}
                />

                <p>{msg.text}</p>

                <div className="flex justify-end items-center gap-1 text-[11px] text-gray-500 mt-0.5">
                  {msg.time}
                  {msg.sender === "me" && (
                    <span className={msg.seen ? "text-blue-500" : "text-gray-400"}>
                      ✓✓
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {typing && (
            <p className="max-w-xs px-4 py-2 gap-1 rounded-lg shadow bg-white">
              Typing...
            </p>
          )}

          <div ref={bottomRef}></div>
        </div>

        
        <ChatInput sendMessage={sendMessage} setTyping={setTyping} />

      </div>
    </div>
  );
}

export default ChatWindow;