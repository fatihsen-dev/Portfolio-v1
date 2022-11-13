import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { MenuPopup } from "./components/MenuPopup";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Blogs } from "./pages/blog/Blogs";
import { Projects } from "./pages/Projects";
import Login from "./pages/admin/Login";
import { Repositories } from "./pages/repositories/Repositories";
import { NotFound } from "./pages/NotFound";
import { Dashboard } from "./pages/admin/Dashboard";
import { darkHandle } from "./store/siteReducer";

function App() {
  const { darkStatus } = useSelector((state) => state.site);
  const discpatch = useDispatch();

  useEffect(() => {
    if (darkStatus === "true") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <div className="h-full flex flex-col dark:bg-darkv4 dark:text-light bg-light text-darkv1">
      <Navbar />
      <MenuPopup />
      <div className="h-full overflow-auto bg-lightv3 dark:bg-darkv2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
