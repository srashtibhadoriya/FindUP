import React, { useState } from 'react';

const peopleData = [
  {
    name: 'John Warren',
    username: '@john_warren',
    location: 'New York, NY',
    whishlisted: 2,
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    isFollowing: false,
  },
  {
    name: 'Richard Hendricks',
    username: '@Richard_Hendricks',
    location: 'New York, NY',
    whishlisted: 2,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    isFollowing: true,
  },
  {
    name: 'John Warren',
    username: '@john_warren',
    location: 'New York, NY',
    whishlisted: 2,
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    isFollowing: false,
  },
  {
    name: 'Richard Hendricks',
    username: '@Richard_Hendricks',
    location: 'New York, NY',
    whishlisted: 2,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    isFollowing: true,
  },
  {
    name: 'John Warren',
    username: '@john_warren',
    location: 'New York, NY',
    whishlisted: 2,
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    isFollowing: false,
  },
  {
    name: 'Richard Hendricks',
    username: '@Richard_Hendricks',
    location: 'New York, NY',
    whishlisted: 2,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    isFollowing: true,
  },
  {
    name: 'John Warren',
    username: '@john_warren',
    location: 'New York, NY',
    whishlisted: 2,
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    isFollowing: false,
  },
  {
    name: 'Richard Hendricks',
    username: '@Richard_Hendricks',
    location: 'New York, NY',
    whishlisted: 2,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    isFollowing: true,
  },
  {
    name: 'John Warren',
    username: '@john_warren',
    location: 'New York, NY',
    whishlisted: 2,
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    isFollowing: false,
  },
  {
    name: 'Richard Hendricks',
    username: '@Richard_Hendricks',
    location: 'New York, NY',
    whishlisted: 2,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    isFollowing: true,
  },
  {
    name: 'Alexa James',
    username: '@alexa_james',
    location: 'New York, NY',
    whishlisted: 2,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    isFollowing: true,
  },
];

const UserCard = ({ user, onToggleFollow }) => {
  return (
    <div className=" p-6 rounded-lg shadow-md w-full sm:w-[90%] md:w-[48%] lg:w-[30%]">
      <div className="flex flex-col items-center text-center">
        <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full mb-3" />
        <h2 className="font-semibold">{user.name}</h2>
        <p className="text-gray-500 text-sm mb-1">{user.username}</p>
        
        <div className="flex items-center justify-center gap-3 text-sm text-gray-500 mb-4">
          <span>📍 {user.location}</span>
          <span>👥 {user.whishlisted} Wishlisted By</span>
        </div>
        <button
          onClick={onToggleFollow}
          className={`flex items-center justify-center px-4 py-2 rounded-md text-white text-sm font-medium 
            ${user.isFollowing ? 'bg-[#1B3C53] ' : 'bg-[#1B3C53] '}`}
        >
          {user.isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

const Discover = () => {
  const [people, setPeople] = useState(peopleData);

  const toggleFollow = (index) => {
    const updated = [...people];
    updated[index].isFollowing = !updated[index].isFollowing;
    setPeople(updated);
  };

  return (
  <div className="flex -ml-18 mr-18  ">

    <div className="px-8 py-8 max-w-7xl mx-auto bg-white">
      <h1 className="text-2xl font-bold mb-1">Discover People</h1>
      <p className="text-gray-600 mb-6">Connect with amazing people and grow your network</p>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search people by name, username, bio, or location..."
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div className="flex flex-wrap gap-6 justify-center lg:justify-between">
        {people.map((person, index) => (
          <UserCard
            key={index}
            user={person}
            onToggleFollow={() => toggleFollow(index)}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Discover;
