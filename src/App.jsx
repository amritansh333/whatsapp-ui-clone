import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import usersData from "./data/users.json";

function App() {
  const [users, setUsers] = useState(usersData);
  const [selectedUserId, setSelectedUserId] = useState(usersData[0].id);
  const selectedUser = users.find(user => user.id === selectedUserId);

  const [typing, setTyping] = useState(false);
 const sendMessage = (text) => {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  let updatedUser;

  const remainingUsers = users.filter(user => {
    if (user.id === selectedUserId) {
      updatedUser = {
        ...user,
        messages: [
          ...user.messages,
          { text, sender: "me", time, seen: false }
        ]
      };
      return false;
    }
    return true;
  });

  setUsers([updatedUser, ...remainingUsers]);
};


  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="w-[420px] flex-shrink-0">
      <Sidebar 
        users = { users }
        selectedUserId = { selectedUserId }
        setSelectedUserId = { setSelectedUserId }
        />
        </div>

        <div className="flex-1">

      <ChatWindow 
        user = {selectedUser}
        sendMessage = {sendMessage}
        typing = {typing}
        setTyping = {setTyping}
        setSelectedUserId={setSelectedUserId}
        />
        </div>

    </div>
  );
}

export default App;