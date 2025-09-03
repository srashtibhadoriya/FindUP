import { useState } from "react";
import { MdFavorite, MdFavoriteBorder, MdChatBubbleOutline } from "react-icons/md";

const posts = [
  {
    id: 1,
    user: "John Worsman",
    handle: "@johnny_dev",
    time: "2h",
    content:
      "We just finished the project! The team did a great job 🎉 #work",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    likes: 147,
    comments: 27,
  },
  {
    id: 2,
    user: "John Worsman",
    handle: "@johnny_dev",
    time: "5h",
    content:
      "Check out this great article on open source and why it matters: https://opensource.guide/what-is-open-source/",
    likes: 98,
    comments: 12,
  },
  {
    id: 3,
    user: "John Worsman",
    handle: "@johnny_dev",
    time: "1d",
    content: "Weekend retreat at the lake 🏞️ #relax",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    likes: 210,
    comments: 45,
  },
  {
    id: 4,
    user: "John Worsman",
    handle: "@johnny_dev",
    time: "2d",
    content: "Dream space spotted today! 💙",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    likes: 320,
    comments: 63,
  },
];

// Single Post Component
const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const toggleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-4">
      <div className="flex items-center space-x-4 mb-2">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          className="w-10 h-10 rounded-full"
          alt="avatar"
        />
        <div>
          <h4 className="font-bold">{post.user}</h4>
          <p className="text-sm text-gray-500">
            {post.handle} • {post.time}
          </p>
        </div>
      </div>

      <p className="mb-2 text-gray-800 whitespace-pre-line">{post.content}</p>
      {post.image && (
        <img src={post.image} className="w-full rounded-lg mb-2" alt="post" />
      )}

      {/* Icons row */}
      <div className="flex space-x-6 text-gray-500 text-sm">
        <span className="flex items-center space-x-1 cursor-pointer">
          <MdChatBubbleOutline className="text-lg" />
          <span>{post.comments}</span>
        </span>

        <span
          className={`flex items-center space-x-1 cursor-pointer ${
            liked ? "text-red-500" : ""
          }`}
          onClick={toggleLike}
        >
          {liked ? (
            <MdFavorite className="text-lg" />
          ) : (
            <MdFavoriteBorder className="text-lg" />
          )}
          <span>{likeCount}</span>
        </span>
      </div>
    </div>
  );
};

// Feed Component
const PublicFeed = () => (
  <div className="flex -ml-18 mr-18">
    <main className="flex-1 p-16 bg-white min-h-screen">
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
