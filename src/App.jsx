import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Pages/Sidebar/Sidebar";
import Messages from "./Pages/Messages/Messsages";
// Import your actual page components (replace placeholders later)
// import Feed from "./pages/Feed";
// import Messages from "./pages/Messages";
// import Connections from "./pages/Connections";
// import Profile from "./pages/Profile";
import Discover from "./Pages/Discover/Discover";
import ProfileFeed from "./Pages/ProfileFeedPages/ProfileFeed";
import PublicFeed from "./Pages/FeedPage/PublicFeed";
function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar always visible */}
        <Sidebar />

        {/* Main content changes with route */}
        <main className="bg-gradient-to-br from-[#1B3C53] via-[#456882] to-[#1B3C53] md:ml-60 flex-1 p-4 min-h-screen ">
          <div className="max-w-5xl mx-auto mt-6">
            <Routes>
              <Route path="/public-feed" element={<PublicFeed />} />
              <Route path="/messages" element={<Messages />} />
              {/* <Route path="/connections" element={<Connections />} /> */}
              <Route path="/discover" element={<Discover />} />
              <Route path="/profile-feed" element={<ProfileFeed />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
