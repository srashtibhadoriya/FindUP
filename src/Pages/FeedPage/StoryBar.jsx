import React from "react";

const stories = [
  { id: 1, label: "Create Story", image: "/images/story1.jpg" },
  { id: 2, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { id: 3, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { id: 4, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
];

const Story = () => {
  return (
    <div className="flex space-x-4 pl-28 overflow-x-auto p-4 bg-[#DDDEAB] rounded-lg mb-6">
      {stories.map((story, index) => (
        <div
          key={index}
          className="min-w-[100px] h-[130px] rounded-xl bg-gray-100 overflow-hidden relative flex-shrink-0" style={{
    borderImage: 'linear-gradient(90deg, #1B3C53,#DDDEAB, #D2C1B6) 1',
    borderStyle: 'solid '
  }}
        >
          <img
            src={story.image}
            alt={`story-${index}`}
            className="w-[90px] h-[130px] rounded-xl object-cover"  
          />
          {story.label && (
            <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-semibold bg-black bg-opacity-50 rounded px-1 py-0.5 text-center">
              {story.label}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Story;
