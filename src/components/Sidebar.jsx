import { useState } from "react";
import ChatIcon from "./icons/ChatIcon";
import StatusIcon from "./icons/StatusIcon";
import ChannelIcon from "./icons/ChannelIcon";
import CommunityIcon from "./icons/CommunityIcon";
import MetaIcon from "./icons/MetaIcon";
import Divider from "./icons/Divider";
import MediaIcon from "./icons/MediaIcon";
import ProfileIcon from "./icons/ProfileIcon";
import SettingsIcon from "./icons/SettingsIcon";
import NewChatButton from "./icons/NewChatButton";
import SearchButton from "./icons/SearchButton";

function Sidebar({ users, selectedUserId, setSelectedUserId }) {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");
  const filteredUsers = users.filter((user) => {
  const query = search.toLowerCase();

  return (
    user.name.toLowerCase().includes(query) ||
    user.messages.some((msg) =>
      msg.text.toLowerCase().includes(query)
    )
  );
});

  return (
    <div className="flex h-full">
      <div className="hidden md:flex w-16 bg-[#F7F5F3] flex-col items-center justify-between py-3">
        <div className="flex flex-col items-center gap-2">
          <div className="relative p-2 rounded-full bg-[#EAE8E7]">
            <ChatIcon className="w-6 h-6 text-black bg-[#EAE8E7]"  />

            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              15
            </span>
          </div>

    <div className="p-2 rounded-full hover:bg-[#EAE8E7]">
      <StatusIcon className="w-6 h-6 text-gray-600" />
    </div>

    <div className="p-2 rounded-full hover:bg-[#EAE8E7]">
      <ChannelIcon className="w-6 h-6 text-gray-600" />
    </div>

    <div className="p-2 rounded-full hover:bg-[#EAE8E7]">
      <CommunityIcon className="w-6 h-6 text-gray-600" />
    </div>

    <button className="p-2 rounded-full hover:bg-[#EAE8E7] transition">
  <img
    src="https://static.whatsapp.net/rsrc.php/yS/r/T_xj3a3ApC9.webp"
    alt="Meta AI"
    className="w-6 h-6"
    draggable="false"
  />
    </button>

  </div>

  <div className="flex flex-col items-center gap-2">
    <div className="p-2 rounded-full hover:bg-[#EAE8E7]">
    <MediaIcon className="w-6 h-6 text-gray-600" />
    </div>
    <div className="p-2 rounded-full hover:bg-[#EAE8E7]">
    <SettingsIcon className="w-6 h-6 text-gray-600" />
    </div>
    <div className="p-2 rounded-full hover:bg-[#EAE8E7]">
    <ProfileIcon src="https://media-del2-2.cdn.whatsapp.net/..." />
    </div>
  </div>

</div>

      <div className="w-full md:w-[360px] bg-white border-r flex flex-col">

        <div className="p-3 flex justify-between items-center border-b bg-white">


  <h1 className="text-[22px] font-semibold text-[#1DAA61]">
    WhatsApp
  </h1>

  <div className="flex items-center gap-2">


    <NewChatButton />


    <button className="p-2 rounded-full hover:bg-[#F0F2F5] transition">
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 20C11.45 20 10.98 19.8 10.59 19.41C10.2 19.02 10 18.55 10 18C10 17.45 10.2 16.98 10.59 16.59C10.98 16.2 11.45 16 12 16ZM12 14C11.45 14 10.98 13.8 10.59 13.41C10.2 13.02 10 12.55 10 12C10 11.45 10.2 10.98 10.59 10.59C10.98 10.2 11.45 10 12 10ZM12 8C11.45 8 10.98 7.8 10.59 7.41C10.2 7.02 10 6.55 10 6C10 5.45 10.2 4.98 10.59 4.59C10.98 4.2 11.45 4 12 4Z" />
      </svg>
    </button>

    </div>

  </div>

        <div className="px-4 py-2 bg-white">
          <div className="flex items-center bg-[#F6F5F4] rounded-full px-3">

            <div className="mr-2 text-gray-500">
              <SearchButton />
            </div>


    <input
      type="text"
      placeholder="Search or start a new chat"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full  py-2.5 bg-transparent text-sm outline-none"
    />
    {search && (
  <button
    onClick={() => setSearch("")}
    className="text-gray-400 hover:text-black mr-2"
  >
    ✕
  </button>
)}

    </div>
  </div>

<div className="flex items-center gap-2 px-3 pb-3 pt-1 bg-white">
  {["All", "Unread", "Favourites", "Groups"].map((item) => (
    <button
      key={item}
      onClick={() => setActive(item)}
      className={`px-3 py-1 rounded-full text-sm transition
        ${
          active === item
  ? "bg-[#d9fdd3] text-green-900 font-semibold border border-gray-400 hover:bg-[#C6F4C7] "
  : "bg-white text-gray-600 font-semibold border border-gray-400 hover:bg-[#F6F5F4] "
        }`}
    >
      {item}
    </button>
  ))}

  <button className="px-3 pb-0 rounded-full text-gray-600 bg-white border border-gray-400 hover:bg-[#F6F5F4] text-lg">
    +
  </button>
</div>

        <div className="flex-1 overflow-y-auto">
          {filteredUsers.length === 0 && (
            <div className="text-center text-gray-500 mt-6 text-sm">
              No chats found
            </div>
          )}
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedUserId(user.id)}
              className={`flex items-center gap-3 px-3 py-3 cursor-pointer hover:rounded-lg m-1 hover:bg-[#F6F5F4] ${
                selectedUserId === user.id ? "rounded-lg m-1 bg-[#F6F5F4]" : ""
              }`}
            >
            
              <img
                src={user.image}
                className="w-12 h-12 rounded-full"
              />

              <div className="flex-1">
  <div className="flex justify-between">
    <h2 className="font-medium text-[15px]">{user.name}</h2>
    <span className="text-xs text-gray-400">
      {user.messages[user.messages.length - 1]?.time}
    </span>
  </div>

  <p className="text-sm text-gray-500 truncate">
    {user.messages[user.messages.length - 1]?.text}
  </p>
</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Sidebar;