import React, { useState } from "react";

// const peopleData = [
//   {
//     name: 'John Warren',
//     username: '@john_warren',
//     location: 'New York, NY',
//     whishlisted: 2,
//     avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
//     isFollowing: false,
//   },
//   {
//     name: 'Richard Hendricks',
//     username: '@Richard_Hendricks',
//     location: 'New York, NY',
//     whishlisted: 2,
//     avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
//     isFollowing: true,
//   },
//   {
//     name: 'Alexa James',
//     username: '@alexa_james',
//     location: 'New York, NY',
//     whishlisted: 2,
//     avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//     isFollowing: true,
//   },
// ];

const UserCard = ({ user, onToggleFollow }) => {
  return (
    <div className=" p-6 rounded-lg shadow-md w-full sm:w-[90%] md:w-[48%] lg:w-[30%]">
      <div className="flex flex-col items-center text-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt=""
          className="w-16 h-16 rounded-full mb-3"
        />
        <h2 className="font-semibold"></h2>
        <p className="text-gray-500 text-sm mb-1"></p>
        {/* <div className="text-sm mb-2">
          <span className="mr-1">🌐 Dreamer</span>
          <span className="mr-1">📘 Learner</span>
          <span className="mr-1">⚡ Doer</span>
        </div> */}
        {/* <p className="text-sm text-gray-600 mb-3">
          Exploring life one step at a time. ✨ <br />
          Staying curious. Creating with purpose.
        </p> */}
        <div className="flex items-center justify-center gap-3 text-sm text-gray-500 mb-4">
          <span>📍 </span>
          <span>👥 Wishlisted By</span>
        </div>
        <button
          onClick={onToggleFollow}
          className="flex items-center justify-center px-4 py-2 rounded-md text-white text-sm font-medium "
        >
          {/* //     ${user.isFollowing ? 'bg-purple-600 hover:bg-purple-700' : 'bg-[#D92C54] hover:bg-blue-700'}`}
        // >
        //   {user.isFollowing ? 'Following' : 'Follow'} */}
        </button>
      </div>
    </div>
  );
};

const CreatePost = () => {
  //   const [people, setPeople] = useState(peopleData);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-1">Create Post</h1>
      <div className="mb-8"></div>

      <div className="flex flex-wrap gap-6 justify-center lg:justify-between">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              className="w-20 h-20 rounded-full border-4 border-white -mt-16"
              alt="avatar"
            />
            <div>
              <h2 className="text-xl font-bold">
                John Worsman <span className="text-[#1B3C53]">✔</span>
              </h2>
              <p className="text-sm text-gray-600">@johnny_dev</p>

              <div className="flex space-x-4 text-sm mt-2">
                <span>120 Posts | 5.3k Followers | 280 Following</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex space-x-4 text-sm text-gray-500">
            <input type="text" />
          </div>
        </div>
        {/* {people.map((person, index) => (
          <UserCard
            key={index}
            user={person}
            onToggleFollow={() => toggleFollow(index)}
          />
        ))} */}
      </div>
    </div>
  );
};

export default CreatePost;
