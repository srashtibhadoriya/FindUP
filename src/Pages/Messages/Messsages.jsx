import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const members = [
  { name: "John", image: "https://randomuser.me/api/portraits/men/10.jpg" },
  { name: "Warren", image: "https://randomuser.me/api/portraits/men/20.jpg" },
  { name: "John", image: "https://randomuser.me/api/portraits/men/10.jpg" },
  { name: "Warren", image: "https://randomuser.me/api/portraits/men/20.jpg" },
  { name: "John", image: "https://randomuser.me/api/portraits/men/10.jpg" },
  { name: "Warren", image: "https://randomuser.me/api/portraits/men/20.jpg" },
  { name: "John", image: "https://randomuser.me/api/portraits/men/10.jpg" },
  { name: "Warren", image: "https://randomuser.me/api/portraits/men/20.jpg" },
];

export default function ChatPage() {
  const [showChat, setShowChat] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    
    <div className="h-screen flex flex-col bg-white -ml-18 mr-18">
      {/* Members List */}
      {!showChat && (
        <div className="p-4 space-y-4">
          <h2 className="text-lg font-bold">Members</h2>
          {members.map((member, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedMember(member);
                setShowChat(true);
              }}
              className="flex items-center gap-3 p-2 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-12 h-12 rounded-full"
              />
              <span>{member.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Chat Screen */}
      {showChat && selectedMember && (
        <div className="flex flex-col h-full">
          {/* Chat Header */}
          <div className="flex items-center p-4 bg-white shadow">
            <button
              className="mr-3 text-xl"
              onClick={() => setShowChat(false)}
            >
              <FaArrowLeft />
            </button>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="font-semibold">{selectedMember.name}</span>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <p className="text-gray-600">
            Chat with {selectedMember.name}.
            </p>
            <div className="mt-4 bottom-4 right-4 flex space-x-4 text-sm text-gray-500">
          <input
            type="text"
            className="border rounded-md p-2 w-full"
            placeholder="Message"
          />
        </div>
          </div>
        </div>
      )}
    </div>
  );
}
