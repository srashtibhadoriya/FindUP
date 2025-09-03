import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "../Pages/LoginPage/LoginPage";
import LoginPage from "../src/Pages/LoginPage/Loginpage"
import Sidebar from "../src/Pages/Sidebar/Sidebar";
import PublicFeed from "../src/Pages/FeedPage/PublicFeed";
import Messages from "../src/Pages/Messages/Messsages";
import Discover from "../src/Pages/Discover/Discover";
import ProfileFeed from "../src/Pages/ProfileFeedPages/ProfileFeed";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<LoginPage />} />

        {/* Sidebar + Nested Routes */}
        <Route path="/app" element={<Sidebar />}>
          <Route path="public-feed" element={<PublicFeed />} />
          <Route path="messages" element={<Messages />} />
          <Route path="discover" element={<Discover />} />
          <Route path="profile-feed" element={<ProfileFeed />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
