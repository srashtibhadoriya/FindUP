import React from "react";

const stories = [
  { id: 1, label: "Create Story", image: "" },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
];

const Story = () => {
  return (
    <div className=" flex space-x-4  overflow-x-auto p-4 bg-[#DDDEAB] rounded-lg ml-36">
      {stories.map((story, index) => (
        <div
          key={index}
          className="min-w-[100px] h-[130px] rounded-xl bg- overflow-hidden flex-shrink-0"
        >
          {story.image && (
            <img
              src={story.image}
              alt="Add story +"
              className="w-[100px] h-[130px] rounded-xl object-cover"
            />
          )}

          {story.label && (
            <div className=" text-white text-sm font-semibold bg-black bg-opacity-50 rounded px-1 py-0.5 text-center">
              {story.label}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Story;
