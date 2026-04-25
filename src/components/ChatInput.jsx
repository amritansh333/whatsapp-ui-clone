import { useState } from "react";
import PlusIcon from "./icons/PlusIcon";
import EmojiIcon from "./icons/EmojiIcon";
import MicIcon from "./icons/MicIcon";
import SendIcon from "./icons/SendIcon";

function ChatInput({ sendMessage, setTyping }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(text);
    setText("");
    setTyping(false);
  };

  return (
    <div className="p-2 md:p-3 bg-transparent">

      <div className="flex items-center gap-2 px-3 h-12 rounded-full bg-white w-full">

        <button className="p-2 rounded-full hover:bg-[#F6F5F4]">
          <PlusIcon />
        </button>

        <button className="p-2 rounded-full hover:bg-[#F6F5F4]">
          <EmojiIcon />
        </button>

        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setTyping(e.target.value.length > 0);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          placeholder="Type a message"
          className="flex-1 bg-transparent outline-none text-sm"
        />

        {text.trim() === "" ? (
          <button className="p-2 rounded-full  hover:font-white hover:bg-[#00a884]">
            <MicIcon />
          </button>
        ) : (
          <button
            onClick={handleSend}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#00a884]"
          >
            <SendIcon className="text-white w-5 h-5" />
          </button>
        )}

      </div>
    </div>
  );
}

export default ChatInput;