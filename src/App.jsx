import { HashRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import PostItems from "./components/PostItems";

export default function App() {
  return (
    <HashRouter>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
          <Link
            to={"/"}
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4">App Logo</span>
          </Link>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/profile"}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/posts"}>
                Posts
              </Link>
            </li>
          </ul>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts/cat" element={<Posts />} />
        <Route path="posts/:no" element={<PostItems />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/:id" element={<Profile />} />
      </Routes>
      <footer>Footer</footer>
    </HashRouter>
  );
}
