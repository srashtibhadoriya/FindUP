import { MdHome, MdPeople, MdMessage, MdNotifications, MdSettings } from 'react-icons/md';

const navItem = {
  feed: [
    { id: "public-feed", label: "Feed", icon: <MdHome /> },
    { id: "messages", label: "Messages", icon: <MdMessage /> },
    { id: "connections", label: "Connections", icon: <MdPeople /> },
    { id: "discover", label: "Discover", icon: <MdNotifications /> },
    { id: "profile-feed", label: "Profile Feed", icon: <MdSettings /> },
  ]
};

const NavItem = ({ icon, text, active }) => (
  <div
    className={`flex items-center space-x-3 text-sm font-medium cursor-pointer p-2 rounded-md ${
      active ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    <span className="text-xl">{icon}</span>
    <span className="hidden md:inline">{text}</span>
  </div>
);

const SidebarComponent = () => (
  <div className="w-40 md:w-60 h-screen p-4 fixed">
    <div className="text-2xl font-bold text-[#1B3C53] mb-8">FindUP</div>

    {/* Mapping nav items */}
    <nav className="space-y-6">
      {navItem.feed.map((item) => (
        <NavItem
          key={item.id}
          icon={item.icon}
          text={item.label}
          active={item.id === "public-feed"} // Example: active first item
        />
      ))}
    </nav>

    <button className="mt-10 bg-[#DDDEAB] text-[#1B3C53] font-semibold w-full rounded-md py-2">
      + Create Post
    </button>
  </div>
);

const Sidebar = () => (
  <div className="flex">
    <SidebarComponent />
    <main className="ml-20 md:ml-60 flex-1 p-4 bg-[#DDDEAB] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mt-6"></div>
      </div>
    </main>
  </div>
);

export default Sidebar;
