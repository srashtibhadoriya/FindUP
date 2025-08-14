import { NavLink } from "react-router-dom";
import { MdHome, MdPeople, MdMessage, MdNotifications, MdSettings } from "react-icons/md";

const navItem = [
  { id: "public-feed", label: "Feed", icon: <MdHome />, path: "/public-feed" },
  { id: "messages", label: "Messages", icon: <MdMessage />, path: "/messages" },
  { id: "connections", label: "Connections", icon: <MdPeople />, path: "/connections" },
  { id: "discover", label: "Discover", icon: <MdNotifications />, path: "/discover" },
  { id: "profile-feed", label: "Profile Feed", icon: <MdSettings />, path: "/profile-feed" },
];

const NavItem = ({ icon, text, path }) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      `flex items-center space-x-3 text-md font-medium cursor-pointer p-3 rounded-md ${
        isActive ? "bg-[#1B3C53] text-white" : "text-[##1B3C53] hover:bg-white"
      }`
    }
  >
    <span className="text-xl">{icon}</span>
    <span className="hidden md:inline">{text}</span>
  </NavLink>
);

const SidebarComponent = () => (
  <div className="w-40 md:w-60 h-screen p-4 fixed  ">
    <div className="text-2xl font-bold text-[#1B3C53] mb-8">FindUP</div>

    {/* Mapping nav items */}
    <nav className="space-y-6">
      {navItem.map((item) => (
        <NavItem key={item.id} icon={item.icon} text={item.label} path={item.path} />
      ))}
    </nav>

    <button className="mt-10 bg-[#DDDEAB] text-[#1B3C53] font-semibold w-full rounded-md py-2">
      + Create Post
    </button>
  </div>
);

const Sidebar = () => (
  <div className="flex  ">
    <SidebarComponent />
  <div className="fixed top-4 right-4 pl-16 ">
      <div className="bg-white rounded-xl shadow-md p-2 w-62">
        <div className="flex items-center space-x-4">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            className="w-10 h-10 rounded-full border-4 border-white"
            alt="avatar"
          />
          <div>
            <h2 className="text-md font-semibold">
              John Worsman <span className="text-[#1B3C53]">✔</span>
            </h2>
            <p className="text-sm text-gray-600">@johnny_dev</p>

            
          </div>
        </div>
        <div className="mt-4 flex space-x-4 text-sm text-gray-500">
          <input
            type="text"
            className="border rounded-md p-2 w-full"
            placeholder="Post your deal"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Sidebar;
