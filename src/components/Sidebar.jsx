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


function Sidebar({ users, selectedUserId, setSelectedUserId }) {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");

  return (
    <div className="flex h-screen">

      {/* LEFT ICON BAR */}
      <div className="w-16 bg-[#F7F5F3] flex flex-col items-center justify-between py-3">

  {/* TOP */}
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

    <div className="border-t w-full p-2 rounded-full  justify-center hover:bg-[#EAE8E7]">
      <MetaIcon className="w-6 h-6" />
    </div>

  </div>

  {/* BOTTOM */}
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

      {/* MAIN SIDEBAR */}
      <div className="w-[360px] bg-white border-r flex flex-col">

        {/* HEADER */}
        <div className="p-3 flex justify-between items-center border-b bg-white">

  {/* LEFT: Logo */}
  <h1 className="text-[22px] font-semibold text-[#1DAA61]">
    WhatsApp
  </h1>

  {/* RIGHT: Icons */}
  <div className="flex items-center gap-2">

    {/* New Chat */}
    <NewChatButton />

    {/* Menu */}
    <button className="p-2 rounded-full hover:bg-[#F0F2F5] transition">
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 20C11.45 20 10.98 19.8 10.59 19.41C10.2 19.02 10 18.55 10 18C10 17.45 10.2 16.98 10.59 16.59C10.98 16.2 11.45 16 12 16ZM12 14C11.45 14 10.98 13.8 10.59 13.41C10.2 13.02 10 12.55 10 12C10 11.45 10.2 10.98 10.59 10.59C10.98 10.2 11.45 10 12 10ZM12 8C11.45 8 10.98 7.8 10.59 7.41C10.2 7.02 10 6.55 10 6C10 5.45 10.2 4.98 10.59 4.59C10.98 4.2 11.45 4 12 4Z" />
      </svg>
    </button>

  </div>

</div>

        {/* SEARCH */}
        <div className="px-4 py-2 bg-white">
          <input
            type="text"
            placeholder="Search or start a new chat"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-2.5 rounded-full bg-[#F6F5F4] text-sm outline-none"
          />
        </div>

        {/* FILTER BUTTONS */}
        

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

  {/* + Button */}
  <button className="px-3 pb-0 rounded-full text-gray-600 bg-white border border-gray-400 hover:bg-[#F6F5F4] text-lg">
    +
  </button>
</div>

        {/* USERS LIST */}
        <div className="flex-1 overflow-y-auto">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedUserId(user.id)}
              className={`flex items-center gap-3 px-3 py-3 cursor-pointer hover:rounded-lg m-1 hover:bg-[#F6F5F4] ${
  selectedUserId === user.id ? "rounded-lg m-1 bg-[#F6F5F4]" : ""
}`}
            >
              {/* PROFILE IMAGE */}
              <img
                src={user.image}
                className="w-12 h-12 rounded-full"
              />

              {/* NAME + LAST MESSAGE */}
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