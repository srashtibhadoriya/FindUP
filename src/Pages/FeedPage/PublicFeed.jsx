import { useState } from 'react';
// import { MdHome, MdPeople, MdMessage, MdNotifications, MdSettings } from 'react-icons/md';
import Sidebar from '../Sidebar/Sidebar';
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

const PublicFeed = () => (
  <div className="flex -ml-18 mr-18  ">
    {/* <Sidebar /> */}
    <main className=" flex-1 p-16 bg-white min-h-screen">

      <div className="max-w-5xl mx-auto">
        
        <div className="mt-2">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  </div>
);

export default PublicFeed;
