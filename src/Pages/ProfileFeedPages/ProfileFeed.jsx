import { useState } from 'react';
// import { MdHome, MdPeople, MdMessage, MdNotifications, MdSettings } from 'react-icons/md';
const posts = [
  {
    id: 1,
    user: 'John Worsman',
    handle: '@johnny_dev',
    time: '2h',
    content: 'We just finished the project! The team did a great job 🎉 #devcommunity #work',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    
  },
  {
    id: 2,
    user: 'John Worsman',
    handle: '@johnny_dev',
    time: '5h',
    content:
      'Check out this great article on open source and why it matters: https://opensource.guide/what-is-open-source/',
  },
  {
    id: 3,
    user: 'John Worsman',
    handle: '@johnny_dev',
    time: '1d',
    content: 'Weekend retreat at the lake 🏞️ #relax',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  },
  {
    id: 4,
    user: 'John Worsman',
    handle: '@johnny_dev',
    time: '2d',
    content: 'Dream car spotted today! 💙 #carlover',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',

  },
];

// const Sidebar = () => (
//   <div className="w-40 md:w-60 h-screen p-4  fixed">
//     <div className="text-2xl font-bold text-[#1B3C53] mb-8">FindUP</div>
//     <nav className="space-y-6 ">
//       <NavItem icon={<MdHome />}  text="Feed" />
//       <NavItem icon={<MdPeople />}  text="People" />
//       <NavItem icon={<MdMessage />}  text="Messages" />
//       <NavItem icon={<MdNotifications />}  text="Notifications" />
//       <NavItem icon={<MdSettings />}  text="Profile" />
//     </nav>
//     <button className="mt-10 bg-[#DDDEAB] text-[#1B3C53] font-semibold  w-full rounded-md py-2 ">+ Create Post</button>
//   </div>
// );

// const NavItem = ({ icon, text, active }) => (
//   <div className={`flex items-center space-x-3 text-sm font-medium cursor-pointer p-2 rounded-md ${active ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'}`}>
//     <span className="text-xl">{icon}</span>
//     <span className="hidden md:inline">{text}</span>
//   </div>
// );

const ProfileHeader = () => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <img
      src="https://images.unsplash.com/photo-1503264116251-35a269479413"
      className="w-full h-48 object-cover rounded-lg mb-4"
      alt="cover"
    />
    <div className="flex items-center space-x-4">
      <img
        src="https://randomuser.me/api/portraits/men/75.jpg"
        className="w-20 h-20 rounded-full border-4 border-white -mt-16"
        alt="avatar"
      />
      <div>
        <h2 className="text-xl font-bold">John Worsman <span className="text-[#1B3C53]">✔</span></h2>
        <p className="text-sm text-gray-600">@johnny_dev</p>
        <p className="text-sm text-gray-500">Full-stack Developer | Coffee Lover | Building @pingup</p>
        <div className="flex space-x-4 text-sm mt-2">
          <span>120 Posts</span>
          <span>5.3k Followers</span>
          <span>280 Following</span>
        </div>
      </div>
    </div>
    <div className="mt-4 flex space-x-4 text-sm text-gray-500">
      <button className="border px-4 py-1 rounded-full hover:bg-gray-100">Posts</button>
      <button className="border px-4 py-1 rounded-full hover:bg-gray-100">Friends</button>
      <button className="border px-4 py-1 rounded-full hover:bg-gray-100">Media</button>
    </div>
  </div>
);

const Post = ({ post }) => (
  <div className="bg-white rounded-xl shadow-md p-6 mb-4">
    <div className="flex items-center space-x-4 mb-2">
      <img src="https://randomuser.me/api/portraits/men/75.jpg" className="w-10 h-10 rounded-full" alt="avatar" />
      <div>
        <h4 className="font-bold">{post.user}</h4>
        <p className="text-sm text-gray-500">{post.handle} • {post.time}</p>
      </div>
    </div>
    <p className="mb-2 text-gray-800 whitespace-pre-line">{post.content}</p>
    {post.image && <img src={post.image} className="w-full rounded-lg mb-2" alt="post" />}
    <div className="flex space-x-6 text-gray-500 text-sm">
      <span>💬 27</span>
      <span>❤️ 147</span>
    </div>
  </div>
);

const ProfileFeed = () => (
  <div className="flex">
    {/* <Sidebar /> */}
    <main className=" flex-1 p-4 bg-[#DDDEAB] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <ProfileHeader />
        <div className="mt-6">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  </div>
);

export default ProfileFeed;
